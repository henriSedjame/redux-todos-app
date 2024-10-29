import {legacy_createStore as createStore} from "redux";
import {todosReducer} from "./reducers.ts";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(todosReducer, composeWithDevTools());