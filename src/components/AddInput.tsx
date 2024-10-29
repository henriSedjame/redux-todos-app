import '../App.css'
import {FunctionComponent, useRef} from "react";
import {appDispatch} from "../store/hooks.ts";

export const AddInput: FunctionComponent = () => {
    const todoLabelRef= useRef<HTMLInputElement>(null)

    const dispatch = appDispatch()

    const addTodo = () => {
        if (todoLabelRef.current && todoLabelRef.current.value.length >= 3) {
            dispatch({type: 'ADD_TODO', label: todoLabelRef.current.value})
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