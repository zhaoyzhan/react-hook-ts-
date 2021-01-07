import React, { useState, useMemo, useCallback } from 'react';
import {formTypes} from './types';
import Modals from './modals';
import './index.scss';
interface listS {
    name: string,
    value: string
}
interface itemS {
    name: string, 
    img?: string, 
    forTo?: string,
    con?: string,
    list?: listS[]
}
const params = [{
    type: 'title',
    name: '基础信息'
}, {
    type: 'img',
    name: '商店头像',
    forTo: formTypes.headPic,
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg'
},{
    type: 'content',
    name: '商店名称',
    forTo: formTypes.shopName,
    con: '微动好物馆'
}, {
    type: 'content',
    name: '商店简介',
    forTo: formTypes.shopDesc,
    con: '微动好物'
}, {
    type: 'content',
    name: '商店介绍',
    forTo: formTypes.shopShow,
    con: '微动好物馆，只有您想不到的，没有我们做不到的。'
}, {
    type: 'content',
    name: '公司地址',
    forTo: formTypes.adress,
    con: '北京 北京市 昌平区 回龙观腾讯众创空间4层'
}, {
    type: 'title',
    name: '默认退货信息'
}, {
    type: 'back_info',
    forTo: formTypes.backInfo,
    list: [{
        name: '地址',
        value: '北京 北京市 昌平区 回龙观腾讯众创空间4层'
    }, {
        name: '联系人',
        value: '于岩'
    }, {
        name: '联系电话',
        value: '18519151116'
    }]
}, {
    type: 'title',
    name: '基础信息'
}, {
    type: 'content',
    name: 'AppID(小程序ID)',
    con: 'wx9c1fd86fcd6573a0'
}, {
    type: 'content',
    name: '原始ID',
    con: 'gh_f146d061dac0'
}]

const Index = () => {
    const [compType, setType] = useState('')
    const [visible, setVisible] = useState(false)
    const handleClick = (type: string) => {
        setType(type)
        setVisible(true)
    }
    const getTitle = (name: string, index: number) => (
        <li className="li_head" key={index}>
            {name}
        </li>  
    );
    const getImgItem = ({name, img, forTo = ''}: itemS, index: number) => (
        <li className="li_content" key={index}>
            <label>{name}</label>
            <div className="box">
                <img src={img} alt=""/>
                <span className="btn" onClick={() => handleClick(forTo)}>修改</span>
            </div>
        </li>
    );
    const getContent = ({name, con, forTo}: itemS, index: number) => (
        <li className="li_content" key={index}>
            <label>{name}</label>
            <div className="box">
                <span className="con">{con}</span>
                {
                    forTo ? <span className="btn" onClick={() => handleClick(forTo)}>修改</span> : ''
                }
            </div>
        </li>
    );
    const getBackInfo = ({list = [], forTo = ''}: itemS, index: number) => (
        <li className="li_content back_info" key={index}>
            <div className="back_item">
                {
                    list.map(({name, value}: listS, idx: number) => (
                        <p key={idx}>
                            <label>{name}</label>
                            <span className="con">{value}</span>
                        </p>
                    ))
                }
            </div>
            <span className="btn" onClick={() => handleClick(forTo)}>修改</span>
        </li>
    )
    const resetVisible = useCallback(() => {
        setVisible(false)
    }, [])
    //组件
    const Modal = useMemo(() => <Modals type={compType} resetVisible={resetVisible} visible={visible}/>, [compType, resetVisible, visible])
    return (
        <div className="modules empty_form">
            <ul>
                {
                    params.map((item: any, index: number) => {
                        if(item.type === 'title') {
                            return getTitle(item.name, index)
                        } else if(item.type === 'img') {
                            return getImgItem(item, index)
                        } else if(item.type === 'content') {
                            return getContent(item, index)
                        } else if(item.type === 'back_info') {
                            return getBackInfo(item, index)
                        } else {
                            return ''
                        }
                    })
                }
            </ul>
            {
                Modal
            }
        </div>
    );
}

export default Index;