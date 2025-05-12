/**
 * @exports Curve JSX
 * Draws the main S Curve
 *
 *
 */

import { CTypes, CurveTypes, PaddingTypes, SizeTypes } from '../util/types'

export const Curve = ({
	width,
	height,
	paddingW,
	paddingH,
	curveSize,
	curveColor,
	c,
}: SizeTypes & PaddingTypes & CTypes & CurveTypes) => {
	const { c1, c2, c3, c4 } = c

	return (
		<path
			d={`M ${paddingW} ${height + paddingH} C ${c1 + paddingW} ${
				c2 + paddingH
			} ${c3 + paddingW} ${c4 + paddingH} ${
				width + paddingW
			} ${paddingH}`}
			strokeWidth={curveSize}
			fill="none"
			stroke={curveColor}
			className="curve"
		/>
	)
}
