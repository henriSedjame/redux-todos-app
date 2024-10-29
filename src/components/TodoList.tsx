import {FunctionComponent} from "react";
import {AppState, Todo} from "../store/state.ts";
import {ConnectedTodoItem} from "./TodoItem.tsx";
import {connect, MapStateToPropsParam} from "react-redux";

export type TodoListProps = {
    todos: Todo[],
}

export const TodoList: FunctionComponent<TodoListProps> = (props) => {

    return (<>
        {props.todos.map(todo => (
            <ConnectedTodoItem key={todo.id} todo={todo} />))}
    </>)
}


const mapStateToProps : MapStateToPropsParam<TodoListProps, unknown, AppState> = (state) => ({
    todos: state.todos.filter(todo => todo.label.toLowerCase().includes(state.searchTerm.toLowerCase()))
})

export const ConnectedTodoList = connect(
    mapStateToProps
)(TodoList)