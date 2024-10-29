import './App.css'
import {TodoList} from "./components/TodoList.tsx";
import {SearchBar} from "./components/SearchBar.tsx";
import {AddInput} from "./components/AddInput.tsx";
import {Title} from "./components/Title.tsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadTodos} from "./store/reducers.ts";


function App() {

        const dispatch = useDispatch()

    useEffect(() => {

       // @ts-expect-error(...)
        dispatch(loadTodos())
    })

    return (
        <>
            <Title/>

            <SearchBar/>

            <TodoList/>

            <AddInput />
        </>
    )
}

export default App
