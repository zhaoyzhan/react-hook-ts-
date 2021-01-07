import React from 'react';

import {
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import Second from '../second'
import Loadable from '../loadable';
const Personal = Loadable(React.lazy(() => import('../../a-container/setting/personal')));
const Secure = Loadable(React.lazy(() => import('../../a-container/setting/secure')));
const ChangePassword = Loadable(React.lazy(() => import('../../a-container/setting/secure/change-paddword')));
const ChangePhone = Loadable(React.lazy(() => import('../../a-container/setting/secure/change-phone')));
const ChangeWx = Loadable(React.lazy(() => import('../../a-container/setting/secure/change-wx')));

export default Second(({furl}: {furl: string}) => {
    return (
        <Switch>
            <Route 
                exact
                path={furl}
                render={()=>(
                    <Redirect to={`${furl}/personal`} />
                )}
            />
            <Route path={`${furl}/personal`} component={Personal} />
            <Route path={`${furl}/secure`} component={Secure} />
            <Route path={`${furl}/changepassword`} component={ChangePassword} />
            <Route path={`${furl}/changephone`} component={ChangePhone} />
            <Route path={`${furl}/changewx`} component={ChangeWx} />
            <Route
                exact
                path="*"
                render={()=>(
                    <Redirect to={furl}/>
                )}
            />
        </Switch>
    );
}, '/setting')
