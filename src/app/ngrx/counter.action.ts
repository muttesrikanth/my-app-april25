import { createAction } from "@ngrx/store";

export const increment=createAction('[count] increment')
export const decrement=createAction('[count] decrement')
export const reset=createAction('[count] reset')