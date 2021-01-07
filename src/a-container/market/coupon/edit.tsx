import React, {Fragment, useState, useMemo} from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import { Form, Button, Input, Radio, DatePicker, Select } from 'antd';
import GoodsList from './components/goods-list';
import {couponTypes, couponDates} from './components/types';
import './components/index.scss';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const { Option } = Select;


const Index = () => {
    const [goodsType, setGoodsType] = useState<string>('a');  //商品类型
    const [couponType, setCouponType] = useState<any>(undefined);  //劵类型
    const [couponDate, setCouponDate] = useState<any>(undefined);  //劵有效期
    const handleType = (e: any) => {
        setGoodsType(e.target.value);
    }
    const handelCouponType = (val: string) => {
        setCouponType(val)
    }
    const useGoodsList = useMemo(() => <GoodsList />, []);
    const usCouponType = useMemo(() => {
        switch (couponType) {
            case couponTypes['MJ']:
                return <Fragment>
                    <span style={{color: '#0E1726', marginRight: 12}}>满</span>
                    <Input style={{width: 160}} suffix="元"/>
                    <span style={{color: '#0E1726', marginRight: 12, marginLeft: 12}}>减</span>
                    <Input style={{width: 160}} suffix="元"/>
                </Fragment>;
            case couponTypes['ZJ']:
                return <Fragment>
                    <span style={{color: '#0E1726', marginRight: 12}}>直减</span>
                    <Input style={{width: 160}} suffix="元"/>
                </Fragment>;
            case couponTypes['TJ']:
                return <Fragment>
                    <span style={{color: '#0E1726', marginRight: 12}}>满</span>
                    <Input style={{width: 160}} suffix="元"/>
                    <span style={{color: '#0E1726', marginRight: 12, marginLeft: 12}}>打</span>
                    <Input style={{width: 160}} suffix="折"/>
                </Fragment>;
            case couponTypes['TY']:
                return <Input style={{width: 160}} suffix="折"/>;
            default:
                return '';
        }
    }, [couponType])
    const handelCouponDate = (val: string) => {
        setCouponDate(val)
    }
    const usCouponDate = useMemo(() => {
        switch (couponDate) {
            case couponDates.XD:
                return <Fragment>
                    <DatePicker 
                        style={{width: 160}} 
                        placeholder="开始时间"
                        locale={locale}/>
                    <span style={{margin: '0 12px', color: '#0E1726'}}>至</span>
                    <DatePicker 
                        style={{width: 160}} 
                        placeholder="结束时间"
                        locale={locale}/>
                </Fragment>;
            case couponDates.US:
                return <Input style={{width: 160}} suffix="天"/>;
            default:
                return '';
        }
    }, [couponDate])
    return <div className="padding_22_18 default_form">
        {useBread()}
        <div className="modules market_coupon_edit">
            <h2>券基本信息</h2>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                >
                <Form.Item label="券名称">
                    <Input style={{width: 270}} placeholder="请输入优惠券名称"/>
                </Form.Item>
                <Form.Item label="商品类型">
                    <Radio.Group onChange={handleType} value={goodsType}>
                        <Radio value="a" style={{marginRight: 40}}>全场通用</Radio>
                        <Radio value="b">指定商品</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="劵类型">
                    <div className="coupon_type align_center">
                        <Select 
                            placeholder="请输入优惠券类型" 
                            value={couponType} 
                            onChange={handelCouponType}
                            style={{ width: 160, marginRight: 30 }}>
                            <Option value={couponTypes.MJ}>满减券</Option>
                            <Option value={couponTypes.ZJ}>直减券</Option>
                            <Option value={couponTypes.TJ}>条件折扣券</Option>
                            <Option value={couponTypes.TY}>统一折扣券</Option>
                        </Select>
                        {usCouponType}
                    </div>
                </Form.Item>
                <Form.Item label="领券时间">
                    <div>
                        <DatePicker 
                            style={{width: 160}} 
                            placeholder="开始时间"
                            locale={locale}/>
                        <span style={{margin: '0 12px', color: '#0E1726'}}>至</span>
                        <DatePicker 
                            style={{width: 160}} 
                            placeholder="结束时间"
                            locale={locale}/>
                    </div>
                </Form.Item>
                <Form.Item label="劵有效期">
                    <div className="coupon_date align_center">
                        <Select 
                            placeholder="请输入优惠券类型" 
                            value={couponDate} 
                            onChange={handelCouponDate}
                            style={{ width: 160, marginRight: 30 }}>
                            <Option value={couponDates.XD}>限定日期有效</Option>
                            <Option value={couponDates.US}>领券n天有效</Option>
                        </Select>
                        {usCouponDate}
                    </div>
                </Form.Item>
                <Form.Item label="发放张数">
                    <div className="coupon_sen_num flex">
                        <div>
                            <Input style={{width: 270}} placeholder="请输入优惠券总数" suffix="张"/>
                        </div>
                        <div className="align_center">
                            <span style={{color: '#0E1726', marginRight: 12}}>每人限领</span>
                            <Input style={{width: 270}} placeholder="请输入优惠券名称" suffix="张"/>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item label="获取方式">
                    <Radio.Group>
                        <Radio value="a" style={{marginRight: 40}}>主动获取</Radio>
                        <Radio value="b">全员发放</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
            {
                goodsType === 'b' ? <Fragment>
                    <div className="align_center" style={{
                        justifyContent: 'space-between',
                        marginBottom: 18
                    }}>
                        <div className="align_center">
                            <h2 style={{marginRight: 12, marginBottom: 0}}>适用商品</h2>
                            <span style={{fontSize: 12, color: '#9FA2A8'}}>已选1件</span>
                        </div>
                        <Button style={{width: 96}} type="primary" ghost>
                            新增商品
                        </Button>
                    </div>
                    {useGoodsList}
                </Fragment> : ''
            }
            <div style={{marginLeft: 136}}>
                <Button style={{width: 88, marginRight: 12}} className="ghost_btn" type="primary" ghost>
                    取消
                </Button>
                <Button style={{width: 88}} type="primary">
                    保存
                </Button>
            </div>
        </div>
    </div>
}

export default Index;