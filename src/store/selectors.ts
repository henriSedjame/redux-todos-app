import {AppState} from "./state.ts";
import {createSelector} from "@reduxjs/toolkit";

export const selectTodos = (state: AppState) => state.todos

export const selectSearchTerm = (state: AppState) => state.searchTerm

export const selectFilteredTodos = createSelector(
    selectTodos,
    selectSearchTerm,
    (todos, searchTerm) =>  todos.filter(todo => todo.label.toLowerCase().includes(searchTerm.toLowerCase()))
)