import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {searchReducer, todoReducer} from "./reducers.ts";
import {composeWithDevTools} from "redux-devtools-extension";
import {AppState} from "./state.ts";
import {TodoActions} from "./actions.ts";

// @ts-expect-error(2322)
export const store : Store<AppState, TodoActions> = createStore(combineReducers({
    todos: todoReducer,
    searchTerm: searchReducer
}), composeWithDevTools());