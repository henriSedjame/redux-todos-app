import {FunctionComponent, useState} from "react";
import {initialState, Todo} from "../store/state.ts";
import {TodoItem} from "./TodoItem.tsx";
import {store} from "../store/store.ts";

export type TodoListProps = {
    todos: Todo[],
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}
export const TodoList: FunctionComponent = () => {

    const [todos, setTodos] = useState<Todo[]>(initialState.todos)

    store.subscribe(() => {
        const state = store.getState();
        setTodos(
            state.todos.filter(
                todo => todo.label.toLowerCase().includes(state.searchTerm.toLowerCase()))
        )
    })

    return (<>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />))}
    </>)
}