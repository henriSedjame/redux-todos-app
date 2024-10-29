import {initialState, Todo} from "./state.ts";
import {TodoActions} from "./actions.ts";

const addTodo = (state: Todo[]) => (label: string): Todo[] => ([...state, {
    id: state.length + 1,
    label: label,
    completed: false
}])

const toggleTodo = (state: Todo[]) => (id: number): Todo[] => (
    state.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
)

const deleteTodo = (state: Todo[]) => (id: number): Todo[] => {
    const todos = state.filter(todo => todo.id !== id)
    return todos.map((todo, index) => ({...todo, id: index + 1}))
}

export const todoReducer = (state: Todo[] = initialState.todos, action: TodoActions) => {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state)(action.label)
        case 'TOGGLE_TODO':
            return toggleTodo(state)(action.id)
        case 'DELETE_TODO':
            return deleteTodo(state)(action.id)
        default:
            return state
    }
}

export const searchReducer = (state: string = initialState.searchTerm , action: TodoActions) => {
    switch (action.type) {
        case 'SEARCH_TODO':
            return action.term
        default:
            return state
    }
}
