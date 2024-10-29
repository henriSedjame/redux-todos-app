import {FunctionComponent} from "react";
import {appSelector} from "../store/hooks.ts";
import {selectFilteredTodos} from "../store/selectors.ts";
import {TodoItem} from "./TodoItem.tsx";

export const TodoList: FunctionComponent = () => {
    const todos = appSelector(selectFilteredTodos)
    return (<>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />))}
    </>)
}