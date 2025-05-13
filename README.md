## React-SVG-SCurve

### <a name="about"></a>About

`react-svg-scurve` is a UI package to easily draw SVG cubic-bezier curves. During the creation of the [react-easy-ease](https://github.com/NahanaBanahnah/react-easy-ease) documentation I built a simple component to achieve this. I have since decided to build upon this and release it.

## [Usage](#usage) | [Options](#options) | [Styling](#styling)

#### Options: [Sizing](#sizing) | [Padding](#padding) | [Curve](#curve) | [BG Colors](#bg_color) | [Handles](#handles) | [Guide](#guide) | [Background Type](#background) | [Container & Class](#container_props) | [Errors](#errors) |

### <a name="installation"></a>Installation

```bash
npm i @nahana/react-svg-scurve

#or

yarn add @nahana/react-svg-scurve

#or

pnpm @nahana/react-svg-scurve
```

### <a name="usage"></a>Usage

```javascript
import { SCurve } from '@nahana/react-svg-scurve'

export const App = () => {
	return <SCurve />
}
```

_Default Result:_

![Default output](https://raw.githubusercontent.com/NahanaBanahnah/react-svg-scurve/refs/heads/master/src/img/default.png)

### <a name="options"></a>Options

### <a name="sizing"></a><ins>Sizing</ins>

> The overall px size of the curve SVG viewport.

> Best practice is to set `width` & `height` to the same value; but is not required.

| PROP       | Type     | Default |
| ---------- | -------- | ------- |
| **width**  | _number_ | `400`   |
| **height** | _number_ | `400`   |

```javascript
<SCurve width={800} height={800} />
```

### <a name="padding"></a><ins>Padding</ins>

> Adds padding in px to width and / or height of the bounding box.

> Useful if your curve goes +1 or -1 in value as this can clip part of the curve.

> Value is per side; eg **50** would add 100px total

> Value is in addition to `size`; eg `400` width + `50` padding would result in a total of `500px` width

| PROP         | Type     | Default | Description    |
| ------------ | -------- | ------- | -------------- |
| **paddingH** | _number_ | `0`     | Top and Bottom |
| **paddingW** | _number_ | `0`     | Left and Right |

```javascript
<SCurve paddingH={50} paddingW={50} />
```

```javascript
<SCurve width={800} height={800} />
```

### <a name="curve"></a><ins>Curve</ins>

> The cubic-bezier curve to draw

| PROP      | Type                               | Default                    |
| --------- | ---------------------------------- | -------------------------- |
| **curve** | _[number, number, number, number]_ | `[0.17, 0.67, 0.83, 0.67]` |

```javascript
<SCurve curve={[0.64, 0.03, 0.07, 0.97]} />
```

### <a name="bg_color"></a><ins>Basic Background Colors</ins>

| PROP             | Type     | Default          | Description               |
| ---------------- | -------- | ---------------- | ------------------------- |
| **bgColor**      | _string_ | `rgba(0,0,0,.5)` | Main viewport background  |
| **paddingColor** | _string_ | `rgba(0,0,0,.5)` | Color of padding "border" |

```javascript
<SCurve bgColor="white" paddingColor="rgba(255,255,255,.2)" />
```

### <a name="handles"></a><ins>Handles</ins>

> Displays the start and end of curve handles

| PROP        | Type                        | Default          | Description                   |
| ----------- | --------------------------- | ---------------- | ----------------------------- |
| **handles** | _false_ or _options object_ | `options object` | Hide or customize the handles |

#### Handle Options

| PROP               | Type     | Default                   |
| ------------------ | -------- | ------------------------- |
| **lineOneColor**   | _string_ | `rgba(255, 255, 255, .5)` |
| **lineTwoColor**   | _string_ | `rgba(255, 255, 255, .5)` |
| **lineSize**       | _number_ | `2`                       |
| **circleOneColor** | _string_ | `rgb(200, 200, 200)`      |
| **circleTwoColor** | _string_ | `rgb(200, 200, 200)`      |
| **circleSize**     | _number_ | `5`                       |

```javascript
// hide Handles
<SCurve handles={false} />

// only change line size
<SCurve
	handles={{
	    lineSize: 5,
	}}
/>

//change all options
<SCurve
    handles={{
	    lineSize: 5,
		circleSize: 10,
		lineOneColor: 'red',
		lineTwoColor: 'red',
		circleOneColor: 'red',
		circleTwoColor: 'red',
	}}
/>
```

### <a name="guide"></a><ins>Guide</ins>

> Displays a linear guide line

| PROP      | Type                        | Default          | Description                      |
| --------- | --------------------------- | ---------------- | -------------------------------- |
| **guide** | _false_ or _options object_ | `options object` | Hide or customize the guide line |

#### Guide Options

| PROP      | Type     | Default                   |
| --------- | -------- | ------------------------- |
| **color** | _string_ | `rgba(255, 255, 255, .2)` |
| **size**  | _number_ | `2`                       |

```javascript
// hide the guide
<SCurve guide={false} />

// only change guide color
<SCurve
	guide={{
	    color: 'blue',
	}}
/>

//change all options
<SCurve
	guide={{
	    color: 'blue',
		size: 1,
	}}
/>
```

### <a name="background"></a><ins>Grid and Striped Background</ins>

> Displays a grid or stripped background

| PROP               | Type                        | Default           |
| ------------------ | --------------------------- | ----------------- |
| **backgroundType** | _false_ or _options object_ | `false`           |
| **kind**           | _grid_ or _stripe_          | `option required` |

#### Grid Options

| PROP          | Type      | Default                   |
| ------------- | --------- | ------------------------- |
| **color**     | _string_  | `rgba(150, 150, 150, .1)` |
| **inPadding** | _boolean_ | `false`                   |
| **size**      | _number_  | `1`                       |
| **spacing**   | _number_  | `20`                      |

#### Stripe Options

| PROP          | Type                       | Default                   |
| ------------- | -------------------------- | ------------------------- |
| **color**     | _string_                   | `rgba(150, 150, 150, .1)` |
| **inPadding** | _boolean_                  | `false`                   |
| **count**     | _number_                   | `10`                      |
| **type**      | _horizontal_ or _vertical_ | `horizontal`              |

```javascript
// show the default grid background
<SCurve
	backgroundType={{
	    kind: 'grid',
	}}
/>

// show the default stripe background
<SCurve
	backgroundType={{
	    kind: 'stripe',
	}}
/>

//stripe background with options
<SCurve
	backgroundType={{
	    kind: 'stripe',
		color: 'blue',
		count: 20,
	}}
/>
```

_Default Grid Background_

![Default grid](https://raw.githubusercontent.com/NahanaBanahnah/react-svg-scurve/refs/heads/master/src/img/withGrid.png)

_Default Stripe Background_

![Default grid](https://raw.githubusercontent.com/NahanaBanahnah/react-svg-scurve/refs/heads/master/src/img/withStripe.png)

### <a name="container_props"></a><ins>Container & Class Props</ins>

> Use `container` to wrap the svg output in a `div`

> `className` adds className to output `svg` (or `div` if `container` is true)

> `className` can be css class, or css module. More on this in styling.

| PROP          | Type                    | Default     |
| ------------- | ----------------------- | ----------- |
| **container** | _boolean_               | `false`     |
| **className** | _string_ or _undefined_ | `undefined` |

### <a name="errors"></a><ins>Error Reporting</ins>

> By default incorrect prop types will be replaced with their default value; eg type `string` is passed a `number`, and console errors are suppressed. If you'd like to see the errors in console, enable `showErrors`

| PROP           | Type      | Default |
| -------------- | --------- | ------- |
| **showErrors** | _boolean_ | `false` |

## <a name="styling"></a>Styling

> Each element is assigned a css class allowing custom styling.

| Element                 | Class                     |
| ----------------------- | ------------------------- |
| **Base Background**     | `bg`                      |
| **SVG Element**         | `svg` or `className prop` |
| **Padding Background**  | `padding`                 |
| **Main Curve**          | `curve`                   |
| **Linear Guide**        | `guide`                   |
| **Handle Start Line**   | `handleLineOne`           |
| **Handle End Line**     | `handleLineTwo`           |
| **Handle Start Circle** | `handleCircleOne`         |
| **Handle End Circle**   | `handleCircleTwo`         |
| **Stripes**             | `stripes`                 |
| **Grid**                | `grid`                    |

> If you'd like different custom styles for multiple SVG outputs you can use the `className` prop to help achieve this

_Standard CSS_

```javascript
import './App.css'

export const App = () => {
	return (
		<>
			<SCurve className="mainSVG" />
			<SCurve className="secondSVG" />
		</>
	)
}
```

```css
/* App.css */
.mainSVG > .bg {
	fill: red;
}
.secondSVG > .bg {
	fill: blue;
}
```

_With Modules CSS we need to target the global class_

```javascript
import styles from './scurve.module.scss'

export const App = () => {
	return (
		<>
			<SCurve className={styles.mainSVG} />
			<SCurve className={styles.secondSVG} />
		</>
	)
}
```

```css
/* scurve.module.scss */

/* SASS nesting */
.mainSVG {
	:global(.bg) {
		fill: red;
	}
}

/* Standard Child Selector */
.secondSVG > :global(.bg) {
	fill: blue;
}

/* CSS Nesting */
.secondSVG {
	& :global(.bg) {
		fill: orange;
	}
}
```

## License

2025 Nate Mitchell, [MIT](https://github.com/NahanaBanahnah/react-easy-ease/blob/master/LICENSE)
