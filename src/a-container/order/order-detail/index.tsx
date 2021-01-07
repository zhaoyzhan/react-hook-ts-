import React from 'react'
import useBread from "../../../a-components/breadcrumbs/use-bread";
import "./index.scss"
import { Table, Image } from 'antd';
import { ColumnProps } from "antd/es/table";

export interface IndexProps {
    
}


interface table {
     product: any;
     price: string;
     number: string;
     allPrice:string,
     fare:string,
     realPrice:string
}
 
   const columns: ColumnProps<table>[] = [
     {
       title: "商品信息",
       dataIndex: "product",
       key: "product",
       width: "25%",
       render: (text: String) => { 
          return (
               <div className="product">
                     <Image
                         width={80}
                         height={80}
                         src="error"
                         fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                    />
                    <div>
                         <div>商品信息</div>
                         <div>商品信息</div>
                    </div>
               </div>
          )
       }
     },
     {
       title: "单价",
       dataIndex: "price",
       key: "price",
       width: "15%",
       align: "center",
       render:(item)=>{
          return (<span className="highlight1">{item}</span>)
          }
     },{
       title: "数量",
       dataIndex: "number",
       key: "number",
       width: "15%",
       align: "center",
     },{
       title: "商品总价",
       dataIndex: "allPrice",
       key: "allPrice",
       width: "15%",
       align: "center",
       render:(item)=>{
          return (<span className="highlight1">{item}</span>)
       }
     },{
       title: "运费",
       dataIndex: "fare",
       key: "fare",
       width: "15%",
       align: "center",
     },
     {
       title: "实付款",
       dataIndex: "realPrice",
       key: "realPrice",
       width: "15%",
       align: "center",
       render:(item)=>{
           return (<span className="highlight1">{item}</span>)
       }
     }
   ];


  const data = [
     {
       product: "1",
       price: "¥79.00",
       number: "x1",
       allPrice:"¥79.00",
       fare:"¥0.00",
       realPrice:"¥0.00"
     }
   ];
 
const Index: React.SFC<IndexProps> = () => {
    return ( 
        <div className="padding_22_18 order-manage">
            {useBread()} 
            <div className="detail-pannel">
                 <h4 className="title">基础信息</h4>
                 <div className="content cols-3">           
                      <ul className="list">
                           <li className="item">
                                <span className="name">订单状态：</span>
                           </li>
                           <li className="item">
                                <span className="name">支付方式：</span>
                                货到付款
                           </li>
                           <li className="item">
                                <span className="name">交易服务：</span>
                                微信交易保障
                           </li>
                       </ul>
                       <ul className="list">
                           <li className="item">
                                <span className="name">订单号：</span>
                                1234567899871
                           </li>
                           <li className="item">
                                <span className="name">付款时间：</span>
                                --
                           </li>
                          
                       </ul>
                       <ul className="list">
                           <li className="item">
                                <span className="name">下单时间：</span>
                                2020-08-30 22：55：22
                           </li>
                           <li className="item">
                                <span className="name">交易单数：</span>
                                --
                           </li>
                       </ul>
                 </div>
            </div>




            <div className="detail-pannel">
                 <h4 className="title">订单商品</h4>
                 <div>
                 <Table rowKey={"product"} columns={columns} dataSource={data} />
                 </div>
                 
            </div>     

            <div className="detail-pannel">
                 <h4 className="title">退货/售后</h4>
                 <div className="content cols-3">           
                      <ul className="list">
                           <li className="item">
                                <span className="name">退货/售后状态：</span>
                           </li>
                           <li className="item">
                                <span className="name">退款类型：</span>
                                仅退款
                           </li>
                           <li className="item">
                                <span className="name">退款说明：</span>
                                地址写错了，重新拍
                           </li>
                           <li className="item">
                                <span className="name">拒绝理由：</span>
                                订单不支持退款
                           </li>
                          
                       </ul>

                       <ul className="list">
                           <li className="item">
                                <span className="name">退货/售后订单号：</span>
                           </li>
                           <li className="item">
                                <span className="name">退款金额：</span>
                                仅退款
                           </li>
                           <li className="item">
                                <span className="name">申请凭证：</span>
                                地址写错了，重新拍
                           </li>
                          
                          
                       </ul>

                       <ul className="list">
                           <li className="item">
                                <span className="name">申请时间：</span>
                           </li>
                           <li className="item">
                                <span className="name">退货/售后订单号：</span>
                           </li>
                           <li className="item">
                                <span className="name">拒绝退款时间：</span>
                                仅退款
                           </li>
                           <li className="item">
                                <span className="name">操作人：</span>
                                地址写错了，重新拍
                           </li>         
                       </ul>     

                 </div>
            </div>
            <div className="detail-pannel">
                <h4 className="title">买家</h4>
                <div className="content cols-3">           
                      <ul className="list">
                           <li className="item">
                                <span className="name">微信昵称：</span>
                                 微信昵称
                           </li>
                         
                      </ul>  
                      <ul className="list">
                         
                           <li className="item">
                                <span className="name">性别：</span>
                                女
                           </li>
                           
                      </ul>
                      <ul className="list">
                           
                           <li className="item">
                                <span className="name">用户地区：</span>
                                北京市 昌平区
                           </li>
                      </ul>
                </div>   
            </div>


            <div className="detail-pannel">
                <h4 className="title">收货人</h4>
                <div className="content cols-2">           
                      <ul className="list">
                           <li className="item">
                                <span className="name">姓名：</span>
                                 微信昵称
                           </li>
                           <li className="item">
                                <span className="name">联系方式：</span>
                                 微信昵称
                           </li>                 
                      </ul>  
                      <ul className="list">
                         
                           <li className="item">
                                <span className="name">收货地址：</span>
                                地址地址地址地址地址地址地址地址地址 
                           </li>

                           <li className="item">
                                <span className="name">买家留言：</span>
                                地址地址地址地址地址地址地址地址地址 
                           </li>
                           
                      </ul>
                 
                </div>   
            </div>

            <div className="detail-pannel">
                 <h4 className="title">物流</h4>
                 <p>申通快递 013819379794294147109401</p>
                 <div className="">

                 </div>
            </div>

            <div className="detail-pannel">
                 <h4 className="title">备注</h4>
                 <ul className="remark-list">
                     <li><span>2020/08/08 客服人名</span>备注内容备注内容备注内容备注内容备注内容备注内容</li>
                     <li><span>2020/08/08 客服人名</span>备注内容备注内容备注内容备注内容备注内容备注内容</li>
                 </ul>
            </div>



        </div>
    );
}
 
export default Index;