import produce from "immer"

const initialState = {
	items: [],
	isLoad: false,
}

export default produce((draft, { type, payload }) => {
	switch (type) {
		case "value":
			break

		default:
	}
}, initialState)
