import {AppState} from "./state.ts";
import {createSelector} from "reselect";

export const selectTodos = (state: AppState) => state.todos

export const selectSearchTerm = (state: AppState) => state.searchTerm

/*export const selectFilteredTodos = (state: AppState) => {
    return state.todos.filter(todo => todo.label.toLowerCase().includes(state.searchTerm.toLowerCase()))
}*/

export const selectFilteredTodos = createSelector(
    selectTodos,
    selectSearchTerm,
    (todos, searchTerm) =>  todos.filter(todo => todo.label.toLowerCase().includes(searchTerm.toLowerCase()))
)