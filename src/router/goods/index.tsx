import React from 'react';

import {
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import Second from '../second'
import Loadable from '../loadable';
const SortAdd = Loadable(React.lazy(() => import('../../a-container/goods/sort-add')))
const GoodsAdd = Loadable(React.lazy(() => import('../../a-container/goods/goods-add')))
const GoodsList = Loadable(React.lazy(() => import('../../a-container/goods/goods-list')))



export default Second(({furl}: {furl: string}) => {
    return (
        <Switch>
            <Route 
                exact
                path={furl}
                render={()=>(
                    <Redirect to={`${furl}/sortadd`} />
                )}
            />
            <Route path={`${furl}/sortadd`} component={SortAdd} />
            <Route path={`${furl}/add`} component={GoodsAdd} />
            <Route path={`${furl}/list`} component={GoodsList} />
            <Route
                exact
                path="*"
                render={()=>(
                    <Redirect to={furl}/>
                )}
            />
        </Switch>
    );
}, '/goods')
