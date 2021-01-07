
//配送模版
import React, { useMemo, useState, useCallback, useRef } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import { Radio, Button } from 'antd';
import classnames from 'classnames';
import Modal from '../../../a-components/modal';
import Form from './component/form';
import './index.scss';

const tempList = [
    {id: 1},
    {id: 2},
    {id: 3}, 
    {id: 4},
    {id: 5},
    {id: 6}
]

const Index = () => {
    const handleRef: any = useRef(null);
    const [visible, setVisible] = useState<boolean>(false);
    const handleOk = useCallback(() => {
        handleRef.current.checkHandle();
        // setVisible(false)
    }, [])
    const handleCancel = useCallback(() => {
        setVisible(false)
    }, [])
    const useModal = useMemo(() => {
        if(!visible) return;
        return <Modal 
                    handleOk={handleOk}
                    width={790}
                    title="物流模版"
                    handleCancel={handleCancel}
                    visible={visible}>
            <Form handleRef={handleRef}/>
        </Modal>
    }, [visible, handleOk, handleCancel])
    return <div className="padding_22_18" style={{ width: 'auto' }}>
        { useBread() }
        <ul className="order_template_box">
            <li 
                onClick={() => setVisible(true)}
                className={classnames(`flex_column ${tempList.length < 7 ? 'active' : 'disabled'}`)}>
                <img src={require('../../../assets/images/add-active.png')} className="active" style={{width: 54, height: 54, marginBottom: 18}} alt=""/>
                <img src={require('../../../assets/images/add-disabled.png')} className="disabled" style={{width: 54, height: 54, marginBottom: 18}} alt=""/>
                <p>新建物流模板</p> 
            </li>
            {
                tempList.map(({id}: {id: number}) => 

                    <li key={id}>
                        <h4>全国包邮(偏远地区除外)</h4>
                        <p>
                            <span className="label">发货</span>
                            <span className="value">北京市 快递 按条件包邮 付款后48小时内发货 </span>
                        </p>
                        <p>
                            <span className="label">默认运费</span>
                            <span className="value">1件内0元，每增加1件加0元</span>
                        </p>
                        <p>
                            <span className="label">指定运费</span>
                            <span className="value">新疆维吾尔自治区、西藏自治区1,新疆维吾尔自治区、西藏自治区1, 新疆维吾尔自治区、西藏自治区1,新疆维吾尔自治区、西藏自治区1件内10元，每增加1件加8元</span>
                        </p>
                        <div>
                            <Radio>默认</Radio>
                            <Button style={{width: 68}}>
                                编辑
                            </Button>
                        </div>
                    </li>
                )
            }
        </ul>
        { useModal }
    </div>
}

export default Index;