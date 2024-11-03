export type Todo = {
    id: number,
    label: string,
    completed: boolean
}

export type AppState = {
    todos: Todo[],
    searchTerm: string,
    loading: boolean
}

export const initialState: AppState = {
    todos: [],
    searchTerm: '',
    loading: false
}

export const fakeApi = {
    loadTodos: async () => {
        return new Promise<Todo[]>(resolve => {
            setTimeout(() => {
                resolve([
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
                ])
            }, 2000)
        })
    }
}