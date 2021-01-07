import React, { Fragment, FC, useImperativeHandle, useState, useMemo } from 'react';
import { Form, Input, Radio, Button, Select } from 'antd';
import '../index.scss';

const YfTempByNum = () => {
    return <Fragment>
        <Input style={{ width: 68, marginRight: 12 }}/>
        <span style={{color: '#0E1726', marginRight: 12}}>件内</span>
        <Input style={{ width: 68, marginRight: 12 }}/>
        <span style={{color: '#0E1726', marginRight: 12}}>元，每增加</span>
        <Input style={{ width: 68, marginRight: 12 }}/>
        <span style={{color: '#0E1726', marginRight: 12}}>件，增加</span>
        <Input style={{ width: 68, marginRight: 12 }}/>
        <span style={{color: '#0E1726'}}>元</span>
    </Fragment>
}

const YfTempByeight = () => {
    return <Fragment>
        <Input style={{ width: 68, marginRight: 12 }}/>
        <span style={{color: '#0E1726', marginRight: 12}}>kg内</span>
        <Input style={{ width: 68, marginRight: 12 }}/>
        <span style={{color: '#0E1726', marginRight: 12}}>元，每增加</span>
        <Input style={{ width: 68, marginRight: 12 }}/>
        <span style={{color: '#0E1726', marginRight: 12}}>kg，增加</span>
        <Input style={{ width: 68, marginRight: 12 }}/>
        <span style={{color: '#0E1726'}}>元</span>
    </Fragment>
}

const options: any[] = [];
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    value,
    disabled: i === 10,
  });
}

const Index: FC<{handleRef: any}> = ({handleRef}) => {
    const [form] = Form.useForm();
    const [ysValue, setYsValue] = useState<string>('a');   //邮费设置
    const [jjValue, setJJValue] = useState<string>('a');   //计价方式
    const [addnums, setaddnums] = useState<any[]>([]);
    form.validateFields(['tempName']);
    useImperativeHandle(handleRef, () => ({
        checkHandle: async () => {
            try {
                const values = await form.validateFields();
                console.log('Success:', values);
            } catch (errorInfo) {
                console.log('Failed:', errorInfo);
            }
        }
    }))
    const ysHandelChange = ({value}: {value?: string}) => {
        setYsValue(value || 'a');
    }
    const jjHandelChange = ({value}: {value?: string}) => {
        setJJValue(value || 'a');
    }
    const handleAddNums = () => {
        const newNums = [...addnums]
        newNums.push('')
        setaddnums(newNums)
    }
    const useTemp = useMemo(() => jjValue === 'a' ? <YfTempByNum /> : <YfTempByeight />, [jjValue])
    return <Fragment> 
        <Form
            name="basic"
            className="default_form order_template_form"
            style={{marginTop: '20px'}}
            form={form}
            initialValues={{ ys: ysValue, jjType: jjValue }}
        >
            <Form.Item
                label="模版名称"
                name="tempName"
                rules={[{ required: true, message: '请填写模版名称' }]}
                className="p_l_84"
            >
                <Input placeholder="请输入模版名称" className="inp_width_874 inp_width_auto"/>
            </Form.Item>
            <Form.Item name="ys" label="邮费设置">
                <Radio.Group onChange={({target}) => ysHandelChange(target)}>
                    <Radio value="a" style={{ marginRight: 22 }}>包邮</Radio>
                    <Radio value="b">自定义邮费</Radio>
                </Radio.Group>
            </Form.Item>
            {
                ysValue === "b" ? <Fragment>
                    <Form.Item label="邮费计价" className="name_label">
                        
                    </Form.Item>
                    <Form.Item name="jjType" label="计价方式">
                        <Radio.Group onChange={({target}) => jjHandelChange(target)}>
                            <Radio value="a" style={{ marginRight: 22 }}>按件</Radio>
                            <Radio value="b">按重量</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="运送方式">
                        <span>快递</span>
                    </Form.Item>
                    <Form.Item label="默认运费">
                        { useTemp }
                    </Form.Item>
                    {
                        addnums.map((item, idx) => <Form.Item key={idx} label="指定地区运费">
                            <div className="adds_nums_list">
                                <Select
                                    mode="multiple"
                                    style={{ width: 300, marginBottom: 10 }}
                                    placeholder="请选择指定地区"
                                    options={options}
                                />
                                <br />
                                {
                                    useTemp
                                }
                                <span className="del">删除</span>
                            </div>
                        </Form.Item>)
                    }
                </Fragment> : ''
            }
            <Form.Item>
                <Button style={{width: 157}} className="add_yf" onClick={handleAddNums}>
                     添加指定地区运费
                </Button>
            </Form.Item>
        </Form>
    </Fragment>
}

export default Index;