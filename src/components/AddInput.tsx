import '../App.css'
import {FunctionComponent, useRef} from "react";

export type AddInputProps = {
    add: (value: string) => void
}

export const AddInput: FunctionComponent<AddInputProps> = (props) => {
    const todoLabelRef= useRef<HTMLInputElement>(null)

    const addTodo = () => {
        if (todoLabelRef.current && todoLabelRef.current.value.length >= 3) {
            props.add(todoLabelRef.current.value)
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