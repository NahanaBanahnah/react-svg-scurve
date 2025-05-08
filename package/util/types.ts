type ClassName = string | undefined

export type CTypes = {
	c: {
		c1: number
		c2: number
		c3: number
		c4: number
	}
}

/** BACKGROUND TYPES
 *  SWITCH BETWEEN GRID OR STRIP BACKGROUND
 *  OR NONE
 */

/** Base BG Options */
type BaseBackgroundTypes = {
	color: string
	inPadding: boolean
}

/** Intersect as required for use in child components */
export type StripeTypes = BaseBackgroundTypes & {
	count: number
	type: 'vertical' | 'horizontal'
}

export type GridTypes = BaseBackgroundTypes & {
	size: number
	spacing: number
}

/** Intersect as optional to use in main component */
export type GridBackground = Partial<GridTypes> & {
	kind: 'grid'
}

export type StripeProps = Partial<StripeTypes> & {
	kind: 'stripe'
}

/** HANDLE TYPES */
/** Define as required to use in child component */
export type HandleTypes = {
	lineOneColor: string
	lineTwoColor: string
	circleOneColor: string
	circleTwoColor: string
	lineSize: number
	circleSize: number
}

/** Intersect as optional to use in main component */
export type HandleProps = boolean | Partial<HandleTypes>

/** GUIDE TYPES */
/** Define as required to use in child component */
export type GuideTypes = {
	color: string
	size: number
}

/** Intersect as optional to use in main component */
export type GuideProps = boolean | Partial<GuideTypes>

type BackgroundProps = GridBackground | StripeProps | undefined

export type SizeTypes = {
	width: number
	height: number
}

export type PaddingTypes = {
	paddingH: number
	paddingW: number
}

export type CurveTypes = {
	curveSize: number
	curveColor: string
}

export type PaddingBoxTypes = {
	paddingColor: string
}

export type BGTypes = {
	bgColor: string
}

export type ContainerTypes = {
	container: boolean
	className: ClassName
	children: React.ReactNode
}

export type Props = Partial<SizeTypes> &
	Partial<PaddingTypes> &
	Partial<CurveTypes> &
	Partial<BGTypes> &
	Partial<PaddingBoxTypes> &
	Omit<Partial<ContainerTypes>, 'children'> & {
		handles?: HandleProps
		curve?: number[]
		guide?: GuideProps
		background?: BackgroundProps
	}
