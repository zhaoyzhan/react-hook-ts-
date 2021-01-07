import React from 'react';
import './pannel.css';
const Panel = (prop:any) => {
    return ( 
        <div className="pannel-item">
            <h3 className="title">订单<span className="tips">更新于 2020/08/09 20:36</span></h3>
            <ul className="list">
                <li>
                    <div className="tit">总成交订单数</div>
                    <div className="number">0</div>
                    <div className="tagging">{false?"昨日增加":""}</div>
                </li>
                <li>
                    <div className="tit">总成交金额</div>
                    {
                        false ? 
                        <div className="number">0</div> : 
                        <div className="number money"><span className="unit">¥ </span>0.00</div>
                    }
                    
                    <div className="tagging">昨日增加<span> ¥0.00</span></div>
                </li>
                <li>
                    <div className="tit">总成交金额</div>
                    <div className="number">0</div>
                    <div className="tagging">昨日增加<span> ¥0.00</span></div>
                </li>
            </ul>
        </div>
     );
}
 
export default Panel;