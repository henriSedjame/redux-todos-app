import {Reducer} from "redux";
import {AppState, initialState} from "./state.ts";
import {TodoActions} from "./actions.ts";

const addTodo = (state: AppState) => (label: string) : AppState  => ({
    ...state,
    todos: [
        ...state.todos,
        {
            id: state.todos.length + 1,
            label: label,
            completed: false
        }
    ]
})

const toggleTodo = (state: AppState) => (id: number) : AppState => ({
    ...state,
    todos: state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
})

const deleteTodo = (state: AppState) => (id: number) : AppState => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
})

const searchTodo = (state: AppState) => (term: string) : AppState => ({
    ...state,
    searchTerm: term
})

export const todosReducer : Reducer<AppState, TodoActions> = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state)(action.label)
        case 'TOGGLE_TODO':
            return toggleTodo(state)(action.id)
        case 'DELETE_TODO':
            return deleteTodo(state)(action.id)
        case 'SEARCH_TODO':
            return searchTodo(state)(action.term)
        default:
            return state
    }
}
