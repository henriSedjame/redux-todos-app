import '../App.css'
import {Todo} from "../models.ts";
import {FunctionComponent} from "react";

export type TodoItemProps = {
    todo: Todo,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void
}

export const TodoItem: FunctionComponent<TodoItemProps> = (props) => (
    <>
        <div className={'todo_item'}>
            <input type="checkbox" checked={props.todo.completed} onChange={() => props.toggleTodo(props.todo.id)}/>
            <span>{props.todo.label}</span>
            <button onClick={() => props.deleteTodo(props.todo.id)}>❌</button>
        </div>
    </>
)