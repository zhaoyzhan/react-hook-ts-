import React, { FC, useImperativeHandle, useContext } from 'react';
import { Form, Input, Radio } from 'antd';
import { types, countText } from './reduce';
import './index.scss';
import '../../../../styles/form.scss';

const Index: FC<{ childRef: any }> = ({ childRef }) => {
    const [form] = Form.useForm();
    const { state, dispatch }: { state?: any, dispatch?: any } = useContext(countText);
    useImperativeHandle(childRef, () => ({
        getData: () => {
            return ({
                name: '1234'
            })
        }
    }))
    const handleInput = ({value}: {value: string}, type: string) => {
        dispatch({
            type: type,
            value
        })
    }
    return <div style={{marginBottom: 30}} className="default_form step_form_form">
        <Form
                name="basic"
                form={form}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="商品类型"
                    extra="通过“小程序直播”小程序开播"
                    className="p_l_84 head_pic"
                >
                    <Radio.Group>
                        <Radio value="a" style={{marginRight: 20}}>手机直播</Radio>
                        <Radio value="b">推流设备直播</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="直播间标题"
                    className="p_l_84 head_pic"
                >
                    <div className="step_form_content">
                        <Input 
                            defaultValue={state['name']} 
                            maxLength={17} 
                            onChange={({target}) => handleInput(target, types.NAME)} 
                            placeholder="请输入直播间标题"/>
                        <span className="input_last_fill">0/17</span>
                    </div>
                </Form.Item>
                <Form.Item
                    label="开播时间"
                    className="p_l_84 head_pic"
                >
                    
                </Form.Item>
                <Form.Item
                    label="主播昵称"
                    className="p_l_84 head_pic"
                >
                    <div className="step_form_content">
                        <Input 
                            defaultValue={state['setName']} 
                            maxLength={17} 
                            onChange={({target}) => handleInput(target, types.SETNAME)}
                            placeholder="请输入主播昵称"/>
                        <span className="input_last_fill">0/15</span>
                    </div>
                </Form.Item>
                <Form.Item
                    label="主播微信账号"
                    extra="每个直播间需要填写微信号核实主播身份，不会展示给观众。"
                    className="p_l_84 head_pic"
                >
                    <div className="step_form_content">
                        <Input placeholder="请输入微信号"/>
                    </div>
                </Form.Item>
        </Form>
    </div>
}

export default Index;