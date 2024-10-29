import '../App.css'
import {FunctionComponent, useRef} from "react";
import {actionDispatchers} from "../store/action-dispatchers.ts";

export type AddInputProps = {
    add: (value: string) => void
}

export const AddInput: FunctionComponent = () => {
    const todoLabelRef= useRef<HTMLInputElement>(null)

    const addTodo = () => {
        if (todoLabelRef.current && todoLabelRef.current.value.length >= 3) {
            actionDispatchers.addTodo(todoLabelRef.current.value)
            todoLabelRef.current.value = ''
        }
    }

    return (
        <div className={'add_input'}>
            <input ref={todoLabelRef} placeholder={'New todo'}/>
            <button onClick={addTodo}> ➕</button>
        </div>
    )
}