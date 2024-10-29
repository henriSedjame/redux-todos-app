import {searchSlice, todoSlice} from "./reducers.ts";
import {bindActionCreators} from "redux";
import {store} from "./store.ts";

export const actionDispatchers = bindActionCreators(
    {...todoSlice.actions, ...searchSlice.actions},
    store.dispatch)
