import React, { useMemo } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Params from './components/params';
import Table from './components/table';
import Transition from '../../../a-components/transition';

const Index = () => {
    const useParams = useMemo(() => <Params />, []);
    const useTable = useMemo(() => <Table />, []);
    return <div className="padding_22_18">
        { useBread() }
        { useParams }
        { useTable }
    </div>
}

export default Transition(Index);