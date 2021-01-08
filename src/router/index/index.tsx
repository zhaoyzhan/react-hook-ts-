import React from 'react';
import {withRouter} from 'react-router-dom';
import {
	Route,
	BrowserRouter as Router,
	// Redirect,
	Switch
} from 'react-router-dom';

import Layout from '../layout';

import Routers from './routers';
import Login from '../../a-container/login/index';

const MainCon = Layout(withRouter(Routers));

const RouterCon = () => {
	return (<Router>
		<Switch>
			<Route 
				path="/" 
				render={()=> (
					<MainCon />
				)}
			/>
			{/* <Route
				exact
				path="/*"
				render={()=>(
					<Redirect to="/index"/>
				)}
			/> */}
			<Route 
				path="/login" 
				render={()=> (
					<Login />
				)}
			/>
		</Switch>
	</Router>);
}

export default RouterCon;
