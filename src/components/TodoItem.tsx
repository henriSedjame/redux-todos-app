import '../App.css'
import {AppState, Todo} from "../store/state.ts";
import {FunctionComponent} from "react";
import {connect, MapDispatchToPropsParam} from "react-redux";
import {Dispatch} from "redux";
import {TodoActions} from "../store/actions.ts";

export type TodoItemProps = {
    todo: Todo,
}

export type TodoItemDispatchProps = {
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
}

export const TodoItem: FunctionComponent<TodoItemProps & TodoItemDispatchProps> = (props) => {

    const toggleTodo = () => {
        props.toggleTodo(props.todo.id)
    }

    const deleteTodo = () => {
        props.deleteTodo(props.todo.id)
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

const mapDispatchToProps: MapDispatchToPropsParam<TodoItemDispatchProps, TodoItemProps> = (dispatch : Dispatch<TodoActions>) => ({
    toggleTodo: (id: number) => dispatch({type: 'TOGGLE_TODO', id}),
    deleteTodo: (id: number) => dispatch({type: 'DELETE_TODO', id})
})

export const ConnectedTodoItem = connect<unknown, TodoItemDispatchProps, TodoItemProps, AppState>(
    null,
    mapDispatchToProps
)(TodoItem)