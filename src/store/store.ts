import {applyMiddleware, combineReducers, legacy_createStore as createStore, Store} from "redux";
import {loadingReducer, searchReducer, todoReducer} from "./reducers.ts";
import {composeWithDevTools} from "redux-devtools-extension";
import {AppState} from "./state.ts";
import {TodoActions} from "./actions.ts";
import {logger} from "./middlewares.ts";
import {thunk} from "redux-thunk";

// @ts-expect-error(2322)
export const store: Store<AppState, TodoActions> = createStore(combineReducers({
        todos: todoReducer,
        searchTerm: searchReducer,
        loading: loadingReducer
    }),
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
);