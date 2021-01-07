import React, {useState, useCallback, SFC, useRef, useEffect} from 'react';
import {Button} from 'antd';
import Modal from '../../../../a-components/modal';
import './index.scss';
const form = [{
    label: '微信支付证书',
    value: '证书已上传'
}, {
    label: '商户名称',
    for: '',
    value: '微动好物馆'
}, {
    label: '微信分配的小程序ID',
    for: '',
    value: '微动好物'
}, {
    label: '微信支付分配的商户号',
    for: '',
    value: '2424242424'
}, {
    label: '微信平台秘钥信息',
    for: '',
    value: 'pingaimiyao'
}, {
    label: '接入方应用回调地址',
    for: '',
    value: 'dizhixianshi'
}]

const Index: SFC<{handleCallback: (idx: number) => void}> = ({handleCallback}) => {
    const [visible, setVisible] = useState(false)
    const callbackRef: any = useRef(null)
    const handleOk = useCallback(() => {
        setVisible(false);
        callbackRef.current(0);
    }, [callbackRef])
    const handleCancel = useCallback(() => {
        setVisible(false);
    }, [])
    useEffect(() => {
        callbackRef.current = handleCallback;
        return () => {
            callbackRef.current = null;
        }
    })
    return (
        <div className="modules empty_form set_emp_form">
            <ul>
                {
                    form.map(({label, value}: {label: string, value: string}, index: number) => 
                        get_li({name: label, con: value, index})
                    )
                }
            </ul>
            <Button type="primary" onClick={() => setVisible(true)} htmlType="submit" className="set_emp_btn">
                修改
            </Button>
            <Modal 
                visible={visible} 
                title="修改收款商户配置"
                handleOk={handleOk}
                handleCancel={handleCancel}
                content={ModalComp()}
            />
        </div>
    )
}

const get_li = ({name, con, index}: {name: string, con: string, index: number}) => (
    <li className="li_content" key={index}>
        <label>{name}</label>
        <div className="box">
            <span className="con">{con}</span>
        </div>
    </li>
)

const ModalComp = () => (
    <div className="set_emp_modal_con">
        <img src={require('../../../../assets/images/warning.png')} alt=""/>
        <p>点击修改后原配置将失效，请您谨慎修改收款商户配置。</p>
    </div>
)

export default Index;