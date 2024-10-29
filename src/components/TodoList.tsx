import {FunctionComponent} from "react";
import {Todo} from "../models.ts";
import {TodoItem} from "./TodoItem.tsx";

export type TodoListProps = {
    todos: Todo[],
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

export const TodoList: FunctionComponent<TodoListProps> = (props) => (
    <>
        {props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo}/>))}
    </>
)