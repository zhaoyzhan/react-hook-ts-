import React from "react";
import { Form, Input, Button } from "antd";
import './index.scss'


interface indexProps {
  name?: string;
  layout?: any; 
  width?: number | string;
  changeVal: (val: string) => void;
  showBtn?:boolean;
  btnText?:string
}



const Index: React.SFC<indexProps> = ({
  name,
  layout,
  width = 860,
  changeVal,
  showBtn,
  btnText
}) => {


  const FormItem = Form.Item;


  return (
    <>
      <FormItem label={name} {...layout}>
        <Input  onChange={(e)=>{changeVal(e.target.value)}} style={{ width: width + "px" }} />
        {showBtn ? <Button type="primary" className="inputAfterBtn">{btnText}</Button> : ''}
      </FormItem>
    </>
  );
};

export default Index;
