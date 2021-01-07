import React, { FC, useImperativeHandle, useMemo } from 'react';
import { Button, Input } from 'antd';
import Table from '../../../../a-components/table';
import Image from '../../../../a-components/image';
import './index.scss';

interface dataT {
    img: string,
    name: string,
    key: number,
    cliNum: number,
    cliPeo: number
}

const Fdata: dataT[] = [{
    img: '',
    name: 'name',
    cliNum: 100,
    cliPeo: 4,
    key: 1
}, {
    img: '',
    name: 'name',
    cliNum: 100,
    cliPeo: 4,
    key: 2
}, {
    img: '',
    name: 'name',
    cliNum: 100,
    cliPeo: 4,
    key: 3
}]

const Index: FC<{ childRef: any }> = ({ childRef }) => {
    useImperativeHandle(childRef, () => ({
        getData: () => {
            return ({
                name: '1234'
            })
        }
    }));
    const columns = useMemo((): {}[] => [{
        title: '序号',
        key: '1',
        align: 'center',
        width: '20%',
        render: (row: any, record: dataT, idx: number) => idx + 1
    }, {
        title: '商品信息',
        key: '2',
        align: 'left',
        width: "30%",
        render: (row: any, record: dataT) => {
            return (
                <div className="live_manage_step_info align_center">
                    <Image width={80} height={80}/>
                    <h4 style={{marginLeft: 18}}>{ record.name }</h4>
                </div>
            )
        }
    }, {
        title: '点击次数',
        dataIndex: 'cliNum',
        key: '3',
        align: 'center'
    }, {
        title: '点击人数',
        dataIndex: 'cliPeo',
        key: '4',
        align: 'center'
    }, {
        title: '操作',
        align: 'center',
        render: (row: any, record: dataT) => <Button onClick={() => {}} type="link">推送</Button>
    }], []);
    const useTable = useMemo(() => <Table classname="livemanage_step_table" columns={columns} data={Fdata}/>, [columns]);
    return <div className="live_manage_step3">
        <h4>推送控制</h4>
        <div className="params">
            <div>
                <label className="area_head">商品</label>
                <Input placeholder="查找商品名称" style={{ width: 270 }}/>
            </div>
            <div>
                <Button type="primary" style={{width: 96}} ghost>商品排序</Button>
                <Button type="primary" style={{width: 96, marginLeft: 30}} ghost>导入商品</Button>
            </div>
        </div>
        { useTable }
    </div>
}

export default Index;