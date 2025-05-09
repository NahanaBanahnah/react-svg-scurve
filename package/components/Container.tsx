/**
 * @exports Container
 * returns either main SVG or the SVG wrapped in a div
 */

import { ContainerTypes, PaddingTypes, SizeTypes } from '../util/types'

const SVG = ({ ...props }: SizeTypes & PaddingTypes & ContainerTypes) => {
	const { width, height } = props
	const { paddingH, paddingW } = props
	const { container, className, children } = props

	return (
		<svg
			width={width + paddingW * 2}
			height={height + paddingH * 2}
			fill="transparent"
			className={container ? 'svg' : className}
		>
			{children}
		</svg>
	)
}

const DIV = ({ ...props }: SizeTypes & PaddingTypes & ContainerTypes) => {
	const { className, children } = props

	const propsToPass = {
		width: props.width,
		height: props.height,
		paddingH: props.paddingH,
		paddingW: props.paddingW,
		container: props.container,
		className: props.className,
	}

	return (
		<div className={className}>
			<SVG {...propsToPass}>{children}</SVG>
		</div>
	)
}

export const Container = ({
	...props
}: SizeTypes & PaddingTypes & ContainerTypes) => {
	const { container, children } = props

	const propsToPass = {
		width: props.width,
		height: props.height,
		paddingH: props.paddingH,
		paddingW: props.paddingW,
		container: props.container,
		className: props.className,
	}

	return container ? (
		<SVG {...propsToPass}>{children}</SVG>
	) : (
		<DIV {...propsToPass}>{children}</DIV>
	)
}
