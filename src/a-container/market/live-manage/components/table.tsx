import React, { useMemo, Fragment } from 'react';
import { Button } from 'antd';
import Table from '../../../../a-components/table';
import classnames from 'classnames';
import Image from '../../../../a-components/image';
import './index.scss';
interface dataT {
    recent: string,
    status: number,
    img: string,
    name: string,
    number: string,
    author: string,
    key: number
}

const Fdata: dataT[] = [{
    recent: 'time',
    status: 1,
    img: '',
    name: 'name',
    number: 'number',
    author: 'author',
    key: 1
}, {
    recent: 'time',
    status: 2,
    img: '',
    name: 'name',
    number: 'number',
    author: 'author',
    key: 2
}, {
    recent: 'time',
    status: 1,
    img: '',
    name: 'name',
    number: 'number',
    author: 'author',
    key: 3
}]

const Index = () => {
    const columns = useMemo((): {}[] => [{
        title: '最近开播',
        key: '1',
        align: 'center',
        render: (row: any, record: dataT) => {
            return (
                <Fragment>
                    <p>qwee</p>
                    <p>qwee</p>
                </Fragment>
            )
        }
    }, {
        title: '直播间信息',
        key: '2',
        align: 'left',
        width: "40%",
        render: (row: any, record: dataT) => {
            return (
                <div className="live_manage_table_info flex">
                    <Image width={80} height={80}/>
                    <div style={{ marginLeft: 18 }}>
                        <h4>{ record.name }</h4>
                        <p>房间号：{record.number}</p>
                        <p>主播：{record.author}</p>
                    </div>
                </div>
            )
        }
    }, {
        title: '直播状态',
        dataIndex: 'status',
        key: '3',
        align: 'center',
        render: (status: number) => (
            <div className={classnames(`status_${status} table_status`)}>{status}</div>
        )
    }, {
        title: '操作',
        align: 'center',
        render: (row: any, record: dataT) => {
            return (
                <div className="sort_operat_btns" >
                    {
                        (record.status === 1 && <Button onClick={() => {}} type="link">直播添加商品</Button>) 
                            || <Button onClick={() => {}} type="link">控制台</Button>
                    }
                    <Button onClick={() => {}} type="link">开播码</Button>
                </div>
            )
        }
    }], []);
    const useTable = useMemo(() => <Table classname="market_livemanage_table" columns={columns} data={Fdata}/>, [columns])
    return <div className="modules">
        {useTable}
    </div>
}

export default Index;