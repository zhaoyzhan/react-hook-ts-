
//订单管理
import React, { useState } from 'react';
import useBread from "../../../a-components/breadcrumbs/use-bread";
import ProductItem from './components/productInfo/index'
// import Tab from '../../../a-components/tabs/index'
import Modal from '../../../a-components/modal/index'
import { Input, DatePicker,Form,Button,Select} from 'antd'
import Transition from '../../../a-components/transition';
import './index.scss'
// import { reverseString } from '../../../utils/stringProcessor';
const { RangePicker } = DatePicker;

// const { TextArea } = Input
const { Option } = Select;


const Index = () => {

   const [modal, setModal] = useState(false)
   const [modalInfo, setModalInfo] = useState({title:'修改金额',fnIdx:0})
   
    return (
        <div className="padding_22_18 order-manage">
             {useBread()} 
             <div className="order-search">
                    <Form  layout="inline">

                         <Form.Item label="下单时间" >
                              <RangePicker />
                         </Form.Item>
                         <Form.Item label="订单号" >
                              <Input placeholder="标题（标题关键字）" /> 
                         </Form.Item>
                         <Form.Item label="订单名称" >
                              <Input placeholder="请输入订单名称" /> 
                         </Form.Item>
                         <div>
                              <Button type="primary">查询</Button>
                              <Button type="primary">清除</Button>
                              <Button type="primary">导出订单</Button>
                         </div>
                    </Form>      
             </div>
           
            
              <div className="modules order-manage">
                    <ProductItem setPop={setModalInfo} setModal={setModal}></ProductItem>          
              </div>
             

              <Pop modal={modal} title={modalInfo.title} fnIdx = {modalInfo.fnIdx} setModal={()=>{setModal(false)}}></Pop>
        
        </div>
     )
}





// 修改金额
const reverse = ()=>{
     return (
          <div className="reverse-price">
               <div className="tips">
                     注意：修改金额需填写备注，提交后用户将支付修改后的金额
               </div>
               <Form >
                    <Form.Item label="原金额" name="username">
                         <Input placeholder="标题（标题关键字）" /> 
                    </Form.Item>
                    <Form.Item label="修改后的金额" name="username">
                         <Input placeholder="请输入订单名称" /> 
                    </Form.Item>
                    <Form.Item label="修改后的金额" name="username">
                         <Input placeholder="请输入订单名称" /> 
                    </Form.Item>                
               </Form>  
          </div>
     )
}


// 备注

const remarks = ()=> {
     return (
          <div className="reverse-price">
               <Form >
                    <Form.Item label="添加备注信息" name="username">
                         <Input.TextArea rows={4}/> 
                    </Form.Item>                   
               </Form>
          </div>  
     )
}

// 修改收货地址

const setAddress = ()=> {
     return (
          <div className="reverse-price">
               <Form >
                    <Form.Item label="收件人">
                         <Input placeholder="请输入收件人" /> 
                    </Form.Item>
                    <Form.Item label="电话" >
                         <Input placeholder="请输入电话" /> 
                    </Form.Item>
                    <Form.Item label="发件人地区" >
                         <Input placeholder="请输入订单名称" /> 
                    </Form.Item>  
                    <Form.Item label="详细地址">
                         <Input placeholder="请输入详细地址" /> 
                    </Form.Item>               
               </Form>  
          </div>
     )
}

//发货
const deliverGoods = () => {
     return (
          <div className="reverse-price">
          <Form >
               <Form.Item label="订单号">
                    <Input disabled placeholder="请输入收件人" /> 
               </Form.Item>
               <Form.Item label="收件人" >
                    <Input disabled placeholder="请输入电话" /> 
               </Form.Item>
               <Form.Item label="收件人邮编" >
                    <Input placeholder="请输入订单名称" /> 
               </Form.Item>  
               <Form.Item label="快递公司">
                    <Select defaultValue="lucy"  >
                         <Option value="jack">Jack</Option>
                         <Option value="lucy">Lucy</Option>
                         <Option value="Yiminghe">yiminghe</Option>
                    </Select>
               </Form.Item> 
               <Form.Item label="物流单号">
                    <Input placeholder="物流单号" /> 
               </Form.Item> 
               <Form.Item label="备注">
                    <Input.TextArea rows={4}/> 
               </Form.Item>             
          </Form>  
     </div>
     )
}



const popFn = [reverse,remarks,setAddress,deliverGoods]

const Pop = (props:any)=>{
     console.log(props.fnIdx)
     return (
          <Modal visible={props.modal} title={props.title} handleCancel={props.setModal}
           content={popFn[props.fnIdx]()} ></Modal>
     )
}

export default Transition(Index);