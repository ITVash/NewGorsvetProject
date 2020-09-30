/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import PropTypes from "prop-types"

import "./style.scss"

const Ymaps = ({ children, center, zoom }) => {
	const [text, setText] = React.useState("")
	const [fullText, setFullText] = React.useState("")
	const [coord, setCoord] = React.useState(null)

	const maps = React.useRef()
	const coordz = React.useRef(null)
	const ymaps = window.ymaps
	const coords = (e) => {
		if (e.key === "Enter") setFullText(text)
	}
	const changeText = (e) => {
		const value = e.target.value
		setText(value)
	}
	let geoObj
	const mapLoad = React.useCallback(() => {
		maps.current = new ymaps.Map(
			"maps",
			{ center, zoom, controls: [] },
			{ searchControlProvider: "yandex#search" },
		)
		if (fullText.length > 1) {
			ymaps
				.geocode(`Украина, г. Донецк ${fullText}`, { results: 1 })
				.then((res) => {
					let geoObject = res.geoObjects.get(0)
					setCoord([...geoObject.geometry.getCoordinates()])
					coordz.current = geoObject.geometry.getCoordinates()
					console.log("object", coordz)
					geoObj = new ymaps.GeoObject(
						{
							geometry: {
								type: "Point",
								coordinates: coordz.current,
							},
							properties: {
								iconContent: "Я тащусь",
								hintContent: "Ну давай уже тащи",
							},
						},
						{
							// Опции.
							// Иконка метки будет растягиваться под размер ее содержимого.
							preset: "islands#blackStretchyIcon",
							// Метку можно перемещать.
							draggable: true,
						},
					)
					console.log("geoObj", geoObj)
					maps.current.geoObjects.add(geoObj)
				})
		}
	})

	React.useEffect(() => {
		ymaps.ready(mapLoad)
	}, [fullText])

	window.maps = maps
	window.geo = coordz

	return (
		<div className='maps' id='maps'>
			<input
				type='text'
				value={text}
				onChange={changeText}
				onKeyPress={coords}
			/>
			Координаты адресса: {coord !== null && `lat:${coord[0]}, lng:${coord[1]}`}{" "}
			{fullText}
			{/* maps.GeoObject.add(children) */}
		</div>
	)
}

Ymaps.propTypes = {
	center: PropTypes.array.isRequired,
	zoom: PropTypes.number.isRequired,
	children: PropTypes.node,
}

export default Ymaps
