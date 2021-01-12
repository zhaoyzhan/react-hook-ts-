import React, {useMemo} from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Params from './components/params';
import Table from './components/table';
import Transition from '../../../a-components/transition';

const Index = () => {
    const ParamsComp = useMemo(() => <Params />, [])
    const TableComp = useMemo(() => <Table />, [])
    return <div className="padding_22_18">
        {useBread()}
        {ParamsComp}
        {TableComp}
    </div>
}

export default Transition(Index);