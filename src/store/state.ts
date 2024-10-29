export type Todo = {
    id: number,
    label: string,
    completed: boolean
}

export type AppState = {
    todos: Todo[],
    searchTerm: string
}

export const initialState: AppState = {
    todos: [
        {
            id: 1,
            label: 'Learn TypeScript',
            completed: false
        },
        {
            id: 2,
            label: 'Learn React',
            completed: true
        },
        {
            id: 3,
            label: 'Learn Redux',
            completed: false
        }
    ],
    searchTerm: ''
}