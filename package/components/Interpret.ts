export const interpret = (curve: number[], width: number, height: number) => {
	const c1 = curve[0] * width
	const c2 = height - curve[1] * height
	const c3 = curve[2] * width
	const c4 = height - curve[3] * height

	return {
		c1: c1,
		c2: c2,
		c3: c3,
		c4: c4,
	}
}
