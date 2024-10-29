import {Action} from "redux";

export type AddTodoAction = Action<'ADD_TODO'> & {
    label: string
}

export type ToggleTodoAction = Action<'TOGGLE_TODO'> & {
    id: number
}

export type DeleteTodoAction = Action<'DELETE_TODO'> & {
    id: number
}

export type SearchTodoAction = Action<'SEARCH_TODO'> & {
    term: string
}

export type TodoActions = AddTodoAction | ToggleTodoAction | DeleteTodoAction | SearchTodoAction

export type TodoActionTypes = TodoActions['type']

