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
    todos: [],
    searchTerm: ''
}

export const fakeApi = {
    loadTodos: async () : Promise<Todo[]> => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        return [
            {
                id: 1,
                label: 'Prepare breakfast',
                completed: false
            },
            {
                id: 2,
                label: 'Go to the gym',
                completed: true
            },
            {
                id: 3,
                label: 'Work on the project',
                completed: false
            }
        ]
    }
}