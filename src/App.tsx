import React from 'react'
import { SCurve } from '../package/components/SCurve'
import './App.css'

function App() {
	return (
		<div className="container">
			<SCurve curve={[0.99, 0.03, 0.5, 0.2]} />
		</div>
	)
}

export default App
