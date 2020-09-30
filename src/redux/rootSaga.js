import { all } from "redux-saga/effects"
import coupSaga from "./coup/saga"

export default function* rootSaga() {
	yield all([coupSaga()])
}
