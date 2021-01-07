import React, { useState } from "react";
import { Modal, Radio, Button } from "antd";
import InputItem from "../../../../../a-components/formInput/index";
import "./index.scss";



export interface LinkProps {
  isShow: boolean;
  selectItem: (item: any) => void;
  setModel: (item: any) => void;
}

const changeRadio = (item: any) => {
  console.log(item);
};

const obj = [
  {
    title: "test1",
    text: "test 最低价：10.00 原价：1.00元 现金：10.00 ",
  },
  {
    title: "test2",
    text: "test 最低价：10.00 原价：1.00元 现金：10.00 ",
  },
  {
    title: "test3",
    text: "test 最低价：10.00 原价：1.00元 现金：10.00 ",
  },
];

const Index: React.SFC<LinkProps> = ({ isShow, selectItem, setModel }) => {

  var [selectedRadio, setRadio] = useState("1");

  return (
    <>
      <Modal
        title="选择跳转链接"
        visible={isShow}
        onOk={setModel}
        onCancel={setModel}
        width="730px"
      >
        <div className="search-link-box">
            <InputItem name="" changeVal={()=>{}} width="572"></InputItem>
            <Button onClick={()=>{}}>搜索</Button>
        </div>
        <Radio.Group
          className="radio-wrap"
          value={selectedRadio}
          onChange={changeRadio}
        >
          <ul className="select-list">
            {obj.map((item) => (
              <li
                key={item.title}
                onClick={()=>{setRadio(selectedRadio = item.title)}}
              >
                <Radio value={item.title}></Radio>
                <div className="image"></div>
                <div className="content">
                  <p>{item.title}</p>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Radio.Group>
      </Modal>
    </>
  );
};

export default Index;
