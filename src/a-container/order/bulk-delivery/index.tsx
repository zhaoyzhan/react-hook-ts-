
//批量发货
import React from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Table from './component/table';
import { Button } from 'antd';
import './index.scss';

const list: {name: string, id: number}[] = [{
    name: '下载发货单模版',
    id: 1
}, {
    name: '按模版填写发货单',
    id: 2
}, {
    name: '上传发货单',
    id: 3
}, {
    name: '确认发货',
    id: 4
}]

const Index = () => {
    return <div className="padding_22_18">
        { useBread() }
        <div className="modules bulk_delivery_path" style={{ marginBottom: 18 }}>
            <div className="align_center" style={{ justifyContent: 'space-between', marginBottom: 30 }}>
                <h4 style={{ fontWeight: 500, color: '#313030', fontSize: '15px' }}>发货流程</h4>
                <Button style={{width: 96}} type="primary">
                    下载模版
                </Button>
            </div>
            <ul style={{ paddingLeft: 68 }} className="flex">
                {
                    list.map(({name, id}) => 
                        <li key={id} className="align_center">
                            <span>{ id }</span>
                            <p>{ name }</p>
                        </li>
                    )
                }
            </ul>
        </div>
        <div className="modules upload_dispatch_list">
            <h4 style={{ fontWeight: 500, color: '#313030', fontSize: '15px', marginBottom: 18 }}>发货流程</h4>
            <Table />
        </div>
    </div>
}

export default Index;