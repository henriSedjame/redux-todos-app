
import {configureStore} from "@reduxjs/toolkit";
import {searchReducer, todosReducer} from "./reducers.ts";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        searchTerm: searchReducer
    }
})