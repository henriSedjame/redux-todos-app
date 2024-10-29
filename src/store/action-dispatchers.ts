import {store} from "./store.ts";
import {bindActionCreators} from "redux";

export const actionDispatchers = bindActionCreators( {
    addTodo: (label: string) => ({type: 'ADD_TODO', label}),
    toggleTodo: (id: number) => ({type: 'TOGGLE_TODO', id}),
    deleteTodo: (id: number) => ({type: 'DELETE_TODO', id}),
    searchTodo: (term: string) => ({type: 'SEARCH_TODO', term})
}, store.dispatch)