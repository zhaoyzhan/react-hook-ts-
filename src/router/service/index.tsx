import React from 'react';

import {
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import Second from '../second'
import Loadable from '../loadable';
const Handle = Loadable(React.lazy(() => import('../../a-container/service/handle')))



export default Second(({furl}: {furl: string}) => {
    return (
        <Switch>
            <Route 
                exact
                path={furl}
                render={()=>(
                    <Redirect to={`${furl}/handle`} />
                )}
            />
            <Route path={`${furl}/handle`} component={Handle} />
            <Route
                exact
                path="*"
                render={()=>(
                    <Redirect to={furl}/>
                )}
            />
        </Switch>
    );
}, '/service')
