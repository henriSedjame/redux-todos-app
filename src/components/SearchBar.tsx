import '../App.css'
import {FunctionComponent, useRef} from "react";
import {store} from "../store/store.ts";

export type SearchBarProps = {
    search: (term: string) => void
}

export const SearchBar: FunctionComponent = () => {

    const searchTermsRef = useRef<HTMLInputElement>(null)

    const onSearch = () => {
        if (searchTermsRef.current) {
            store.dispatch({type: 'SEARCH_TODO', term: searchTermsRef.current.value})
        }
    }

    return (<>

        <div className={'search_input'}>
            <input ref={searchTermsRef} type="text" placeholder="Search..." onChange={onSearch}/>
            <span>🔍</span>
        </div>
    </>)
}