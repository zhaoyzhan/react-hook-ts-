import React, {useMemo, useState, useCallback} from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Tabs from '../../../a-components/tabs';
import Detail from './components/detail';
import Base from './components/base';
import Norms from './components/norms';
import Parameter from './components/parameter';

const tabs: string[] = ['基础信息', '库存/规格', '参数', '商品详情']

const Index = () => {
    const [pageIdx, setPageIdx] = useState(1);
    const changeIdx = useCallback((idx: number) => {
        setPageIdx(idx)
    }, []);
    const TabsComp = useMemo(() => <Tabs tabs={tabs} pageIdx={pageIdx} changeIdx={changeIdx}/>, [changeIdx, pageIdx]);
    const DetailComp = useMemo(() => <Detail />, []);
    const BaseComp = useMemo(() => <Base />, []);
    const NormsComp = useMemo(() => <Norms />, []);
    const ParameterComp = useMemo(() => <Parameter />, []);
    return (
        <div className="padding_22_18 goods_add">
            {useBread()}
            {TabsComp}
            {
                [BaseComp, NormsComp, ParameterComp, DetailComp][pageIdx]
            }
        </div>
    )
}

export default Index;