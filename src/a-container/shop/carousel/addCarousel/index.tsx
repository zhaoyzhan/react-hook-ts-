import React, { useState } from "react";
import useBread from "../../../../a-components/breadcrumbs/use-bread";
import { Form, Button } from "antd";
import InputItem from "../../../../a-components/formInput/index";
import InputUpload from "../../../../a-components/formUpload/index";
import SelectLink from "./selectLink";

import "./index.scss";



const Index = (Props: any) => {

  // const getRef = (val:any)=> useRef(val)
  

  const [model, setModel] = useState(false);

  // const props = {
  //   name: "file",
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info: any) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

  var modelPop = () => {
    setModel(!model);
  };

  const tableLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 },
  };

  const changeImage = (img: string) => {
    console.log(img);
  };



  const selectLink = (item: any) => {
    console.log(item);
  };


  const [sortValue,setSortValue] = useState('')
  const [title,setTitle] = useState('')
 console.log(sortValue)
 console.log(title)
  return (
    <div className="padding_22_18">
      {useBread()} 
      <div className="modules addCarousel">
        <Form>
          <InputItem  name="排序"  changeVal={setSortValue} layout={tableLayout}></InputItem>
          
          <InputItem name="幻灯片标题" changeVal={setTitle} layout={tableLayout}></InputItem>
          <InputUpload
            name="幻灯片图片"
            width={762} 
            changeImg={changeImage}
            layout={tableLayout}
          ></InputUpload>
       

          <InputItem name="幻灯片链接" width={762}  showBtn={true} btnText={'选择链接'}  changeVal={setTitle} layout={tableLayout}></InputItem>
        </Form>

        <Button type="primary">保存</Button>
      </div>

      {/* 链接弹窗 */}
          <SelectLink
            setModel={modelPop}
            selectItem={selectLink}
            isShow={model}
          ></SelectLink>
      {/* 链接弹窗 */}

    </div>
  );
};

export default Index;
