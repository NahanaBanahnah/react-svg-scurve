/**
 * @exports Curve JSX
 * Draws the main S Curve
 */

import { FC } from 'react'
import { BGTypes, PaddingTypes, SizeTypes } from '../util/types'

export const BGBox: FC<SizeTypes & PaddingTypes & BGTypes> = ({ ...props }) => {
	const { width, height } = props
	const { paddingH, paddingW } = props
	const { bgColor } = props

	return (
		<rect
			width={width}
			height={height}
			x={paddingW}
			y={paddingH}
			fill={bgColor}
			className="bg"
		/>
	)
}
