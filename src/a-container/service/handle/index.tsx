import React, { useMemo, useState, useCallback } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Tabs from '../../../a-components/tabs';
import Params from '../components/params';
import Table from '../components/table';
import Transition from '../../../a-components/transition';
const tabs: string[] = ['全部', '待处理', '已处理']
const Index = () => {
    const [pageIdx, setPageIdx] = useState(0);
    const changeIdx = useCallback((idx: number) => {
        setPageIdx(idx)
    }, []);
    const TabsComp = useMemo(() => <Tabs tabs={tabs} pageIdx={pageIdx} changeIdx={changeIdx}/>, [changeIdx, pageIdx]);
    const ParamsComp = useMemo(() => <Params />, []);
    const TableComp = useMemo(() => <Table />, []);
    return <div className="padding_22_18">
        {useBread()}
        {ParamsComp}
        {TabsComp}
        {TableComp}
    </div>
}

export default Transition(Index);