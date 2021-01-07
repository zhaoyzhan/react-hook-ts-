import React, { useRef, useState, FC } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

interface validFileT {
    message: string,
    type: any
}
const Index: FC<{ callBack?: () => void }> = ({callBack = () => {}}) => {
    const [form] = Form.useForm();
    const codeRef = useRef<any>();
    const [validFile, setvalidFile] = useState<validFileT>({
        type: 'success',
        message: '' 
    });
    const handleSure = () => {
        const value = codeRef.current.state.value;
        if(!value) {
            setvalidFile({
                type: 'error',
                message: '请输入验证码'
            })
            return;
        }
        setvalidFile({
            type: 'success',
            message: ''
        })
        callBack()
    }
    return <Form
        name="basic"
        className="default_form setting_secure_form"
        form={form}
    >
        <Form.Item
            label="手机号"
            className="p_l_84"
        >
            <p style={{ color: '#9FA2A8' }}>153****3553</p>
        </Form.Item>
        <Form.Item
            label="验证码"
            validateStatus={validFile['type'] || 'success'}
            help={validFile['message']}
            className="p_l_84 after"
            style={{marginBottom: 0}}
        >
            <Input placeholder="请输入验证码" ref={ codeRef } className="inp_width_874"/>
            <Button type="link">获取验证码</Button>
        </Form.Item>
        <Form.Item>
            <Link to="/setting/secure">
                <Button style={{width: 88, marginLeft: 113, marginRight: 12}} className="ghost_btn" type="primary" ghost>取消</Button>
            </Link>
            <Button style={{width: 88}} onClick={handleSure} type="primary">确定</Button>
        </Form.Item>
    </Form>
}

export default Index;