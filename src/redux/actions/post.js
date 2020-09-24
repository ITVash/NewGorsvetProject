export const Types = {
	FETCH_POST: "posts/FETCH_POST",
	SET_POST: "posts/SET_POST",
	SET_LOADING: "posts/SET_LOADING",
}

const actions = {
	fetchPost: () => ({
		type: Types.FETCH_POST,
	}),
	setPost: (data) => ({
		type: Types.SET_POST,
		payload: data,
	}),
	setLoading: () => ({
		type: Types.SET_LOADING,
	}),
}

export default actions
