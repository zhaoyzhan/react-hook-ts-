import React, {useMemo, useState, useCallback} from 'react';
import {Button, Table} from 'antd';
import classnames from 'classnames';
import Modal from '../../../../a-components/modal';
import Confirm from '../../../../a-components/confirm';
import './index.scss';
interface dataT {
    status: number | string,
    price: string,
    key: string,
    priceType: string,
    name: string,
    result: string,
    creat_time: string,
    img: string
}
const Fdata: dataT[] = [{
    status: 1,
    price: '100',
    key: '1',
    priceType: '一口价',
    name: '12345',
    result: '失败了是因为价格原因',
    creat_time: '2020/08/09 23:45:23',
    img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2839262297,1897381364&fm=26&gp=0.jpg'
}, {
    status: 2,
    price: '100',
    key: '2',
    priceType: '一口价',
    name: '12345',
    result: '失败了是因为价格原因',
    creat_time: '2020/08/09 23:45:23',
    img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2839262297,1897381364&fm=26&gp=0.jpg'
}, {
    status: 3,
    price: '100',
    key: '3',
    name: '12345',
    result: '失败了是因为价格原因',
    creat_time: '2020/08/09 23:45:23',
    priceType: '一口价',
    img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2839262297,1897381364&fm=26&gp=0.jpg'
}]
const Index = () => {
    const [visible, setVisible] = useState(false);
    const columns = useMemo((): {}[] => [{
        title: '商品信息',
        dataIndex: 'info',
        key: '1',
        align: 'left',
        render: (row: any, record: dataT) => {
            return (
                <div className="align_center">
                    <img src={record.img} style={{width: 80, height: 80, marginRight: 18}} alt=""/>
                    <p style={{color: '#333333'}}>{record.name}</p>
                </div>
            )
        }
    }, {
        title: '创建时间',
        dataIndex: 'creat_time',
        key: '2',
        align: 'center',
    }, {
        title: '价格类型',
        dataIndex: 'priceType',
        key: '3',
        align: 'center',
    }, {
        title: '价格区间',
        dataIndex: 'price',
        key: '5',
        align: 'center',
    }, {
        title: '审核状态',
        dataIndex: 'status',
        key: '4',
        align: 'center',
        render: (status: number) => (
            <div className={classnames(`status_${status} table_status`)}>{status}</div>
        )
    }, {
        title: '审核结果',
        dataIndex: 'result',
        key: '6',
        align: 'center',
    }, {
        title: '操作',
        key: '7',
        align: 'center',
        render: (row: any, record: dataT) => {
            return (
                <div className="sort_operat_btns" >
                    {
                        record.status === 1 && <Button onClick={() => setVisible(true)} type="link">更新商品</Button>
                    }
                    {
                        (record.status === 2 ||record.status === 3) && <Button onClick={() => {}} type="link">重新审核</Button>
                    }
                    {
                        record.status === 2 && <Confirm 
                                                    onConfirm={() => {}} 
                                                    context={<Button type="link">删除</Button>}/>
                    }
                </div>
            )
        }
    }], []);
    const handleOk = useCallback(() => {
        setVisible(false)
    }, []);
    const handleCancel = useCallback(() => {
        setVisible(false)
    }, []);
    const getContent = useMemo(() => (
        <div className="live_shop_modal_con flex_column_center">
            <img src={require('../../../../assets/images/success.png')} alt=""/>
            <p>{1 ? '同步成功，共同步10件商品' : '提交成功'}</p>
        </div>
    ), []);
    const useModal = useMemo(() => {
        if(!visible) return '';
        return <Modal 
            handleOk={handleOk}
            classname="live_shop_modal"
            handleCancel={handleCancel}
            content={getContent}
        />
    }, [handleOk, handleCancel, visible, getContent]);
    return <div className="modules" style={{marginTop: 18, padding: '18px 18px 30px'}}>
        <Table
            className="market_liveshop_table default_table"
            columns={columns}
            dataSource={Fdata}
        />
        {useModal}
    </div>
}

export default Index;