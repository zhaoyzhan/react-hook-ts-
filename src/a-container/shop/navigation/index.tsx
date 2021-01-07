import React from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';

const Index = (props: any) => {
    return (
        <div className="padding_22_18">
            {useBread()}
            <div className="modules">
                和轮播图一样
            </div>
        </div>
    );
}

export default Index;