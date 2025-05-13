import { z } from 'zod'

/** object type prop defaults */

const handles = {
	lineOneColor: 'rgba(255, 255, 255, .5)',
	lineTwoColor: 'rgba(255, 255, 255, .5)',
	circleOneColor: 'rgb(200, 200, 200',
	circleTwoColor: 'rgb(200, 200, 200)',
	lineSize: 2,
	circleSize: 5,
}

const guide = {
	color: 'rgba(255, 255, 255, .2)',
	size: 2,
}

export type CTypes = {
	c: {
		c1: number
		c2: number
		c3: number
		c4: number
	}
}

/** general types */

const sizeSchema = z.object({
	width: z.number().default(400),
	height: z.number().default(400),
})

const paddingSchema = z.object({
	paddingH: z.number().default(0),
	paddingW: z.number().default(0),
})

const curveOptionSchema = z.object({
	curveSize: z.number().default(2),
	curveColor: z.string().default('rgba(255,255,255,.9)'),
})

const bGSchema = z.object({
	bgColor: z.string().default('rgba(0,0,0,.5)'),
})

const paddingBoxSchema = z.object({
	paddingColor: z.string().default('rgba(0,0,0,.5)'),
})

const containerSchema = z.object({
	container: z.boolean().default(false),
	className: z.union([z.string(), z.undefined()]),
	children: z.any(),
})

const errorSchema = z.object({
	showErrors: z.boolean().default(false),
})

/** HANDLE TYPES & GUIDE TYPES
 * can be boolean or object
 */

export const handleOptionSchema = z.object({
	lineOneColor: z.string().default(handles.lineOneColor),
	lineTwoColor: z.string().default(handles.lineTwoColor),
	circleOneColor: z.string().default(handles.circleOneColor),
	circleTwoColor: z.string().default(handles.circleTwoColor),
	lineSize: z.number().default(handles.lineSize),
	circleSize: z.number().default(handles.circleSize),
})

const handleSchema = z.object({
	handles: z.union([z.boolean(), handleOptionSchema]).default(handles),
})

const handleDefaultSchema = z.object({
	handles: handleOptionSchema.default(handles),
})

export const guideOptionSchema = z.object({
	color: z.string().default(guide.color),
	size: z.number().default(guide.size),
})

const guideSchema = z.object({
	guide: z.union([guideOptionSchema, z.boolean()]).default(guide),
})

const defaultGuideSchema = z.object({
	guide: guideOptionSchema.default(guide),
})

const curveSchema = z.object({
	curve: z.number().array().length(4).default([0.17, 0.67, 0.83, 0.67]),
})

const baseBackgroundSchema = z.object({
	color: z.string().default('rgba(150, 150, 150, .1)'),
	inPadding: z.boolean().default(false),
})

export const gridBackgroundSchema = z
	.object({
		size: z.number().default(1),
		spacing: z.number().default(20),
	})
	.merge(baseBackgroundSchema)

export const stripeBackgroundSchema = z
	.object({
		count: z.number().default(10),
		type: z.enum(['vertical', 'horizontal']).default('horizontal'),
	})
	.merge(baseBackgroundSchema)

const backgroundOptionSchema = z.discriminatedUnion('kind', [
	stripeBackgroundSchema.merge(z.object({ kind: z.literal('stripe') })),
	gridBackgroundSchema.merge(z.object({ kind: z.literal('grid') })),
])

export const backgroundSchema = z.object({
	backgroundType: z.union([z.undefined(), backgroundOptionSchema]),
})

/** FULL PROPS
 * @exports PassedProps :: type for passed props being optional
 * @exports DefaultProps :: type for default prop object; contains handles and grid object
 */
const basePropSchema = sizeSchema
	.merge(paddingSchema)
	.merge(curveOptionSchema)
	.merge(bGSchema)
	.merge(paddingBoxSchema)
	.merge(containerSchema)
	.merge(curveSchema)
	.merge(backgroundSchema)
	.omit({ children: true })

export const propsSchema = basePropSchema
	.merge(handleSchema)
	.merge(guideSchema)
	.merge(errorSchema)
export type PassedProps = z.input<typeof propsSchema>

export const defaultPropSchema = basePropSchema
	.merge(handleDefaultSchema)
	.merge(defaultGuideSchema)
export type DefaultProps = z.infer<typeof defaultPropSchema>

/** MULTI USE CHILD PROPS */
export type SizeTypes = z.infer<typeof sizeSchema>
export type PaddingTypes = z.infer<typeof paddingSchema>

/** CHILD COMPONENT PROPS */
export type BGTypes = z.infer<typeof bGSchema>
export type CurveTypes = z.infer<typeof curveOptionSchema>
export type ContainerTypes = z.infer<typeof containerSchema>
export type GuideTypes = z.infer<typeof guideOptionSchema>
export type PaddingBoxTypes = z.infer<typeof paddingBoxSchema>
export type HandleTypes = z.infer<typeof handleOptionSchema>
export type GridTypes = z.infer<typeof gridBackgroundSchema>
export type StripeTypes = z.infer<typeof stripeBackgroundSchema>
