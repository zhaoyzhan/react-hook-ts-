import React from 'react';
import ReactDOM from 'react-dom';
import RouterDom from './router/index/index';
import * as serviceWorker from './serviceWorker';
import store from './store/index';
import {
	Provider
} from "react-redux";
import { SkeletonComp } from './router/loadable';

import './styles/animate.min.css';

import './styles/index.scss';

import './styles/iconfont/iconfont.css';

import './styles/antd.scss';

document.onreadystatechange = function () {
	if(document.readyState === 'complete') {
		ReactDOM.render(
			<Provider store={store}>
				<RouterDom />
			</Provider>,
			document.getElementById('root')
		);
	} else {
		ReactDOM.render(
			<SkeletonComp />,
			// <div style={{
			// 	display: 'flex',
			// 	alignItems: 'center',
			// 	justifyContent: 'center',
			// 	width: '100%',
			// 	height: '100%'
			// }}>
      //   loading...
      // </div>,
			document.getElementById('root')
		);
	}
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
