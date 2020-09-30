import { combineReducers } from "redux"
import coup from "./coup/reducers"
import filters from "./filters/reducers"
export default combineReducers({ coup, filters })
