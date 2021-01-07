import React, { useMemo, Fragment, useCallback, useState, useEffect } from 'react';
import Table from '../../../../a-components/table';
import Upload from '../../../../a-components/upload/upload';
import Modal from '../../../../a-components/modal';
import { Button } from 'antd';
interface dataT {
    id: string,
    key: string,
    order_num: string,
    company: string,
    send_num: string
}

const Fdata: dataT[] = [{
    id: '1',
    key: '1',
    order_num: '1345353535353535',
    company: '顺丰快递',
    send_num: '2344567787879'
}, {
    id: '2',
    key: '2',
    order_num: '1345353535353535',
    company: '韵达快递',
    send_num: '2344567787879'
}, {
    id: '3',
    key: '3',
    order_num: '1345353535353535',
    company: '京东快递',
    send_num: '2344567787879'
}]

const columns: {}[] = [{
    title: '订单号',
    key: '1',
    dataIndex: 'order_num',
    align: 'center'
}, {
    title: '物流公司',
    key: '1',
    dataIndex: 'company',
    align: 'center'
}, {
    title: '快递单号',
    key: '1',
    dataIndex: 'send_num',
    align: 'center'
}];

const Index = () => {
    const [dataL, setDataL] = useState<any[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const handleSelect = useCallback((strs: string[], lists: any[]) => {
        console.log(strs, lists)
    }, []);
    const uploadFile = useCallback((file: any) => {
        console.log(file, 'kkkkkk')
        setDataL(Fdata)
    }, []);
    const handleOk = useCallback(() => {
        setVisible(false)
    }, []);
    const handleCancel = useCallback(() => {
        setVisible(false)
    }, []);
    const useModal = useMemo(() => {
        if(!visible) return '';
        return <Modal 
            handleOk={handleOk}
            title="确认发货"
            classname="live_shop_modal"
            handleCancel={handleCancel}
        >
            <div className="flex_column_center" style={{height: 200}}>
                <img src={require('../../../../assets/images/on-sure.png')} style={{width: 52, height: 52, marginBottom: 30}} alt=""/>
                <p style={{ lineHeight: '20px', color: '#333333' }}>操作后不可撤销，物流信息将直接对买家展示</p>
            </div>
        </Modal>
    }, [handleOk, handleCancel, visible]);
    const useTable = useMemo(() => dataL.length ? <Fragment>
        <Table 
            classname="bulk_delivery_table" 
            select={true} 
            columns={columns} 
            selected={handleSelect}
            data={dataL}/> 
            <Button style={{width: 96}} onClick={() => setVisible(true)} type="primary">
                确认发货
            </Button>
        </Fragment> : <div style={{ height: 400 }} className="flex_column_center">
            <Upload fileInfo={uploadFile}>
                <Button style={{width: 110}} type="primary">
                    上传发货单
                </Button>
            </Upload>
            <p style={{ marginTop: 12, lineHeight: '20px', color: '#0E1726' }}>将已填写好的Excel文件拖拽到此处上传</p>
        </div>, 
    [handleSelect, dataL, uploadFile]);
    useEffect(() => {
        (() => {
            setDataL(Fdata)
        })()
    })
    return <Fragment>
        <div className="align_center" style={{ justifyContent: 'space-between', marginBottom: 30 }}>
            <div className="align_center" style={{ flex: 1 }}>
                <label className="area_head">发货成功</label>
                <div className="align_center" style={{ 
                    width: '70%',
                    height: 36,
                    border: '1px solid #FFE28D',
                    background: '#FFFAEB',
                    borderRadius: '4px',
                    paddingLeft: 18
                }}>
                    <img src="" style={{ width: 14, height: 14, marginRight: 12 }} alt=""/>
                    <p style={{ fontSize: 12, color: '#333' }}>共发货成功0笔订单，3笔订单存在异常情况</p>
                </div>
            </div>
            <Button style={{width: 125}} type="primary">
                下载失败记录
            </Button>
        </div>
        { useTable }
        { useModal }
    </Fragment>
}

export default Index;