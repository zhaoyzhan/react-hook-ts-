import React from 'react';

import {
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import Second from '../second'
import Loadable from '../loadable';
const Coupon = Loadable(React.lazy(() => import('../../a-container/market/coupon')));
const EditCoupon = Loadable(React.lazy(() => import('../../a-container/market/coupon/edit')));
const LiveShop = Loadable(React.lazy(() => import('../../a-container/market/live-shop')));
const LiveManage = Loadable(React.lazy(() => import('../../a-container/market/live-manage')));
const LiveCreate = Loadable(React.lazy(() => import('../../a-container/market/live-manage/create')));


export default Second(({furl}: {furl: string}) => {
    return (
        <Switch>
            <Route 
                exact
                path={furl}
                render={()=>(
                    <Redirect to={`${furl}/coupon`} />
                )}
            />
            <Route path={`${furl}/coupon`} component={Coupon} />
            <Route path={`${furl}/editCoupon`} component={EditCoupon} />
            <Route path={`${furl}/liveshop`} component={LiveShop} />
            <Route path={`${furl}/livemanage`} component={LiveManage} />
            <Route path={`${furl}/livecreate`} component={LiveCreate} />
            <Route
                exact
                path="*"
                render={()=>(
                    <Redirect to={furl}/>
                )}
            />
        </Switch>
    );
}, '/market')
