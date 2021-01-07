
import React from 'react';
import {
	Link
} from 'react-router-dom';
import {Button, Input, DatePicker} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.scss';
const labelStyle = {width: 70}
const dateStyle = {width: 160}
const Index = () => {
    const dateChange = (type: string, date: any, dateString: string) => {
        console.log('lkkkk----', date, dateString, moment().endOf('day'))
    }
    return <div className="modules align_center market_coupon_params">
        <div>
            <div style={{marginBottom: 18}} className="align_center">
                <label className="area_head" style={labelStyle}>优惠券名称</label>
                <Input style={{width: 270}}/>
                <Button style={{ width: 68, margin: '0 20px 0 30px' }} type="primary">查询</Button>
                <Button style={{width: 68}} className="ghost_btn" type="primary" ghost>清除</Button>
            </div>
            <div className="align_center">
                <label className="area_head" style={labelStyle}>创建时间</label>
                <DatePicker 
                    style={dateStyle} 
                    locale={locale} 
                    onChange={(date, dateString) => dateChange('startType', date, dateString)} />
                <span style={{margin: '0 12px', color: '#0E1726'}}>至</span>
                <DatePicker 
                    style={dateStyle} 
                    locale={locale} 
                    onChange={(date, dateString) => dateChange('startType', date, dateString)} />
            </div>
        </div>
        <Link to="/market/editCoupon">
            <Button style={{width: 110}} type="primary">创建优惠卷</Button>
        </Link>
    </div>
}

export default Index;