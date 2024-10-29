import '../App.css'
import {FunctionComponent, useRef} from "react";
import {actionDispatchers} from "../store/action-dispatchers.ts";

export type SearchBarProps = {
    search: (term: string) => void
}

export const SearchBar: FunctionComponent = () => {

    const searchTermsRef = useRef<HTMLInputElement>(null)

    const onSearch = () => {
        if (searchTermsRef.current) {
            actionDispatchers.searchTodo(searchTermsRef.current.value)
        }
    }

    return (<>

        <div className={'search_input'}>
            <input ref={searchTermsRef} type="text" placeholder="Search..." onChange={onSearch}/>
            <span>🔍</span>
        </div>
    </>)
}