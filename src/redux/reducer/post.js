import produce from "immer"
import { Types } from "../actions/post"

const initialState = {
	items: [],
	isLoad: false,
}

export default produce((draft, { type, payload }) => {
	switch (type) {
		case Types.SET_POST:
			draft.items = payload
			break
		case Types.SET_LOADING:
			draft.isLoad = true
			break
		default:
	}
}, initialState)
