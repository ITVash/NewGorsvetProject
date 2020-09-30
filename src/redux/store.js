import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import saga from "./rootSaga"
import rootReducer from "./rootReducer"
const sageMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sageMiddleware)),
)
sageMiddleware.run(saga)
export default store
