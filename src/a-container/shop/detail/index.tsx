import React, {useMemo, useState, useCallback} from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Tabs from '../../../a-components/tabs';
import DefEmpForm from './components/form';
import BaseDefaultForm from './components/default-form';
import SetEmp from './components/set-emp-form';
import SetDef from './components/set-def-form';
// import { countText } from '../../index/reduce';

const tabs: string[] = ['基础信息', '收款设置']

const defIndex = 0

const Index = (props: any) => {
    const [pageIdx, setPageIdx] = useState(1);
    const [empidx, setEmpIdx] = useState(0);
    const changeIdx = useCallback((idx: number) => {
        setPageIdx(idx)
    }, []);
    const handleCallback = useCallback((idx: number) => {
        setEmpIdx(idx)
    }, [])
    //组件
    const BaseDefForm = useMemo(() => <BaseDefaultForm />, []);
    const EmpDefForm = useMemo(() => <DefEmpForm />, []);
    const DefSetForm = useMemo(() => <SetDef />, []);
    const EmpSetForm = useMemo(() => <SetEmp handleCallback={handleCallback}/>, [handleCallback]);
    const TabsComp = useMemo(() => <Tabs tabs={tabs} pageIdx={pageIdx} changeIdx={changeIdx}/>, [changeIdx, pageIdx]);
    return (
        <div className="modules_main padding_22_18">
            {useBread()}
            {TabsComp}
            {
                !pageIdx ? (defIndex ? EmpDefForm : BaseDefForm) : (empidx ? EmpSetForm : DefSetForm)
            }
        </div>
    );
}

export default Index;