import { put, call, takeEvery } from "redux-saga/effects"
import { Post } from "../../api"
function* fetchPost() {
	yield call(Post.getPosts())
}

export default function* postSaga() {
	yield takeEvery("FETCH_POSTS", fetchPost)
}
