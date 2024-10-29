import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {TodoActions} from "./actions.ts";
import {AppState} from "./state.ts";

export const appDispatch = useDispatch.withTypes<Dispatch<TodoActions>>()

export const appSelector = useSelector.withTypes<AppState>()