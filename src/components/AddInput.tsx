import '../App.css'
import {FunctionComponent, useRef} from "react";
import {connect, MapDispatchToPropsParam} from "react-redux";
import {Dispatch} from "redux";
import {TodoActions} from "../store/actions.ts";

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


const mapDispatchToProps: MapDispatchToPropsParam<AddInputProps, unknown> = (dispatch: Dispatch<TodoActions>) => ({
    add: (label: string) => dispatch({type: 'ADD_TODO', label})
})

export const ConnectedAddInput = connect(
    null,
    mapDispatchToProps
)(AddInput)