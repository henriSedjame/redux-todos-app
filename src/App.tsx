import './App.css'
import {TodoList} from "./components/TodoList.tsx";
import {SearchBar} from "./components/SearchBar.tsx";
import {AddInput} from "./components/AddInput.tsx";
import {Title} from "./components/Title.tsx";


function App() {

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
