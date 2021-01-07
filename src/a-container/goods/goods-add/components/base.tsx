import React, {useMemo} from 'react';
import {ElUpload, PublicBtn} from '../../../../a-components/upload/main';
import { Form, Input, Button, Radio, Select, Checkbox } from 'antd';
import '../../../../styles/form.scss';
import './index.scss';
const { TextArea } = Input;
const { Option } = Select;
const Index = () => {
    const UploadVideoComp = useMemo(() => (
        <ElUpload changeImg={() => {}} component={
            <div className="base_video_upload">
                <img src={require('../../../../assets/images/upload-video.png')} alt=""/>
            </div>
        }/>
    ), []);
    const PublicBtnComp = useMemo(() => <PublicBtn />, [])
    const UploadImgComp = useMemo(() => (
        <ElUpload changeImg={() => {}} component={PublicBtnComp}/>
    ), [PublicBtnComp]);
    return <div className="modules default_form goods_add_form">
        <Form
            name="basic"
            initialValues={{ remember: true }}
            >
            <Form.Item
                label="商品名称"
                name="name"
                className="p_l_84"
                rules={[{ required: true, message: '请输入商品名称' }]}
            >
                <Input placeholder="请输入商品名称" className="inp_width_874"/>
            </Form.Item>

            <Form.Item
                label="排序"
                name="sort"
                className="p_l_84"
            >
                <Input className="inp_width_874"/>
            </Form.Item>

            <Form.Item
                label="商品主视频"
                className="p_l_84"
            >
                {UploadVideoComp}
            </Form.Item>

            <Form.Item
                label="商品图片"
                className="p_l_84"
            >
                <ul className="base_upload_imgs">
                    <li>
                        {UploadImgComp}
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Form.Item>

            <Form.Item
                label="副标题"
                name="subTitle"
                className="p_l_84"
                extra="副标题的长度请控制在100字以内"
            >
                <TextArea className="inp_width_874" placeholder="请输入副标题"/>
            </Form.Item>

            <Form.Item
                label="商品短标题"
                name="sortTitle"
                className="p_l_84"
                extra="商品短标题用于快递打印，以及小型热敏打印机打印"
            >
                <Input className="inp_width_874" placeholder="请输入商品短标题"/>
            </Form.Item>

            <Form.Item 
                name="shopStyle" 
                className="p_l_84"
                label="商品类型">
                <Radio.Group className="form_base_radio">
                    <Radio value="a">实物商品</Radio>
                    <Radio value="b">虚拟商品</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item 
                className="p_l_84"
                label="商品分类">
                <div className="goods_sort">
                    <Select
                        placeholder="请选择"
                        allowClear
                        style={{width: 270}}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                    <div style={{width: 70, display: 'inline-block'}}></div>
                    <Select
                        placeholder="请选择"
                        allowClear
                        style={{width: 270}}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </div>
            </Form.Item>

            <Form.Item 
                className="p_l_84"
                label="是否支持货到付款">
                <Checkbox className="goods_base_checked">支持</Checkbox>
            </Form.Item>

            <Form.Item
                label="预警库存"
                name="yjkc"
                className="p_l_84"
            >
                <Input className="inp_width_874" placeholder="请输入预警库存"/>
            </Form.Item>

            <Form.Item
                label="自定义销量"
                name="yjkc"
                className="p_l_84"
            >
                <div className="diy_sale">
                    <Input placeholder="请输入自定义销量" style={{width: 270}}/>
                    <p>是否显示自定义销量</p>
                    <Checkbox className="goods_base_checked">显示</Checkbox>
                </div>
            </Form.Item>
            <Form.Item
                className="p_l_84"
                label="物流模版">
                <div className="goods_sort">
                    <Select
                        placeholder="请选择"
                        allowClear
                        style={{width: 270}}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </div>
            </Form.Item>

            <Form.Item className="submit_btn">
                <Button type="primary" htmlType="submit">
                    保存
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default Index;