import { Context } from 'probot';

/**
 * @description Resolves all Promise values of an object
 * @param obj An object with to-be-resolved Promises as values
 * @returns The object with its promises resolved
 */
export const resolveObject = async <T extends object>(obj: { [K in keyof T]: Promise<T[K]> | T[K] }) =>
	Object.fromEntries((await Promise.all(Object.values(obj))).map((el, i) => [Object.keys(obj)[i], el])) as T;

/**
 * @description Gets the repository owner from the context's payload
 * @param context A probot Context instance
 * @returns The context's payload repository owner
 */
export const getRepoOwner = async (context: Context) => context.payload.repo.owner.login as string;

/**
 * @description Gets the repository name from the context's payload
 * @param context A probot Context instance
 * @returns The context's payload repository name
 */
export const getRepoName = async (context: Context) => context.payload.repo.name as string;

/**
 * @description Puts all getRepo* methods into a convenient object
 * @param context A probot Context instance
 * @returns All getRepo* methods in an object
 */
export const getRepo = async (context: Context) =>
	resolveObject({
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
export const getBranch = async (context: Context, branch: string) => {
	const { owner, repo } = await getRepo(context);
	return context.octokit.git.getRef({
		owner,
		ref: `heads/${branch}`,
		repo,
	});
};

// export const setBranch = async (context: Context, branch: string) => {
// 	const { owner, repo } = await getRepo(context);
// 	if (!await getBranch())
// };
