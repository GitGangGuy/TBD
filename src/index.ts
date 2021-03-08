import { Probot } from 'probot';

export default (app: Probot) => {
	app.on(['issues.opened', 'issues.reopened'], async (context) => {
		const issueComment = context.issue({
			body: 'Thanks for opening this issue!',
		});
		await context.octokit.issues.createComment(issueComment);
	});
	app.onAny(async (context: any) => {
		context.log.info({ action: context.payload.action, event: context.name });
	});
};
