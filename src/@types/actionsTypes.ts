import { Action } from 'redux';

// Common
export type ActionWithData<T> = Action & {data: T};
// Error
export type ErrorAction = Action & {error: string};
