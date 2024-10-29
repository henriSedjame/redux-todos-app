import '../App.css'
import {Todo} from "../store/state.ts";
import {FunctionComponent} from "react";
import {bindActionCreators} from "redux";
import {appDispatch} from "../store/hooks.ts";

export type TodoItemProps = {
    todo: Todo,
}

export const TodoItem: FunctionComponent<TodoItemProps> = (props) => {

    const actions = bindActionCreators({
        toggleTodo: (id: number) =>({type: 'TOGGLE_TODO', id}),
        deleteTodo: (id: number) => ({type: 'DELETE_TODO', id})
    }, appDispatch())

    const toggleTodo = () => {
        actions.toggleTodo(props.todo.id)
    }

    const deleteTodo = () => {
        actions.deleteTodo(props.todo.id)
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