import { Probot } from 'probot';

export default (app: Probot) => {
	// app.on(['issues.opened', 'issues.reopened'], async (context) => {
	// 	const issueComment = context.issue({
	// 		body: 'Thanks for opening this issue!',
	// 	});
	// 	await context.octokit.issues.createComment(issueComment);
	// });
	app.on('issues.assigned', async (context) => {
		context.log.info(context);
	});
	app.onAny(async (context) => {
		app.log.info({ action: context.payload.action, event: context.name });
	});
};
