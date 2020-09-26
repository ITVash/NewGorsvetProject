/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import PropTypes from "prop-types"

import "./style.scss"

const Ymaps = ({ children, center, zoom }) => {
	let maps
	console.log("meeeeee", window.ymaps)
	const ymapsLoad = () => {
		window.ymaps.ready(() => {
			maps = new window.ymaps.Map(
				"maps",
				{ center, zoom, controls: [] },
				{ searchControlProvider: "yandex#search" },
			)
		})
	}
	React.useEffect(() => {
		window.addEventListener("load", ymapsLoad)
	}, [])
	return (
		<div className='maps' id='maps'>
			{children}
		</div>
	)
}

Ymaps.propTypes = {
	center: PropTypes.array.isRequired,
	zoom: PropTypes.number.isRequired,
	children: PropTypes.any,
}

export default Ymaps
