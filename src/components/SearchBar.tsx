import '../App.css'
import {FunctionComponent, useRef} from "react";
import {appDispatch} from "../store/hooks.ts";

export const SearchBar: FunctionComponent = () => {

    const searchTermsRef = useRef<HTMLInputElement>(null)

    const dispatch = appDispatch()

    const onSearch = () => {
        if (searchTermsRef.current) {
            dispatch({type: 'SEARCH_TODO', term: searchTermsRef.current.value})
        }
    }

    return (<>

        <div className={'search_input'}>
            <input ref={searchTermsRef} type="text" placeholder="Search..." onChange={onSearch}/>
            <span>🔍</span>
        </div>
    </>)
}