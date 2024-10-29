import {useMemo, useState} from 'react'

import './App.css'
import {AppState} from "./models.ts";
import {TodoList} from "./components/TodoList.tsx";
import {SearchBar} from "./components/SearchBar.tsx";
import {AddInput} from "./components/AddInput.tsx";

function App() {

  const [state, setState] = useState<AppState>({
    todos: [{
        id: 1,
        label: 'Learn TypeScript',
        completed: false
    },
      {
        id: 2,
        label: 'Learn React',
        completed: true
      },
      {
        id: 3,
        label: 'Learn Redux',
        completed : false
      }
    ],
    filter: 'all',
    searchTerm: ''
  })

  const addTodo = (value: string) => {
      setState({
        ...state,
        todos: [...state.todos, {
          id: state.todos.length + 1,
          label: value,
          completed: false
        }]
      })

  }

  const toggleTodo = (id: number) => {
    setState({
      ...state,
        todos: state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    })
  }

  const deleteTodo = (id: number) => {
    setState({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    })
  }

  const onSearch = (term: string) => {
      setState({
        ...state, searchTerm: term
      })
  }

  const filterTodos = useMemo(() => {
    return state.todos.filter(todo => todo.label.toLowerCase().includes(state.searchTerm.toLowerCase()))
  }, [state.searchTerm, state.todos])

  return (
    <>
      <SearchBar search={onSearch}/>

      <TodoList todos={filterTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

      <AddInput add={addTodo}/>
    </>
  )
}

export default App
