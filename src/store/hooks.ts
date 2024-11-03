import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./state.ts";
import {store} from "./store.ts";

export const appSelector = useSelector.withTypes<AppState>()
export const appDispatch = useDispatch<typeof store.dispatch>