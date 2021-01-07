import React, {
    Fragment,
    FC,
    useState,
    useCallback,
    useImperativeHandle,
    useMemo
} from 'react';
import Modal from '../../../a-components/modal';
import {optTypes, operatT} from './types';
import {Input} from 'antd';
import './index.scss';

const btnText = {
    [optTypes.YES]: '同意',
    [optTypes.NO]: '拒绝'
}

const Index: FC<{visibleRef: any, operat: operatT}> = ({visibleRef, operat}) => {
    const {type, opt}: operatT = operat;
    const [visible, setVisible] = useState(false)
    const handleOk = useCallback(() => {
        setVisible(false)
    }, [])
    const handleCancel = useCallback(() => {
        setVisible(false)
    }, [])
    useImperativeHandle(visibleRef, () => ({
        changeVisible: (flag: boolean) => {
            setVisible(flag)
        }
    }))
    const getContent = useMemo(() => {
        if ((type === 1 || type === 3) && opt === optTypes.YES) {
            return <Fragment>
                <p style={{marginBottom: 30}}>确认同意退货？同意后由客户填写退货快递单号，确认收到货后退款金额返还给客户。</p>
                <p style={{marginBottom: 10}}>请输入退款金额（最多188元）</p>
                <Input />
            </Fragment>
        } else if ((type === 1 || type === 3) && opt === optTypes.NO) {
            return <Fragment>
                <div className="flex">
                    <label>拒绝理由</label>
                    <Input.TextArea placeholder="填写拒绝理由" autoSize={{ minRows: 3, maxRows: 5 }}/>
                </div>
            </Fragment>
        } else if (type === 2) {
            return <Fragment>
                <p style={{textAlign: 'center', marginTop: 30}}>确认已收到货？</p>
                <p style={{textAlign: 'center', marginBottom: 40}}>确认通过后退款金额199元将直接返还给用户！</p>
            </Fragment>
        }
    }, [type, opt])
    const getTitle = useMemo(() => {
        switch (type) {
            case 1:
                return '退货退款';
            case 2:
                return '退货退款';
            case 3:
                return '直接退款';
            default:
                return '退货退款'
        }
    }, [type])
    const getOkText = useMemo(() => {
        if(type === 1) {
            return `${btnText[opt]}退货`;
        } else if(type === 2) {
            return `确认收货`;
        } else if(type === 3) {
            return `${btnText[opt]}退款`;
        }
    }, [type, opt])
    const ModalMp = useMemo(() => {
        if(!visible) return '';
        return <Modal 
            title={getTitle}
            okText={getOkText}
            handleOk={handleOk}
            handleCancel={handleCancel}
            content={<div className="service_modal_box">{getContent}</div>}
        />
    }, [getContent, handleOk, visible, handleCancel, getTitle, getOkText])
    React.useEffect(() => {
        console.log('lkkkkk')
    })
    return <Fragment>
        {ModalMp}
    </Fragment>
}

export default Index;