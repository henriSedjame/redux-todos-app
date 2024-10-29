import '../App.css'
import {Todo} from "../store/state.ts";
import {FunctionComponent} from "react";
import {actionDispatchers} from "../store/action-dispatchers.ts";

export type TodoItemProps = {
    todo: Todo,
}

export const TodoItem: FunctionComponent<TodoItemProps> = (props) => {

    const toggleTodo = () => {
       actionDispatchers.toggleTodo(props.todo.id)
    }

    const deleteTodo = () => {
       actionDispatchers.deleteTodo(props.todo.id)
    }

    return (
        <>
            <div className={'todo_item'}>
                <input type="checkbox" checked={props.todo.completed} onChange={toggleTodo}/>
                <span>{props.todo.label}</span>
                <button onClick={deleteTodo}>❌</button>
            </div>
        </>
    )
}