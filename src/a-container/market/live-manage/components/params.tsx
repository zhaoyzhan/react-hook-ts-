import React from 'react';
import { Button, Input, DatePicker } from 'antd';
import {
	Link
} from 'react-router-dom';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
const dateStyle = {width: 160}
const Index = () => {
    return <div 
        style={{marginBottom: 18}}
        className="modules live_manage_params anign just_between_center">
        <div>
            <div style={{marginBottom: 18}}>
                <label className="area_head">直播名称</label>
                <Input style={{width: 270}} />
                <Button type="primary" style={{width: 68, marginLeft: 30}}>查询</Button>
                <Button type="primary" className="ghost_btn" ghost style={{width: 68, marginLeft: 20}}>清除</Button>
            </div>
            <div>
                <label className="area_head">创建时间</label>
                <DatePicker 
                    style={dateStyle} 
                    locale={locale} 
                    onChange={() => {}} />
                <span style={{margin: '0 12px', color: '#0E1726'}}>至</span>
                <DatePicker 
                    style={dateStyle} 
                    locale={locale} 
                    onChange={() => {}} />
            </div>
        </div>
        <Link to="/market/livecreate">
            <Button type="primary" style={{width: 124}}>创建优直播间</Button>
        </Link>
    </div>
}

export default Index;