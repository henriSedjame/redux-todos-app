import './App.css'
import {ConnectedTodoList} from "./components/TodoList.tsx";
import {ConnectedSearchBar} from "./components/SearchBar.tsx";
import {ConnectedAddInput} from "./components/AddInput.tsx";
import {Title} from "./components/Title.tsx";


function App() {

    return (
        <>
            <Title/>

            <ConnectedSearchBar/>

            <ConnectedTodoList/>

            <ConnectedAddInput />
        </>
    )
}

export default App
