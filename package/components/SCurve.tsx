import { FC } from 'react'
import {
	defaultProps,
	defaultGridProps,
	defaultStripeProps,
	defaultHandleProps,
	defaultGuideProps,
} from '../util/defaultProps'

import { Props } from '../util/types'
import { Handles } from './Handles'
import { Guide } from './Guide'
import { Curve } from './Curve'
import { PaddingBox } from './PaddingBox'
import { BGBox } from './BGBox'
import { StripeBG } from './StripeBG'
import { GridBG } from './GridBG'
import { Container } from './Container'
import { interpret } from './Interpret'

export const SCurve: FC<Props> = props => {
	const grid =
		props.background && props.background.kind === 'grid' ? true : false

	const stripe =
		props.background && props.background.kind === 'stripe' ? true : false

	const passedHandleProps =
		typeof props.handles === 'object' ? props.handles : {}

	const passedGuideProps = typeof props.guide === 'object' ? props.guide : {}

	const allProps = {
		...defaultProps,
		...props,
	}

	const allHandleProps = {
		...defaultHandleProps,
		...passedHandleProps,
	}

	const allGuideProps = {
		...defaultGuideProps,
		...passedGuideProps,
	}

	const allGridProps = {
		...defaultGridProps,
		...props.background,
	}

	const allStripeProps = {
		...defaultStripeProps,
		...props.background,
	}

	const { width, height } = allProps
	const { paddingH, paddingW } = allProps
	const { curve, guide, handles } = allProps

	const c = interpret(curve, width, height)

	const containerProps = {
		width: allProps.width,
		height: allProps.height,
		paddingH: allProps.paddingH,
		paddingW: allProps.paddingW,
		container: allProps.container,
		className: allProps.className,
	}

	const paddingProps = {
		paddingColor: allProps.paddingColor,
	}

	const bgProps = {
		width: allProps.width,
		height: allProps.height,
		paddingH: allProps.paddingH,
		paddingW: allProps.paddingW,
		bgColor: allProps.bgColor,
	}

	const stripeProps = {
		width: allProps.width,
		height: allProps.height,
		paddingW: allProps.paddingW,
		paddingH: allProps.paddingH,
		count: allStripeProps.count,
		color: allStripeProps.color,
		inPadding: allStripeProps.inPadding,
		type: allStripeProps.type,
	}

	const gridProps = {
		width: allProps.width,
		height: allProps.height,
		paddingH: allProps.paddingH,
		paddingW: allProps.paddingW,
		size: allGridProps.size,
		spacing: allGridProps.spacing,
		color: allGridProps.color,
		inPadding: allGridProps.inPadding,
	}

	const guideProps = {
		width: allProps.width,
		height: allProps.height,
		paddingH: allProps.paddingH,
		paddingW: allProps.paddingW,
		color: allGuideProps.color,
		size: allGuideProps.size,
	}

	const handleProps = {
		width: allProps.width,
		height: allProps.height,
		paddingH: allProps.paddingH,
		paddingW: allProps.paddingW,
		lineOneColor: allHandleProps.lineOneColor,
		lineTwoColor: allHandleProps.lineTwoColor,
		circleOneColor: allHandleProps.circleOneColor,
		circleTwoColor: allHandleProps.circleTwoColor,
		lineSize: allHandleProps.lineSize,
		circleSize: allHandleProps.circleSize,
		c: c,
	}

	const curveProps = {
		width: allProps.width,
		height: allProps.height,
		paddingH: allProps.paddingH,
		paddingW: allProps.paddingW,
		curveColor: allProps.curveColor,
		curveSize: allProps.curveSize,
		c: c,
	}

	return (
		<Container {...containerProps}>
			{/** Show the padding rect if set */}
			{(paddingH !== 0 || paddingW !== 0) && (
				<PaddingBox {...paddingProps} />
			)}

			{/** background rect */}
			<BGBox {...bgProps} />

			{/** show stripe bg */}
			{stripe &&
				!grid &&
				(stripeProps.type === 'horizontal' ||
					stripeProps.type === 'vertical') && (
					<StripeBG {...stripeProps} />
				)}

			{/** show grid bg */}
			{grid && !stripe && <GridBG {...gridProps} />}

			{/** show linear line if set */}
			{guide && <Guide {...guideProps} />}

			{/** show handles */}

			{handles && <Handles {...handleProps} />}

			{/** draw the curve */}
			<Curve {...curveProps} />
		</Container>
	)
}
