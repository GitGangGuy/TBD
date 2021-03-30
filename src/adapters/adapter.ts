/**
 * @description The specification for adapters to implement
 */

export const enum ListenerEvents {
	IssueAssigned,
}
export interface Listener<T> {
	data: T;
}
export interface Adapter<TListener> {
	listen(event: string): Promise<Listener<TListener>>;
}
