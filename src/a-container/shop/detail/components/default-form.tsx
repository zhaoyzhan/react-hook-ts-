import React, {useState, useMemo, useCallback} from 'react';
import { Form, Input, Button, Select } from 'antd';
import './index.scss';
import '../../../../styles/form.scss';
import Upload from '../../../../a-components/upload';
const { Option } = Select;

const Index = () => {
    const [form] = Form.useForm();
    const [headImg, setImg] = useState('')
    const onFinish = (values: any) => {
        console.log('Success:', values, headImg);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onGenderChange = (e: string) => {
        console.log('ujyhtgr')
    }
    const changeImg = useCallback((img: string) => setImg(img), [])
    //组件
    const UploadComp = useMemo(() => <Upload img={headImg} changeImg={changeImg}/>, [headImg, changeImg])
    return (
        <div className="modules default_form p_form">
            <Form
                name="basic"
                form={form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {/* 基础信息 */}
                <Form.Item
                    label="基础信息"
                    className="label_for_name"
                ></Form.Item>
                <Form.Item
                    label="商店头像"
                    name="headPic"
                    className="p_l_84 head_pic"
                    valuePropName="fileList"
                >
                    {UploadComp}
                </Form.Item>
                <Form.Item
                    label="商店名称"
                    name="shopname"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入商店名称' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>

                <Form.Item
                    label="商店简称"
                    name="jc"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入商店简称' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                <Form.Item 
                    className="p_l_84 add_inp"
                    label="公司地址">
                    <Form.Item
                        name="address"
                        noStyle
                        className="sel_address"
                        rules={[{ required: true, message: '请选择公司地址' }]}
                    >
                        <Select
                            placeholder="请选择"
                            onChange={onGenderChange}
                            allowClear
                            className="address_sel"
                            style={{width: '200px'}}
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="公司详细地址"
                        name="area"
                        className="p_l_84 default_area">
                        <Input style={{width: '538px'}} className="inp_width_874"/>
                    </Form.Item>
                </Form.Item>
                {/* 退货信息 */}
                <Form.Item
                    label="默认退货信息"
                    className="label_for_name"
                ></Form.Item>
                <Form.Item 
                    className="p_l_84 add_inp"
                    label="地址">
                    <Form.Item
                        name="backaddress"
                        noStyle
                        className="sel_address"
                        rules={[{ required: true, message: '请选择退货地址' }]}
                    >
                        <Select
                            placeholder="请选择"
                            onChange={onGenderChange}
                            allowClear
                            className="address_back"
                            style={{width: '200px'}}
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="个人详细地址"
                        name="back_area"
                        className="p_l_84 default_area">
                        <Input style={{width: '538px'}} className="inp_width_874"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="联系人"
                    name="people"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入联系人' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="联系地址"
                    name="people_add"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入联系地址' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                {/* 账号信息 */}
                <Form.Item
                    label="账号信息"
                    className="label_for_name"
                ></Form.Item>
                <Form.Item
                    label="AppID(小程序ID)"
                    name="app_id"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入AppID(小程序ID)' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="原始ID"
                    name="defa_id"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入原始ID' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>

                <Form.Item className="submit_btn">
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Index;