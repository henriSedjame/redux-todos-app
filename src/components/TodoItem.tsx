import '../App.css'
import {Todo} from "../store/state.ts";
import {FunctionComponent} from "react";
import {store} from "../store/store.ts";

export type TodoItemProps = {
    todo: Todo,

}

export const TodoItem: FunctionComponent<TodoItemProps> = (props) => {

    const toggleTodo = () => {
        store.dispatch({type: 'TOGGLE_TODO', id: props.todo.id})
    }

    const deleteTodo = () => {
        store.dispatch({type: 'DELETE_TODO', id: props.todo.id})
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