import './App.css'
import {TodoList} from "./components/TodoList.tsx";
import {SearchBar} from "./components/SearchBar.tsx";
import {AddInput} from "./components/AddInput.tsx";
import {Title} from "./components/Title.tsx";
import {useEffect, useState} from "react";
import {store} from "./store/store.ts";
import {loadTodos} from "./store/actions.ts";


function App() {

    const [loading, setLoading] = useState(false);

    store.subscribe(() => {
        setLoading(store.getState().loading)
    })

    useEffect(() => {
        // @ts-expect-error(2345)
        store.dispatch(loadTodos());
    }, []);
    return (
        <>
            
            <Title/>

            <SearchBar/>

            {loading && <div className={'loading'}>LOADING ....</div>}

            <TodoList/>

            <AddInput/>
        </>
    )
}

export default App
