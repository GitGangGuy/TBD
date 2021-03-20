import { Context } from 'probot';
import { zipObject } from 'lodash-es';

/**
 *
 * @param context A probot Context instance
 * @returns The context's payload repository owner
 */
export const getRepoOwner = async (context: Context) => context.payload.repo.owner.login as string;

/**
 *
 * @param context A probot Context instance
 * @returns The context's payload repository name
 */
export const getRepoName = async (context: Context) => context.payload.repo.name as string;

/**
 *
 * @param context A probot Context instance
 * @returns All getRepo* methods in an object
 */
export const getRepo = async (context: Context) =>
	(async (meta) => zipObject(Object.keys(meta), await Promise.all(Object.values(meta))))({
		owner: getRepoOwner(context),
		repo: getRepoName(context),
	});

/**
 *
 * @param context A probot Context instance
 * @param name The name of the branch
 * @param repoMeta Metadata associated with the repo (retrieve with {@link getRepo})
 * @returns The ref from git (@see context.octokit.git.getRef)
 */
export const getBranch = async (context: Context, branch: string, repoMeta?: typeof getRepo) => {
	const { owner, repo } = await (repoMeta ? repoMeta(context) : getRepo(context));
	return context.octokit.git.getRef({
		owner,
		ref: `heads/${branch}`,
		repo,
	});
};

// export const setBranch = async (context: Context, name: string) => {
// 	// TODO
// };
