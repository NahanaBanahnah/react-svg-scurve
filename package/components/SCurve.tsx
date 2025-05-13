import {
	backgroundSchema,
	DefaultProps,
	defaultPropSchema,
	guideOptionSchema,
	handleOptionSchema,
	PassedProps,
	propsSchema,
	gridBackgroundSchema,
	stripeBackgroundSchema,
	GridTypes,
	StripeTypes,
} from '../util/types'

import { Container } from './Container'
import { Curve } from './Curve'
import { interpret } from './Interpret'
import { Handles } from './Handles'
import { Guide } from './Guide'
import { PaddingBox } from './PaddingBox'
import { BGBox } from './BGBox'
import { ZodSchema } from 'zod'
import { StripeBG } from './StripeBG'
import { GridBG } from './GridBG'

export const SCurve = (props: PassedProps) => {
	/** starting array of clean props; build from defaults */

	const clean: DefaultProps = {
		...defaultPropSchema.parse({}),
	}
	const defaultGridProps: GridTypes = gridBackgroundSchema.parse({})
	const defaultStripeProps: StripeTypes = stripeBackgroundSchema.parse({})

	/** If the background type is set we need to assign its prop object  */
	if (
		typeof props.backgroundType === 'object' &&
		props.backgroundType.kind === 'grid'
	) {
		Object.assign(clean, { backgroundType: { defaultGridProps } })
	}

	if (
		typeof props.backgroundType === 'object' &&
		props.backgroundType.kind === 'stripe'
	) {
		Object.assign(clean, { backgroundType: { defaultStripeProps } })
	}

	/** clean the props */
	cleanProps(props, clean, propsSchema)

	const c = interpret(clean.curve, clean.width, clean.height)

	/** assign some values for the background being grid or stripe
	 *  if set, merge the defaults and cleaned props
	 */
	const guide = typeof clean.guide === 'object' ? true : false
	const handles = typeof clean.handles === 'object' ? true : false
	const grid =
		typeof props.backgroundType === 'object' &&
		props.backgroundType.kind === 'grid'
			? true
			: false
	const stripe =
		typeof props.backgroundType === 'object' &&
		props.backgroundType.kind === 'stripe'
			? true
			: false

	const cleanGird =
		typeof clean.backgroundType === 'object' &&
		clean.backgroundType.kind === 'grid'
			? { ...defaultGridProps, ...clean.backgroundType }
			: { ...defaultGridProps }

	const cleanStripe =
		typeof clean.backgroundType === 'object' &&
		clean.backgroundType.kind === 'stripe'
			? { ...defaultStripeProps, ...clean.backgroundType }
			: { ...defaultStripeProps }

	return (
		<Container
			width={clean.width}
			height={clean.height}
			paddingH={clean.paddingH}
			paddingW={clean.paddingW}
			container={clean.container}
		>
			{(clean.paddingH !== 0 || clean.paddingW !== 0) && (
				<PaddingBox paddingColor={clean.paddingColor} />
			)}

			<BGBox
				width={clean.width}
				height={clean.height}
				paddingH={clean.paddingH}
				paddingW={clean.paddingW}
				bgColor={clean.bgColor}
			/>

			{stripe &&
				!grid &&
				(cleanStripe.type === 'horizontal' ||
					cleanStripe.type === 'vertical') && (
					<StripeBG
						width={clean.width}
						height={clean.height}
						paddingH={clean.paddingH}
						paddingW={clean.paddingW}
						type={cleanStripe.type}
						count={cleanStripe.count}
						color={cleanStripe.color}
						inPadding={cleanStripe.inPadding}
					/>
				)}

			{grid && !stripe && (
				<GridBG
					width={clean.width}
					height={clean.height}
					paddingH={clean.paddingH}
					paddingW={clean.paddingW}
					color={cleanGird.color}
					spacing={cleanGird.spacing}
					size={cleanGird.size}
					inPadding={cleanGird.inPadding}
				/>
			)}

			{guide && (
				<Guide
					width={clean.width}
					height={clean.height}
					paddingH={clean.paddingH}
					paddingW={clean.paddingW}
					color={clean.guide.color}
					size={clean.guide.size}
				/>
			)}

			{handles && (
				<Handles
					width={clean.width}
					height={clean.height}
					paddingH={clean.paddingH}
					paddingW={clean.paddingW}
					lineSize={clean.handles.lineSize}
					lineOneColor={clean.handles.lineOneColor}
					lineTwoColor={clean.handles.lineTwoColor}
					circleSize={clean.handles.circleSize}
					circleOneColor={clean.handles.circleOneColor}
					circleTwoColor={clean.handles.circleTwoColor}
					c={c}
				/>
			)}

			<Curve
				width={clean.width}
				height={clean.height}
				paddingH={clean.paddingH}
				paddingW={clean.paddingW}
				curveColor={clean.curveColor}
				curveSize={clean.curveSize}
				c={c}
			/>
		</Container>
	)
}

/** key value pair of prop objects and corresponding ZOD schema   */
const propObjSchemas = {
	handles: handleOptionSchema,
	guide: guideOptionSchema,
	backgroundType: backgroundSchema,
}

/** Function to clean props of incorrect values; eg string !== number
 *  @requires object ::: object of props
 *  @requires newObject ::: object to push correct values to
 *  @requires schema ::: ZOD schema to type check
 *  @returns n/a ::: replaces default props with user passed props if they pass type check
 */

/** @TODO ensure curve type checks */
const cleanProps = (object: object, newObject: object, schema: ZodSchema) => {
	for (const [key, value] of Object.entries(object)) {
		if (typeof value === 'object' && key !== 'curve') {
			cleanProps(
				value,
				newObject[key as keyof typeof newObject],
				propObjSchemas[key as keyof typeof propObjSchemas]
			)
		} else {
			const testObj = {
				[key]: value,
			}
			const typeTest = schema.safeParse(testObj)
			if (typeTest.success) {
				Object.assign(newObject, testObj)
			}
		}
	}
}
