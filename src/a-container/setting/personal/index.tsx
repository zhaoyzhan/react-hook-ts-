import React, { useState, useMemo } from 'react';
import useBread from "../../../a-components/breadcrumbs/use-bread";
import { Form, Input, Radio, Button } from 'antd';
import Info from '../component/info';
import './index.scss';

interface validFileT {
    message: string,
    type: any
}
const Index = () => {
    const [form] = Form.useForm();
    const [checkF, setCheck] = useState<boolean>(false);
    const [validFile, setvalidFile] = useState<validFileT>({
        type: 'success',
        message: ''   //请进行微信验证
    });
    const checkValid = () => {
        if(!checkF) {
            setvalidFile({
                type: 'error',
                message: '请进行微信验证'
            })
        }
        return checkF;
    }
    const onSubmit = async () => {
        try {
            form.validateFields().then((res: any) => {
                setTimeout(() => {
                    if(!checkValid()) {
                        new Error("error message")
                    } 
                    console.log('yses', res)
                }, 200);
            }).catch(() => {
                setTimeout(() => {
                    checkValid();
                }, 200);
            })
        } catch (error) {
            alert('error')
        }
    }
    const useInfo = useMemo(() => <Info />, []);
    React.useEffect(() => {
        setCheck(true)
    }, [setCheck])
    return <div className="padding_22_18">
        { useBread() }
        <div className="modules">
            { useInfo }
            <Form
                name="basic"
                className="default_form setting_personal_form"
                form={form}
            >
                <Form.Item
                    label="备注姓名"
                    name="name"
                    rules={[{ required: true, message: '请填写备注姓名' }]}
                    className="p_l_84"
                >
                    <Input placeholder="请输入备注姓名" className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="绑定手机号"
                    name="tel"
                    rules={[{ required: true, message: '请填写绑定手机号' }]}
                    className="p_l_84"
                >
                    <Input placeholder="请输入绑定手机号" className="inp_width_874"/>
                </Form.Item>
                <Form.Item 
                    name="sex" 
                    rules={[{ required: true, message: '请选择性别' }]}
                    className="p_l_84"
                    label="性别">
                    <Radio.Group>
                        <Radio value="man" style={{ marginRight: 22 }}>男</Radio>
                        <Radio value="woman" style={{ marginRight: 22 }}>女</Radio>
                        <Radio value="other">保密</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item 
                    validateStatus={validFile['type'] || 'success'}
                    help={validFile['message']}
                    className="p_l_84 required_area"
                    style={{marginBottom: 0}}
                    label="微信验证">
                    <div>未绑定</div>
                </Form.Item>
                <Form.Item>
                    <Button style={{width: 88, marginLeft: 113}} type="primary" onClick={onSubmit}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}

export default Index;