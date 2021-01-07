import React, { Fragment } from 'react';
import './index.scss';
import { Select, Input, Button } from 'antd';

const { Option } = Select;

const Index = () => {
    const handleChange = (val: string) => {

    }
    return <div className="modules service_params">
        <div className="selects align_center">
            <Fragment>
                <label>退款类型</label>
                <Select defaultValue="" style={{ width: 160, marginRight: 30 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Fragment>
            <Fragment>
                <label>退款原因</label>
                <Select defaultValue="" style={{ width: 160, marginRight: 30 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Fragment>
            <Fragment>
                <label>退款状态</label>
                <Select defaultValue="" style={{ width: 160 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Fragment>
        </div>
        <div className="input_btns align_center">
            <label>退款状态</label>
            <Input style={{ width: 270, marginRight: 30 }}/>
            <Button style={{width: 68}} type="primary">查询</Button>
            <Button className="ghost_btn" style={{ width: 68, margin: '0 20px' }} type="primary" ghost>清除</Button>
            <Button style={{width: 96}} type="primary" ghost>导出订单</Button>
        </div>
    </div>
}

export default Index;