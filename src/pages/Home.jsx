/* eslint-disable no-unused-vars */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { YMaps, Map, Placemark, SearchControl } from "react-yandex-maps"
import actCoup from "../redux/coup/actionCreators"
import { coupItems, coupLoad } from "../redux/coup/selectors"
import filters from "../redux/filters/actionCreators"
import { CoupInfo } from "../components"

const conf = { center: [48.015877, 37.80285], zoom: 12 }

const Home = () => {
	const dispatch = useDispatch()
	const loadCoup = useSelector(coupLoad)
	const coup = useSelector(coupItems)

	const func = (val) => {
		if (val === true || val === 1) {
			return 1
		} else if (val === false || val === 0) return 0
	}

	React.useEffect(() => {
		dispatch(actCoup.fetchCoup())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	if (!loadCoup) {
		return (
			<div>
				<h1>Это главная страница</h1>
				<strong>Загрузка</strong>
			</div>
		)
	}
	return (
		<>
			<YMaps
				enterprise
				query={{
					apikey: "d914a749-b4a4-49bd-9998-eb6fcc0b8091",
					lang: "ru_RU",
				}}
			>
				<Map defaultState={conf} width='100%' height='100vh'>
					<SearchControl />
					{coup.map((item, index) => (
						<Placemark
							key={index}
							geometry={[item.lat, item.lng]}
							modules={["geoObject.addon.hint"]}
							properties={{
								hintContent: `${item.title}`,
							}}
							options={{
								iconLayout: "default#image",
								iconImageHref: `./img/${item.areaID}_control_${func(
									item.func,
								)}.png`,
								iconImageSize: [20, 20],
								iconImageOffset: [-10, -10],
							}}
							onClick={() => {
								dispatch(filters.selectCoup(item))
							}}
						/>
					))}
				</Map>
			</YMaps>
			<CoupInfo />
		</>
	)
}

export default Home
