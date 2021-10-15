import React from 'react'

import IndexPage from './index'
import { Switch, Route, Router } from './../util/router'

function App(props) {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={IndexPage} />
			</Switch>
		</Router>
	)
}

export default App
