import React, {useState, useCallback} from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import { Table, Button, Input } from 'antd';
import Image from '../../../a-components/image';
import Confirm from '../../../a-components/confirm';
import './index.scss';

const columns: {}[] = [
    {
        title: '商品名称',
        dataIndex: 'name',
    },
    {
        title: '商品图片',
        align: 'center',
        dataIndex: 'age',
        render: (row: any, record: any) => {
            return (
                <div className="shop_img">
                    <Image width={60} height={60}/>
                </div>
            )
        }
    },
    {
        title: '价格',
        align: 'center',
        dataIndex: 'address',
    },
    {
        title: '库存',
        align: 'center',
        dataIndex: 'kucun',
    },
    {
        title: '销量',
        align: 'center',
        dataIndex: 'sale_num',
    },
    {
        title: '修改时间',
        align: 'center',
        dataIndex: 'change_time',
    },
    {
        title: '商品状态',
        align: 'center',
        dataIndex: 'status',
    },
    {
        title: '操作',
        align: 'center',
        render: (row: any, record: any) => {
            return (
                <Button type="link">编辑</Button>
            )
        }
    }
]

const data: any[] = []
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    })
}

const Index = () => {
    const [selectKeys, setSelectKeys] = useState([])
    const onSelectChange = (val: any) => {
        setSelectKeys(val)
    }
    const useConfirm = useCallback(() => <Confirm 
        onConfirm={() => {}} 
        context={<Button type="link">删除</Button>}/>, 
    [])
    return (
        <div className="padding_22_18 goods_list">
            {useBread()}
            <div className="modules">
                <div className="operats">
                    <div className="operats_inp">
                        <Input placeholder="标题（标题关键字"/>
                        <Button type="primary">查询</Button>
                    </div>
                    <div className="operats_btns">
                        {/* <Button type="link">删除</Button> */}
                        {useConfirm()}
                        <Button type="link">上架</Button>
                        <Button type="link">下架</Button>
                        <Button type="link">新增</Button>
                    </div>
                </div>
                <Table rowSelection={{
                    selectedRowKeys: selectKeys,
                    onChange: onSelectChange
                }} 
                columns={columns} 
                dataSource={data} />
            </div>
        </div>
    )
}

export default Index;