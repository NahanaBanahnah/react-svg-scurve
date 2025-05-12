/**
 * @exports Strip BG
 * Draws a stripe background if enabled
 *
 *
 */

import { PaddingTypes, SizeTypes, StripeTypes } from '../util/types'

export const StripeBG = ({
	width,
	height,
	paddingH,
	paddingW,
	type,
	color,
	count,
	inPadding,
}: SizeTypes & PaddingTypes & StripeTypes) => {
	const isVert = type === 'vertical'

	const totalStripes = count * 2
	const totalHeight = inPadding ? height + paddingH * 2 : height
	const totalWidth = inPadding ? width + paddingW * 2 : width

	const stripeHeight = isVert ? totalHeight : totalHeight / totalStripes
	const stripeWidth = isVert ? totalWidth / totalStripes : totalWidth

	const yStart = inPadding ? 0 : paddingH
	const xStart = inPadding ? 0 : paddingW
	let y = isVert ? yStart : yStart - stripeHeight
	let x = isVert ? xStart - stripeWidth : xStart

	const stripes = Array.from(Array(count).keys()).map(i => {
		y = isVert ? y : y + stripeHeight * 2
		x = isVert ? x + stripeWidth * 2 : x

		return (
			<rect
				key={`stripe_${i}`}
				y={y}
				x={x}
				width={stripeWidth}
				height={stripeHeight}
				fill={color}
			/>
		)
	})

	return <g>{stripes}</g>
}
