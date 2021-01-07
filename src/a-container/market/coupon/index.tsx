import React, {useMemo} from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Params from './components/params';
import Table from './components/table';

const Index = () => {
    const ParamsComp = useMemo(() => <Params />, [])
    const TableComp = useMemo(() => <Table />, [])
    return <div className="padding_22_18">
        {useBread()}
        {ParamsComp}
        {TableComp}
    </div>
}

export default Index;