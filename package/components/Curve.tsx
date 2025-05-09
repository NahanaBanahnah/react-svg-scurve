/**
 * @exports Curve JSX
 * Draws the main S Curve
 */

import { CTypes, CurveTypes, PaddingTypes, SizeTypes } from '../util/types'

export const Curve = ({
	...props
}: SizeTypes & PaddingTypes & CTypes & CurveTypes) => {
	const { width, height } = props
	const { paddingW, paddingH } = props
	const {
		c: { c1, c2, c3, c4 },
	} = props
	const { curveSize, curveColor } = props

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
