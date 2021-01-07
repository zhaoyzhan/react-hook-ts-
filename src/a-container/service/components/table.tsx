import React, { Fragment, useCallback, useMemo, useRef, useState } from 'react';
import Image from '../../../a-components/image/image';
import Modals from './modals';
import {Button} from 'antd';
import {optTypes, operatT} from './types';
import './index.scss';

const Index = () => {
    const visibleRef: any = useRef()
    const [operat, setOperat] = useState<operatT>({type: 1, opt: ''})
    const operatHandle = (type: number, opt: string) => {
        setOperat({
            type, 
            opt
        })
        visibleRef.current.changeVisible(true)
    }
    const ImageComp = useCallback(() => (
        <Image 
            img={''} 
            classname="table_order_img"
            width={60} 
            height={60} />
    ), [])
    const TableItem = useCallback((type: number) => (
        <Fragment>
            <div className="table_tr tr_order">
                <div className="table_tr_head align_center padding-l30">
                    <p>订单号2002002020202020202002</p>
                    <p>下单时间：2020-08-05 10:30</p>
                </div>
                <div className="table_tr_con padding-l30 align_center">
                    {ImageComp()}
                    <div className="order_info">
                        <h3>商品名称</h3>
                        <p><span>选择尺码：通用</span><span>选择颜色：白色</span></p>
                    </div>
                </div>
            </div>
            <div className="table_tr tr_back">
                <div className="table_tr_head align_center">
          
                </div>
                <div className="table_tr_con flex_column_center">
                    <p>
                        售后类型：退货退款<br />
                        退款金额：¥199.00<br />
                        申请原因：不想要了
                    </p>
                    <div className="flex">
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
            <div className="table_tr tr_status">
                <div className="table_tr_head align_center">
          
                </div>
                <div className="table_tr_con flex_center">
                    <p>商家受理中</p>
                </div>
            </div>
            <div className="table_tr tr_operat">
                <div className="table_tr_head align_center">
          
                </div>
                <div className="table_tr_con flex_column_center">
                    <Button 
                        onClick={() => operatHandle(type, optTypes.YES)} 
                        style={{width: 96, marginBottom: 10}} 
                        type="primary">同意退货</Button>
                    {   
                        type !== 2 ? 
                            <Button 
                                style={{width: 96}} 
                                onClick={() => operatHandle(type, optTypes.NO)}
                                type="primary" 
                                ghost>拒绝退货</Button> : ''
                    }
                </div>
            </div>
        </Fragment>
    ), [ImageComp])
    const ModalsComp = useMemo(() => <Modals operat={operat} visibleRef={visibleRef}/>, [operat])
    return <div className="modules service_handle_table">
        <ul>
            <li className="table_head">
                <div className="table_th padding-l30">
                    订单
                </div>
                <div className="table_th text_center">退货退款</div>
                <div className="table_th text_center">订单状态</div>
                <div className="table_th text_center">操作</div>
            </li>
            <li className="table_item">
                {TableItem(1)}
            </li>
            <li className="table_item">
                {TableItem(2)}
            </li>
            <li className="table_item">
                {TableItem(3)}
            </li>
        </ul>
        {ModalsComp}
    </div>
}

export default Index;