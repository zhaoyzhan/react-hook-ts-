import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import {ElUpload} from '../../../../a-components/upload/main';
import './index.scss';
import '../../../../styles/form.scss';
import Modal from '../../../../a-components/modal';

const Index = () => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false)
    const [fileName, setFileName] = useState('')

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const fileInfo = (file: any) => {
        setFileName(file.name)
        setVisible(false)
    }
    const handleUpload = () => {
        setVisible(true)
    }
    const headComp = useMemo(() => (
        <ElUpload type="dragger" fileInfo={fileInfo} component={<div className="dragger_box">
            <p>把文件拖动到这里</p>
            <span>或者</span>
            <div>在本地文件中浏览</div>
        </div>} />
    ), [])
    const handleOk = useCallback(() => {
        setVisible(false)
    }, [])
    const handleCancel = useCallback(() => {
        setVisible(false)
    }, [])
    return (
        <div className="modules set_def_form p_form default_form">
            <Form
                name="basic"
                form={form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="微信支付证书"
                    name="headPic"
                    className="p_l_84 head_pic"
                >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className="upload_img">
                            <span onClick={handleUpload}>点击上传</span>
                        </div>
                        <span style={{marginLeft: '10px', color: '#333'}}>{fileName}</span>
                    </div>
                </Form.Item>
                <Form.Item
                    label="商户名称"
                    name="shopName"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入商户名称' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="微信分配的小程序ID"
                    name="appId"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入微信分配的小程序ID' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="微信支付分配的商户号"
                    name="shopNumber"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入微信支付分配的商户号' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="微信平台秘钥信息"
                    name="cipher"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入微信平台秘钥信息' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                <Form.Item
                    label="接入方应用回调地址"
                    name="backUrl"
                    className="p_l_84"
                    rules={[{ required: true, message: '请输入接入方应用回调地址' }]}
                >
                    <Input className="inp_width_874"/>
                </Form.Item>
                <Form.Item className="submit_btn">
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
            <Modal 
                visible={visible} 
                content={headComp}
                title="上传文件"
                handleOk={handleOk}
                handleCancel={handleCancel}
                showFooter={false}
                classname="set_def_form_modal"
            />
        </div>
    )
}

export default Index;