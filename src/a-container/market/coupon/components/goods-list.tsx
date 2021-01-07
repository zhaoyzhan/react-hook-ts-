import React, {useCallback} from 'react';
import {Button} from 'antd';
import Image from '../../../../a-components/image/image';
import './index.scss';

const Index = () => {
    const ImageComp = useCallback(() => (
        <Image 
            img={''} 
            classname="table_order_img"
            width={60} 
            height={60} />
    ), [])
    return <ul className="market_coupon_goods_list">
        <li className="head align_center">
            <span>商品名称</span>
            <span>操作</span>
        </li>
        <li className="item align_center">
            <div className="align_center">
                {ImageComp()}
                <div className="table_info">
                    <h4>商品名称</h4>
                    <p>
                        <span>选择尺码：通用</span>
                        <span>选择颜色：白色</span>
                    </p>
                </div>
            </div>
            <Button type="link">
                删除
            </Button>
        </li>
    </ul>
}

export default Index;