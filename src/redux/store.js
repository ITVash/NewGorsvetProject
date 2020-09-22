import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import saga from "./saga"
import rootReducer from "./reducer"
const sageMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sageMiddleware)),
)
sageMiddleware.run(saga)
export default store
