import { Action } from 'redux';

// Common
export type ActionWithData<D> = Action & {data: D};
// Error
export type ErrorAction = Action & {error: string};
