import React, {useMemo, useCallback, useState} from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Tabs from '../../../a-components/tabs';
import Table from './components/table';
import Transition from '../../../a-components/transition';
import {Button, Input} from 'antd';
import './components/index.scss';

const tabs: string[] = ['全部', '审核中', '审核成功', '审核失败']
const Index = () => {
    const [pageIdx, setPageIdx] = useState(0);
    const changeIdx = useCallback((idx: number) => {
        setPageIdx(idx)
    }, []);
    const TabsComp = useMemo(() => <Tabs tabs={tabs} pageIdx={pageIdx} changeIdx={changeIdx}/>, [changeIdx, pageIdx]);
    const useTable = useMemo(() => <Table />, []);
    return <div className="padding_22_18 live_shop">
        {useBread()}
        <div className="modules live_shop_params align_center">
            <div className="align_center">
                <label className="area_head">商品名称</label>
                <Input style={{width: 270}}/>
                <Button style={{ width: 68, margin: '0 20px 0 30px' }} type="primary">查询</Button>
                <Button style={{width: 68}} className="ghost_btn" type="primary" ghost>清除</Button>
            </div>
            <div>
                <Button style={{width: 180, marginRight: 18}} type="primary" ghost>导入商品到直播商品库</Button>
                <Button style={{width: 194}} type="primary" ghost>同步直播间商品审核状态</Button>
            </div>
        </div>
        {TabsComp}
        {useTable}
    </div>
}

export default Transition(Index);