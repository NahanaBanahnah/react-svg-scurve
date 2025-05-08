/**
 * @exports Padding Box JSX
 * Draws the bounding padding box
 * Useful if the curve has values above 1 or -1 and the curve goes past the viewbox
 */

import { FC } from 'react'
import { PaddingBoxTypes } from '../util/types'

export const PaddingBox: FC<PaddingBoxTypes> = ({ ...props }) => {
	const { paddingColor } = props

	return (
		<rect
			width="100%"
			height="100%"
			fill={paddingColor}
			className="padding"
		/>
	)
}
