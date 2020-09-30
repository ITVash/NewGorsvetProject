export const Types = {
	FETCH_COUP: "coup/FETCH_COUP",
	SET_COUP: "coup/SET_COUP",
	SET_LOADING: "coup/SET_LOADING",
}

const actCoup = {
	fetchCoup: () => ({
		type: Types.FETCH_COUP,
	}),
	setCoup: (data) => ({
		type: Types.SET_COUP,
		payload: data,
	}),
	setLoading: () => ({
		type: Types.SET_LOADING,
	}),
}

export default actCoup
