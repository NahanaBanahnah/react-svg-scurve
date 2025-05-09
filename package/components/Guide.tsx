/**
 * @exports Guide JSX
 * Shows linear guide line if enabled
 */

import { GuideTypes, PaddingTypes, SizeTypes } from '../util/types'

export const Guide = ({ ...props }: SizeTypes & PaddingTypes & GuideTypes) => {
	const { width, height } = props
	const { paddingW, paddingH } = props
	const { size, color } = props

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
