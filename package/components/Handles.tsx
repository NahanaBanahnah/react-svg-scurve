/**
 * @exports Handle JSX
 * Shows spline handles if enabled
 *
 *
 */

import { CTypes, HandleTypes, PaddingTypes, SizeTypes } from '../util/types'

export const Handles = ({
	width,
	height,
	paddingW,
	paddingH,
	lineOneColor,
	lineTwoColor,
	circleOneColor,
	circleTwoColor,
	lineSize,
	circleSize,
	c,
}: HandleTypes & SizeTypes & PaddingTypes & CTypes) => {
	const { c1, c2, c3, c4 } = c

	return (
		<>
			<line
				x1={paddingW}
				y1={height + paddingH}
				x2={c1 + paddingW}
				y2={c2 + paddingH}
				stroke={lineOneColor}
				strokeWidth={lineSize}
				className="handleLineOne"
			/>
			<line
				x1={width + paddingW}
				y1={paddingH}
				x2={c3 + paddingW}
				y2={c4 + paddingH}
				stroke={lineTwoColor}
				strokeWidth={lineSize}
				className="handleLineTwo"
			/>
			<circle
				cx={c1 + paddingW}
				cy={c2 + paddingH}
				r={circleSize}
				fill={circleOneColor}
				className="handleCircleOne"
			/>
			<circle
				cx={c3 + paddingW}
				cy={c4 + paddingH}
				r={circleSize}
				fill={circleTwoColor}
				className="handleCircleTwo"
			/>
		</>
	)
}
