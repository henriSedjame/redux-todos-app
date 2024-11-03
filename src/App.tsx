import './App.css'
import {TodoList} from "./components/TodoList.tsx";
import {SearchBar} from "./components/SearchBar.tsx";
import {AddInput} from "./components/AddInput.tsx";
import {Title} from "./components/Title.tsx";
import {useEffect} from "react";
import {loadTodos} from "./store/reducers.ts";
import {appDispatch} from "./store/hooks.ts";


function App() {

    const dispatch = appDispatch()

    useEffect(() =>  {

        dispatch(loadTodos())

    })

    return (
        <>
            <Title/>

            <SearchBar/>

            <TodoList/>

            <AddInput/>
        </>
    )
}

export default App
