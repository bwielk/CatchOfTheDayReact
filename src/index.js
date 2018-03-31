import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css'; 
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';


const Root = () => {
	return(
		<Router>
			<Switch>
				<Route path="/" exact component={StorePicker} />
				<Route path ="/store/:storeId" exact component={App} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

render(<Root/>, document.getElementById('main'));