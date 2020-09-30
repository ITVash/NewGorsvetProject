import produce from "immer"
import { Types } from "./actionCreators"

const initialState = {
	coup: null,
	opora: null,
	svet: null,
}

export default produce((draft, { type, payload }) => {
	switch (type) {
		case Types.SELECT_COUP:
			draft.coup = payload
			break
		case Types.SELECT_OPORA:
			draft.opora = payload
			break
		case Types.SELECT_SVET:
			draft.svet = payload
			break
		case Types.DELETE_COUP:
			draft.coup = null
			break
		case Types.DELETE_OPORA:
			draft.opora = null
			break
		case Types.DELETE_SVET:
			draft.svet = null
			break
		default:
	}
}, initialState)
