/**
 * @exports Curve JSX
 * Draws the main S Curve
 *
 *
 */

import { BGTypes, PaddingTypes, SizeTypes } from '../util/types'

export const BGBox = ({
	width,
	height,
	paddingH,
	paddingW,
	bgColor,
}: SizeTypes & PaddingTypes & BGTypes) => {
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
