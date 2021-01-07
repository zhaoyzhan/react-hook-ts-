import React from "react";
import { Form, Input } from "antd";
import Upload from "../../a-components/upload/index";

export interface IndexProps {
  name?: string;
  layout?: any;
  width: number;
  changeImg: (img: string) => void;
}

const Index: React.SFC<IndexProps> = ({
  name,
  layout,
  width = 750,
  changeImg,
}) => {
  const FormItem = Form.Item;
  return (
    <>
      <FormItem label={name} {...layout}>
        <Input style={{ width: width + "px" }} />
        <div style={{display:'inline-block',marginLeft:'10px'}}>
        <Upload changeImg={changeImg}></Upload>
        </div>
      </FormItem>
     
      
    </>
  );
};

export default Index;
