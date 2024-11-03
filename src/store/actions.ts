import {Action} from "redux";
import {fakeApi, Todo} from "./state.ts";
import {store} from "./store.ts";

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

export  type TodosLoadedAction = Action<'LOAD_TODOS'> & { todos: Todo[] }

export type loadingAction = Action<'LOADING'> & { loading: boolean }

export type TodoActions = AddTodoAction | ToggleTodoAction | DeleteTodoAction | SearchTodoAction | TodosLoadedAction | loadingAction

export const loadTodos = () => async (dispatch : typeof store.dispatch) => {
    dispatch({
        type: 'LOADING',
        loading: true
    })
    const todos = await fakeApi.loadTodos()
    dispatch({
        type: 'LOAD_TODOS',
        todos
    })
    dispatch({
        type: 'LOADING',
        loading: false
    })
}
