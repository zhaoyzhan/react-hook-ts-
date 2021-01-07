import React from 'react';

import {
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import Second from '../second'
import Loadable from '../loadable';
const BulkDelivery = Loadable(React.lazy(() => import('../../a-container/order/bulk-delivery')))
const DisTemplate = Loadable(React.lazy(() => import('../../a-container/order/dis-template')))
const OrderManage = Loadable(React.lazy(() => import('../../a-container/order/order-manage')))
// const Reviews = Loadable(React.lazy(() => import('../../a-container/order/reviews')))
const OrderDetail = Loadable(React.lazy(() => import('../../a-container/order/order-detail')))


export default Second(({furl}: {furl: string}) => {
    return (
        <Switch>
            <Route 
                exact
                path={furl}
                render={()=>(
                    <Redirect to={`${furl}/manage`} />
                )}
            />
            <Route path={`${furl}/manage`} component={OrderManage} />
            <Route path={`${furl}/delivery`} component={BulkDelivery} />
            <Route path={`${furl}/template`} component={DisTemplate} />
            {/* <Route path={`${furl}/reviews`} component={Reviews} /> */}
            <Route path={`${furl}/orderDetail`} component={OrderDetail} />
            <Route
                exact
                path="*"
                render={()=>(
                    <Redirect to={furl}/>
                )}
            />
        </Switch>
    );
}, '/order')
