/**
 * @exports Grid BG
 * Draws a grid background if enabled
 *
 *
 */

import { GridTypes, PaddingTypes, SizeTypes } from '../util/types'

export const GridBG = ({
	width,
	height,
	paddingH,
	paddingW,
	size,
	spacing,
	inPadding,
	color,
}: SizeTypes & PaddingTypes & GridTypes) => {
	const gridSizing = size + spacing
	const fullWidth = inPadding ? width + paddingW * 2 : width
	const fullHeight = inPadding ? height + paddingH * 2 : height
	const drawHeight = inPadding ? height + paddingH * 2 : height + paddingH
	const drawWidth = inPadding ? width + paddingW * 2 : width + paddingW

	const gridXCount = Math.ceil(fullWidth / gridSizing)
	const gridYCount = Math.ceil(fullHeight / gridSizing)
	const xStart = inPadding ? 0 : paddingW
	const yStart = inPadding ? 0 : paddingH

	let y = yStart - gridSizing
	let x = xStart - gridSizing

	const gridX = Array.from(Array(gridXCount).keys()).map(i => {
		y = y + gridSizing
		return (
			<line
				key={`gridX_${i}`}
				strokeWidth={size}
				x1={xStart}
				x2={drawWidth}
				y1={y}
				y2={y}
			/>
		)
	})

	const gridY = Array.from(Array(gridYCount).keys()).map(i => {
		x = x + gridSizing
		return (
			<line
				key={`gridY_${i}`}
				strokeWidth={size}
				y1={yStart}
				y2={drawHeight}
				x1={x}
				x2={x}
			/>
		)
	})

	return (
		<g stroke={color} className="grid">
			{gridX}
			{gridY}
		</g>
	)
}
