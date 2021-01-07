import React from 'react';
import useBread from "../../../a-components/breadcrumbs/use-bread";
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const Index = () => {
    const [form] = Form.useForm();
    return <div className="padding_22_18">
        { useBread() }
        <div className="modules">
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#313030', lineHeight: '21px', marginBottom: 20 }}>修改密码</h3>
            <Form
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
                    label="旧密码"
                    name="oldpass"
                    rules={[{ required: true, message: '请输入旧密码' }]}
                    className="p_l_84 after"
                >
                    <Input type="password" placeholder="请输入旧密码" className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="新密码"
                    name="newpass"
                    rules={[{ required: true, message: '请输入新密码' }]}
                    className="p_l_84 after"
                >
                    <Input type="password" placeholder="请输入密码，8-20位字符，包含字母活数字" className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="重复新密码"
                    name="renewpass"
                    rules={[{ required: true, message: '请重复输入密码' }]}
                    className="p_l_84 after"
                >
                    <Input type="password" placeholder="请重复输入密码" className="inp_width_874"/>
                </Form.Item>
                <Form.Item>
                    <Link to="/setting/secure">
                        <Button style={{width: 88, marginLeft: 113, marginRight: 12}} className="ghost_btn" type="primary" ghost>取消</Button>
                    </Link>
                    <Button style={{width: 88}} htmlType="submit" type="primary">确定</Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}

export default Index;