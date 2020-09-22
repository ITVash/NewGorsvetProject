import axios from "axios"

const link = "https://jsonplaceholder.typicode.com/posts"

export default {
	getPosts: () => axios.get(link),
}
