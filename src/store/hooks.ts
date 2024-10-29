import {useSelector} from "react-redux";
import {AppState} from "./state.ts";

export const appSelector = useSelector.withTypes<AppState>()