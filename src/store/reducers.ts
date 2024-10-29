import {fakeApi, initialState, Todo} from "./state.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

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

export const loadTodos = createAsyncThunk(
    'todos/loadTodos',
    async () => await fakeApi.loadTodos()
        .then(todos => todos)
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState.todos,
    reducers: {
        addTodo: (state, action ) => addTodo(state)(action.payload),
        toggleTodo: (state, action) => toggleTodo(state)(action.payload),
        deleteTodo: (state, action) => deleteTodo(state)(action.payload)
    },
    extraReducers: builder => {
        builder.addCase(loadTodos.pending,
            () => {console.log('loading todos...')})

        builder.addCase(loadTodos.fulfilled,
            (_state, action) => action.payload
        )

        builder.addCase(loadTodos.rejected, () => {
            alert('error loading todos')
        })
    }
})

export const searchSlice = createSlice({
    name: 'searchTerm',
    initialState: initialState.searchTerm,
    reducers: {
        searchTodo: (_state, action) => action.payload
    }
})

export const todosReducer = todoSlice.reducer

export const searchReducer = searchSlice.reducer
