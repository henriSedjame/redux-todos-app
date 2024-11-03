import {Middleware} from "redux";
import {AppState} from "./state.ts";
import {store} from "./store.ts";

export const logger: Middleware<unknown, AppState, typeof store.dispatch> =
    store => next => action => {
        console.log('dispatching', action)
        const result = next(action)
        console.log('next state', store.getState())
        return result
    }