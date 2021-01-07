import React, {useMemo, useCallback} from 'react';
import {Button, Table} from 'antd';
import {
	Link
} from 'react-router-dom';
import Confirm from '../../../../a-components/confirm/index';
import classnames from 'classnames';
import './index.scss';
const Fdata: {}[] = [
    {
        id: 1,
        code: '122121',
        type: 1,
        status: 1,
        used: '123',
        qd: '渠道',
        last: '剩余/发放',
        isuse: '有效使用',
        name: 'shop1',
        key: '1',
    }, {
        id: 2,
        code: '122121',
        type: 1,
        status: 2,
        used: '123',
        qd: '渠道',
        last: '剩余/发放',
        isuse: '有效使用',
        name: 'shop1',
        key: '2',
    }, {
        id: 3,
        code: '122121',
        type: 1,
        status: 3,
        used: '123',
        qd: '渠道',
        last: '剩余/发放',
        isuse: '有效使用',
        name: 'shop1',
        key: '3',
    }
]
const Index = () => {
    const handleOpera = useCallback(() => {

    }, [])
    const confirm = useCallback(() => {
        console.log('sure')
    }, [])
    const handleDel = useCallback(() => <Confirm 
        onConfirm={confirm}
        context={<Button type="link">删除</Button>}/>, 
    [confirm])
    const columns: {}[] = useMemo(() => [
        {
            title: '优惠券名称',
            dataIndex: 'name',
            key: '1',
            align: 'center',
        }, {
            title: '优惠券编码',
            dataIndex: 'code',
            key: '2',
            align: 'center',
        }, {
            title: '券类型',
            dataIndex: 'type',
            key: '3',
            align: 'center',
        }, {
            title: '券状态',
            dataIndex: 'status',
            key: '4',
            align: 'center',
            render: (status: number) => (
                <div className={classnames(`status_${status} table_status`)}>{status}</div>
            )
        }, {
            title: '券有效期',
            dataIndex: 'used',
            key: '5',
            align: 'center',
        }, {
            title: '推广渠道',
            dataIndex: 'qd',
            key: '6',
            align: 'center',
        }, {
            title: '剩余/发放',
            dataIndex: 'last',
            key: '7',
            align: 'center',
        }, {
            title: '有效使用',
            dataIndex: 'isuse',
            key: '8',
            align: 'center',
        }, {
            title: '操作',
            key: '9',
            align: 'center',
            render: (row: any, record: any) => {
                return (
                    <div className="sort_operat_btns" >
                        <Link to="/market/editCoupon">
                            <Button onClick={() => handleOpera()} type="link">编辑</Button>
                        </Link>
                        <Button onClick={() => handleOpera()} type="link">生效</Button>
                        {handleDel()}
                    </div>
                )
            }
        },
    ], [handleOpera, handleDel])
    return <div className="modules">
        <Table
            className="market_coupon_table default_table"
            columns={columns}
            dataSource={Fdata}
        />
        {/* {Modal} */}
    </div>
}

export default Index;