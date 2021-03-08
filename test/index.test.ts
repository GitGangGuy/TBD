// You can import your modules
// import index from '../src/index'

import nock from 'nock';
// Requiring our app implementation
import { Probot, ProbotOctokit } from 'probot';
import myProbotApp from '../src';
// Requiring our fixtures
import payload from './fixtures/issues.opened.json';

const issueCreatedBody = { body: 'Thanks for opening this issue!' };
const fs = require('fs');
const path = require('path');

const privateKey = fs.readFileSync(path.join(__dirname, 'fixtures/mock-cert.pem'), 'utf-8');

describe('My Probot app', () => {
	let probot: any;

	beforeEach(() => {
		nock.disableNetConnect();
		probot = new Probot({
			// disable request throttling and retries for testing
			Octokit: ProbotOctokit.defaults({
				retry: { enabled: false },
				throttle: { enabled: false },
			}),

			appId: 123,

			privateKey,
		});
		// Load our app into probot
		probot.load(myProbotApp);
	});

	test('creates a comment when an issue is opened', async () => {
		const scope = nock('https://api.github.com')
			// Test that we correctly return a test token
			.post('/app/installations/2/access_tokens')
			.reply(200, {
				permissions: {
					issues: 'write',
				},
				token: 'test',
			})

			// Test that a comment is posted
			.post('/repos/hiimbex/testing-things/issues/1/comments', (body: any) => {
				expect(body).toMatchObject(issueCreatedBody);
				return true;
			})
			.reply(200);

		// Receive a webhook event
		await probot.receive({ name: 'issues', payload });

		scope.done();
	});

	afterEach(() => {
		nock.cleanAll();
		nock.enableNetConnect();
	});
});
