import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { actPost } from "../redux/actions"
import { Post } from "../components"
import { postsItems, postsLoad } from "../redux/selector/posts"

const Home = () => {
	const dispatch = useDispatch()
	const posts = useSelector(postsItems)
	const load = useSelector(postsLoad)
	React.useEffect(() => {
		dispatch(actPost.fetchPost())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	if (!load) {
		return (
			<div>
				<h1>Это главная страница</h1>
				<strong>Загрузка</strong>
			</div>
		)
	}
	return (
		<div>
			<h1>Это главная страница</h1>
			{posts.map((item, index) => (
				<Post key={index} {...item} />
			))}
		</div>
	)
}

export default Home
