import React from 'react';

import {
	Redirect,
	Route,
	Switch
} from 'react-router-dom';

import Loadable from '../loadable';

import Shop from '../shop';
import Goods from '../goods';
import Order from '../order';
import Service from '../service';
import Market from '../market';
import Setting from '../setting';

const Index = Loadable(React.lazy(() => import('../../a-container/index/index')))
const Login = Loadable(React.lazy(() => import('../../a-container/login/index')))

const PrivateRoute = ({  //处理路由的问题
    children,
    path
}: {
   children: any,
   path: string,
}) => {
	return (
		<Route
	      	path={path}
	      	render={({ location }) =>
			  	children
			}
		/>
	);
}

export default () => {
	return (
		<Switch>
			<PrivateRoute 
				path="/login"
				>
				<Login />
			</PrivateRoute>
			<PrivateRoute 
				path="/index"
				>
				<Index />
			</PrivateRoute>
      <PrivateRoute 
				path="/shop"
				>
				<Shop/>
			</PrivateRoute>
			<PrivateRoute 
				path="/goods"
				>
				<Goods/>
			</PrivateRoute>
			<PrivateRoute 
				path="/order"
				>
				<Order/>
			</PrivateRoute>
			<PrivateRoute 
				path="/service"
				>
				<Service/>
			</PrivateRoute>
			<PrivateRoute 
				path="/market"
				>
				<Market/>
			</PrivateRoute>
			<PrivateRoute 
				path="/setting"
				>
				<Setting/>
			</PrivateRoute>
			<Route
				exact
			    path="*"
			    render={()=>(
					<Redirect to="/index"/>
				)}
			/>
		</Switch>
	);
}
