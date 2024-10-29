

export type Todo = {
    id: number,
    label: string,
    completed: boolean
}

export type AppState = {
    todos: Todo[],
    filter: 'all' | 'completed' | 'uncompleted'
    searchTerm: string
}