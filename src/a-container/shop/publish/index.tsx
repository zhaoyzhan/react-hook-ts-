import React, { useState } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Model from '../../../a-components/modal/index'
import {Button} from 'antd'
import Transition from '../../../a-components/transition';
import './index.scss'


export interface IndexProps {
    
}



 
const Index: React.SFC<IndexProps> = () => {


    const [model,setModel] = useState(false)

    var cancleModel = () => setModel(!model)
  

    return (  
  
        <div className="padding_22_18">
            {useBread()}
            <div className="modules publish-wrap">
                {step()}
                {firstStep(cancleModel)}
                {publishSuccess()}
                {publishFail()}
                
                <Model title="" handleCancel={cancleModel}  visible={model} handleOk={()=>{}}  content={content()} showFooter={false}></Model>

            </div>
        </div> 
     );
}


var content = ()=>{
    return (
        <div className="publish-model">
            <p className="icon"></p>
            <p className="text">您的商品还未上新</p>
            <Button type="primary" className="publish-btn">管理商品</Button>
        </div>
    )
}


var firstStep = (cancleModel:any)=>{
  
    return (
            <>
                <div className="first-text">
                    首次发布将向微信提交审核，约需1-2天
                </div>
                <Button type="primary"  onClick={cancleModel} className="publish-btn">发布</Button>
            </>
    )
}


var publishSuccess = ()=>{
    return (
        <div className="publish-status">
            <div className="title">
            发布成功
            </div>
            <div className="wechat-image">

            </div>
            <Button type="primary"  className="publish-btn">下载店铺二维码</Button>
        </div>
    )
}

var publishFail = ()=>{
    return (
        <div className="publish-status">
            <div className="title">
            发布失败！
            </div>
            <div className="warning">
            <p> 1:账号信息不符合规范:<br/>
                　(1):包含色情因素 </p>
             <p> 2:服务类目"金融业-保险_"与你提交代码审核时设置的功能页面内容不一致:<br/>
                　(1):功能页面设置的部分标签不属于所选的服务类目范围。 <br/>
                　(2):功能页面设置的部分标签与该页面内容不相关。
              </p>
            </div>
            <Button type="primary"  className="publish-btn">更新发布</Button>
        </div>
    )
}




var step = ()=>{
    return (
        <div className="publish-steps">
            <ul className="list">
                <li className="item">
                    <div className="icon icon1"></div>
                    <div className="text"><span>1</span>发布</div>
                    <div className="line"></div>
                </li>
                <li className="item">
                    <div className="icon icon2"></div>
                    <div className="text"><span>2</span>审核中</div>
                    <div className="line"></div>
                </li>
                <li className="item">
                    <div className="icon icon3"></div>
                    <div className="text"><span>3</span>审核结果</div>
                    {/* <div className=""></div> */}
                </li>
            </ul>
        </div>
    )
}
 
export default Transition(Index);