import { put, call, takeEvery } from "redux-saga/effects"
import { Post } from "../../api"
import { Types } from "../actions/post"
import { actPost } from "../actions"

function* fetchPost({ payload }) {
	const post = yield call(Post.getPosts, payload)
	yield put(actPost.setPost(post.data))
	yield put(actPost.setLoading())
}

export default function* postSaga() {
	yield takeEvery(Types.FETCH_POST, fetchPost)
}
