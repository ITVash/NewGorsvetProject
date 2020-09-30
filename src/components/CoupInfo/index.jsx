import React from "react"
//import PropTypes from "prop-types"
import classNames from "classnames"
import { CloseOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import filters from "../../redux/filters/actionCreators"

import "./style.scss"
import { selectedCoup } from "../../redux/filters/selectors"
const CoupInfo = () => {
	const bodyRef = React.useRef()
	const dispatch = useDispatch()
	const item = useSelector(selectedCoup)
	const closed = () => {
		dispatch(filters.deleteCoup())
	}
	React.useEffect(() => {
		if (!item) {
			bodyRef.current.scrollTo(0, 0)
		}
	}, [item])

	return (
		<div className={classNames("boxCoup", { open: item })}>
			<span className='closed'>
				<CloseOutlined onClick={closed} />
			</span>
			<div className='boxCoup__body' ref={bodyRef}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
				voluptatum aperiam, ipsam suscipit eos adipisci ut animi quo hic alias
				incidunt, optio ea! Tempore reiciendis pariatur dolor ipsa repellendus
				nostrum iusto, illo eaque libero, sed, adipisci fugit voluptate qui?
				Asperiores iste maxime eos necessitatibus deserunt nam placeat sit,
				maiores pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Magnam voluptatum aperiam, ipsam suscipit eos adipisci ut animi
				quo hic alias incidunt, optio ea! Tempore reiciendis pariatur dolor ipsa
				repellendus nostrum iusto, illo eaque libero, sed, adipisci fugit
				voluptate qui? Asperiores iste maxime eos necessitatibus deserunt nam
				placeat sit, maiores pariatur? Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Magnam voluptatum aperiam, ipsam suscipit eos adipisci
				ut animi quo hic alias incidunt, optio ea! Tempore reiciendis pariatur
				dolor ipsa repellendus nostrum iusto, illo eaque libero, sed, adipisci
				fugit voluptate qui? Asperiores iste maxime eos necessitatibus deserunt
				nam placeat sit, maiores pariatur? Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Magnam voluptatum aperiam, ipsam suscipit
				eos adipisci ut animi quo hic alias incidunt, optio ea! Tempore
				reiciendis pariatur dolor ipsa repellendus nostrum iusto, illo eaque
				libero, sed, adipisci fugit voluptate qui? Asperiores iste maxime eos
				necessitatibus deserunt nam placeat sit, maiores pariatur? Lorem ipsum
				dolor sit, amet consectetur adipisicing elit. Magnam voluptatum aperiam,
				ipsam suscipit eos adipisci ut animi quo hic alias incidunt, optio ea!
				Tempore reiciendis pariatur dolor ipsa repellendus nostrum iusto, illo
				eaque libero, sed, adipisci fugit voluptate qui? Asperiores iste maxime
				eos necessitatibus deserunt nam placeat sit, maiores pariatur? Lorem
				ipsum dolor sit, amet consectetur adipisicing elit. Magnam voluptatum
				aperiam, ipsam suscipit eos adipisci ut animi quo hic alias incidunt,
				optio ea! Tempore reiciendis pariatur dolor ipsa repellendus nostrum
				iusto, illo eaque libero, sed, adipisci fugit voluptate qui? Asperiores
				iste maxime eos necessitatibus deserunt nam placeat sit, maiores
				pariatur?
			</div>
		</div>
	)
}

/* CoupInfo.propTypes = {}

CoupInfo.defaultProps = {} */

export default CoupInfo
