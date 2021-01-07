import React, {useMemo, useRef} from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import {Button} from 'antd';
import SortList from './components/sort-list';
import './index.scss';
const zIndex = 0
const Index = () => {
    const compRef: any = useRef()
    const SortComp = useMemo(() => <SortList compRef={compRef}/>, [compRef])
    const handleAdd = () => {
        compRef.current.setVisible(true)
    }
    return (
        <div className="padding_22_18 sort_add">
            { useBread() }
            <div className="modules">
                <Button type="primary" onClick={handleAdd} className="sort_add_btn">
                    添加商品分类
                </Button>
                {
                    zIndex ? <div className="null_list">
                        暂无商品分类
                    </div> : SortComp
                }
            </div> 
        </div>
    )
}

export default Index;