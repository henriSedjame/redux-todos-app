import {Dispatch, Middleware} from "redux";
import {AppState} from "./state.ts";
import {PayloadAction} from "@reduxjs/toolkit";

export const logger : Middleware<unknown, AppState, Dispatch<PayloadAction<string|number>>> = store => next => action => {
    console.log('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    return result
}