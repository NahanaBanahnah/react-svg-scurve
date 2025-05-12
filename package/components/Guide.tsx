/**
 * @exports Guide JSX
 * Shows linear guide line if enabled
 *
 *
 */

import { GuideTypes, PaddingTypes, SizeTypes } from '../util/types'

export const Guide = ({
	width,
	height,
	paddingW,
	paddingH,
	size,
	color,
}: SizeTypes & PaddingTypes & GuideTypes) => {
	return (
		<line
			x1={width + paddingW}
			y1={0 + paddingH}
			x2={0 + paddingW}
			y2={height + paddingH}
			strokeWidth={size}
			stroke={color}
			className="guide"
		/>
	)
}
