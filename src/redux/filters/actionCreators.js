export const Types = {
	SELECT_COUP: "filters/SELECT_COUP",
	SELECT_OPORA: "filters/SELECT_OPORA",
	SELECT_SVET: "filters/SELECT_SVET",
	DELETE_COUP: "filters/SELECT_DELETE",
	DELETE_OPORA: "filters/SELECT_DELETE",
	DELETE_SVET: "filters/SELECT_DELETE",
}

const filters = {
	selectCoup: (data) => ({
		type: Types.SELECT_COUP,
		payload: data,
	}),
	selectOpora: (data) => ({
		type: Types.SELECT_OPORA,
		payload: data,
	}),
	selectSvet: (data) => ({
		type: Types.SELECT_SVET,
		payload: data,
	}),
	deleteCoup: () => ({
		type: Types.DELETE_COUP,
	}),
	deleteOpora: () => ({
		type: Types.DELETE_OPORA,
	}),
	deleteSvet: () => ({
		type: Types.DELETE_SVET,
	}),
}

export default filters
