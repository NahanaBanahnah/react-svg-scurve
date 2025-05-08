import {
	Props,
	GridBackground,
	StripeProps,
	HandleProps,
	GuideProps,
} from './types'

export const defaultStripeProps = {
	type: 'horizontal',
	count: 10,
	color: 'rgba(26, 22, 22, 0.2)',
	inPadding: false,
} satisfies Partial<StripeProps>

export const defaultGridProps = {
	size: 1,
	spacing: 20,
	color: 'rgba(150, 150, 150, .1)',
	inPadding: false,
} satisfies Partial<GridBackground>

export const defaultHandleProps = {
	lineOneColor: 'rgba(255, 255, 255, .5)',
	lineTwoColor: 'rgba(255, 255, 255, .5)',
	circleOneColor: 'rgba(200, 200, 200, 1)',
	circleTwoColor: 'rgba(200, 200, 200, 1)',
	lineSize: 2,
	circleSize: 5,
} satisfies Partial<HandleProps>

export const defaultGuideProps = {
	color: 'rgba(255, 255, 255, .2)',
	size: 2,
} satisfies Partial<GuideProps>

export const defaultProps = {
	width: 400,
	height: 400,
	paddingH: 0,
	paddingW: 0,
	paddingColor: 'rgba(0,0,0,.5)',
	handles: true,
	curve: [0.17, 0.67, 0.83, 0.67],
	curveColor: 'rgba(255,255,255,.9)',
	curveSize: 2,
	bgColor: 'rgba(0,0,0,.5)',
	guide: true,

	container: false,
} satisfies Partial<Props>
