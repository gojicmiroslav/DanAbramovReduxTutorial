import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import DanAvramovGettingStarted from './components/DanAvramovGettingStarted';
import ReactCounterExample from './components/ReactCounterExample';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Home} />
			<Route path="/react-counter-example" component={ReactCounterExample} />
			<Route path="/dan-avramov-getting-started" component={DanAvramovGettingStarted} />
			<Route path="/redux-counter-example" component={ReactCounterExample} />
		</Route>
	</Router>, 
	document.getElementById("app")
);
