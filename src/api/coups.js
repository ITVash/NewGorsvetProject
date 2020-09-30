import axios from "axios"

const link = "https://us-central1-gorsvetserver.cloudfunctions.net/api"

export default {
	getCoups: () => axios.get(`${link}/coup`),
}
