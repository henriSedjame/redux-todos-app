import '../App.css'
import {FunctionComponent, useRef} from "react";
import {store} from "../store/store.ts";

export type AddInputProps = {
    add: (value: string) => void
}

export const AddInput: FunctionComponent = () => {
    const todoLabelRef= useRef<HTMLInputElement>(null)

    const addTodo = () => {
        if (todoLabelRef.current && todoLabelRef.current.value.length >= 3) {
            store.dispatch({type: 'ADD_TODO', label: todoLabelRef.current.value})
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