import React from "react"
import classNames from "classnames"

import "./style.scss"

const Post = ({ title, body }) => {
	return (
		<div className={classNames("post")}>
			<h5>{title}</h5>
			<p>{body}</p>
		</div>
	)
}

export default Post
