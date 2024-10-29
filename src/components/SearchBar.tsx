import '../App.css'
import {FunctionComponent, useRef} from "react";

export type SearchBarProps = {
    search: (term: string) => void
}

export const SearchBar: FunctionComponent<SearchBarProps> = (props) => {

    const searchTermsRef = useRef<HTMLInputElement>(null)

    const onSearch = () => {
        if (searchTermsRef.current) {
            props.search(searchTermsRef.current.value)
        }
    }

    return (<>

        <div className={'search_input'}>
            <input ref={searchTermsRef} type="text" placeholder="Search..." onChange={onSearch}/>
            <span>🔍</span>
        </div>
    </>)
}