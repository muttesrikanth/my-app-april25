import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.action"

export const initialstate=0

export const counterReducer=createReducer(
    initialstate,
    on(increment,(State)=>State+1),
    on(decrement,(State)=>State-1),
    on(reset,()=>0),
)