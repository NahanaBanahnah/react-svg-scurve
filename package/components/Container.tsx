/**
 * @exports Container
 * returns either main SVG or the SVG wrapped in a div
 *
 *
 */

import { ContainerTypes, PaddingTypes, SizeTypes } from '../util/types'

const SVG = ({
	width,
	height,
	paddingH,
	paddingW,
	container,
	className,
	children,
}: SizeTypes & PaddingTypes & ContainerTypes) => {
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

const DIV = ({
	width,
	height,
	paddingH,
	paddingW,
	container,
	className,
	children,
}: SizeTypes & PaddingTypes & ContainerTypes) => {
	const propsToPass = {
		width: width,
		height: height,
		paddingH: paddingH,
		paddingW: paddingW,
		container: container,
		className: className,
	}

	return (
		<div className={className}>
			<SVG {...propsToPass}>{children}</SVG>
		</div>
	)
}

export const Container = ({
	container,
	children,
	width,
	height,
	paddingH,
	paddingW,
	className,
}: SizeTypes & PaddingTypes & ContainerTypes) => {
	const propsToPass = {
		width: width,
		height: height,
		paddingH: paddingH,
		paddingW: paddingW,
		container: container,
		className: className,
	}

	return container ? (
		<SVG {...propsToPass}>{children}</SVG>
	) : (
		<DIV {...propsToPass}>{children}</DIV>
	)
}
