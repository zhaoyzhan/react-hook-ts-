import React, {
    FC, 
    useImperativeHandle, 
    useRef, 
    useMemo, 
    useState, 
    useCallback,
    Fragment
} from 'react';
import { Form, Input, Button } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import Image from '../../../../a-components/image';
import ModalMain from '../../../../a-components/upload-record';
import '../../../../styles/form.scss';
import './index.scss';

const Index: FC<{formRef: any, modalType: string}> = ({formRef, modalType}) => {
    const [img, setImg] = useState('');
    const [form] = Form.useForm();
    const nameref: any = useRef();
    // const imgRef: any = useRef();
    const uploadRef: any = useRef();
    useImperativeHandle(formRef, () => ({
        onsure: () => {
            return new Promise((resolve: any, reject: any) => {
                resolve()
            })
        }
    }))
    const imgChange = useCallback((img: string) => {
        setImg(img)
    }, [])
    const ImageComp = useMemo(() => <Image img={img}/>, [img])
    const ModalUpload = useMemo(() => <ModalMain uploadRef={uploadRef} imgChange={imgChange}/>, [imgChange, uploadRef])
    return <Fragment>
        <Form
            name="basic"
            className="default_form goods_form"
            style={{marginTop: '20px'}}
            form={form}
            initialValues={{ remember: true }}
        >
            <Form.Item
                label="商品名称"
                name="shopname"
                className="p_l_84"
            >
                <Input ref={nameref} className="inp_width_874 inp_width_auto"/>
            </Form.Item>
            <Form.Item
                label="商品图片"
                name="shopimg"
                className="p_l_84"
            >
                <div className="upload_box">
                    <div className="upload_inp">
                        <Input value={img} className="up_input inp_width_874 inp_width_auto"/>
                        <Button className="up_btn" onClick={() => uploadRef.current.changeModal(true)}>选择图片</Button>
                    </div>
                    <div className="upload_show">
                        <div>
                            <div>
                                {ImageComp}
                            </div>
                            <CloseOutlined onClick={() => setImg('')}/>
                        </div>
                        <p>建议尺寸：640*350，请将所有幻灯片图片尺寸保持一致</p>
                    </div>
                </div>
            </Form.Item>
        </Form>
        {ModalUpload}
    </Fragment>
}

export default Index;