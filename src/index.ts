import { Context, Probot } from 'probot';

export default (app: Probot) => {
	app.on('issues.assigned', async (context: Context) => {
		const assignee = context.payload.assignee?.login || 'unknown';
		const branch = `${context.payload.issue.number}-${assignee.replace(/[^a-z0-9]/gi, '_')}`;
		context.octokit.issues.createComment(
			context.issue({
				body: `Opened branch ${branch} for assignee ${assignee}`,
			})
		);
	});
	app.onAny(async (context) => {
		app.log.info({ action: context.payload.action, event: context.name });
	});
};
