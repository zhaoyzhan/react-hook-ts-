import React, {Fragment, useMemo} from 'react';
import BreadCrumbs from './index';

export default () => {
    //组件
    const Bread = useMemo(() => <BreadCrumbs/>, [])
    return (
        <Fragment>
            { Bread }
        </Fragment>
    );
}