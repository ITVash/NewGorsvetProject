import { put, call, takeEvery } from "redux-saga/effects"
import { Coups } from "../../api"
import { Types } from "./actionCreators"
import actCoup from "./actionCreators"

function* fetchCoup({ payload }) {
	const coup = yield call(Coups.getCoups, payload)
	yield put(actCoup.setCoup(coup.data))
	yield put(actCoup.setLoading())
}

export default function* coupSaga() {
	yield takeEvery(Types.FETCH_COUP, fetchCoup)
}
