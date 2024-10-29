import {AppState} from "./state.ts";

export const selectTodoLabels = (state: AppState) => state.todos.map(todo => todo.label)

export const selectSearchTerm = (state: AppState) => state.searchTerm

export const selectFilteredTodos = (state: AppState) => {
    return state.todos.filter(todo => todo.label.toLowerCase().includes(state.searchTerm.toLowerCase()))
}