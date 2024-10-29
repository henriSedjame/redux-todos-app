import '../App.css'
import {FunctionComponent, useRef} from "react";
import {connect, MapDispatchToPropsParam} from "react-redux";
import {Dispatch} from "redux";
import {TodoActions} from "../store/actions.ts";

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

const mapDispatchToProps :MapDispatchToPropsParam<SearchBarProps, unknown> = (dispatch: Dispatch<TodoActions>) => ({
    search: (term: string) => dispatch({type: 'SEARCH_TODO', term})
})

export const ConnectedSearchBar = connect(
    null,
    mapDispatchToProps
)(SearchBar)