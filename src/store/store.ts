
import {configureStore} from "@reduxjs/toolkit";
import {searchReducer, todosReducer} from "./reducers.ts";
import {logger} from "./middlewares.ts";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        searchTerm: searchReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(logger)
})