import React from 'react';

import {
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import Second from '../second'
import Loadable from '../loadable';
const Detail = Loadable(React.lazy(() => import('../../a-container/shop/detail')))
const Carousel = Loadable(React.lazy(() => import('../../a-container/shop/carousel')))
const Navigation = Loadable(React.lazy(() => import('../../a-container/shop/navigation')))
const Recommend = Loadable(React.lazy(() => import('../../a-container/shop/recommend')))
const Publish = Loadable(React.lazy(() => import('../../a-container/shop/publish')))
const addCarousel = Loadable(React.lazy(() => import('../../a-container/shop/carousel/addCarousel')))



export default Second(({furl}: {furl: string}) => {
    return (
        <Switch>
            <Route 
                exact
                path={furl}
                render={()=>(
                    <Redirect to={`${furl}/detail`} />
                )}
            />
            <Route path={`${furl}/detail`} component={Detail} />
            <Route path={`${furl}/carousel`} component={Carousel} />
            <Route path={`${furl}/navigation`} component={Navigation} />
            <Route path={`${furl}/recommend`} component={Recommend} />
            <Route path={`${furl}/publish`} component={Publish} />
            <Route path={`${furl}/addCarousel`} component={addCarousel} />
            <Route
                exact
                path="*"
                render={()=>(
                    <Redirect to={furl}/>
                )}
            />
        </Switch>
    );
}, '/shop')
