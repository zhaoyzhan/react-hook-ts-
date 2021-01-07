import React, {useRef, useEffect, Fragment, ReactNode, useState} from 'react';
import {Upload, message, Spin } from 'antd';
const { Dragger } = Upload;
interface Props {
    changeImg?: (img: string) => void, 
    fileInfo?: (file: any) => void,
    component?: ReactNode, 
    type?: string,
    children?: ReactNode
}
const Index: React.SFC<Props> = ({
    changeImg = () => {}, 
    fileInfo = () => {},
    component, 
    type = 'upload',
    children
}) => {
    const callbackRef: any = useRef(null)
    const infoRef: any = useRef(null)
    const [isLoading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        callbackRef.current = changeImg;
        infoRef.current = fileInfo;
        return () => {
            callbackRef.current = null;
            infoRef.current = null;
        }
    })
    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onRemove: (file: any) => {
            
        },
        beforeUpload: (file: any) => {
            const arr = [
                'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3202350968,2388474311&fm=26&gp=0.jpg',
                'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=139718553,3413558641&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=16207085,969658569&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1588620919,359805583&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1252118850,3382836282&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3302576574,237334394&fm=26&gp=0.jpg',
                'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3582194852,1481557220&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327229463,909028306&fm=26&gp=0.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2601900707,917050054&fm=26&gp=0.jpg'
            ]
            const num = Math.floor(Math.random() * 10)
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                callbackRef.current(arr[num])
                infoRef.current(file)
            }, 1000);
            return false;
        },
        onChange(info: any) {
            const { status } = info.file;
            if (status === 'done') {
                // setLoading(false)
                infoRef.current(info.file)
            } else if( status === 'uploading' ) {
                // setLoading(true)
            } else if (status === 'error') {
                // setLoading(false)
                message.error(`上传失败，请重新尝试`);
            }
        },
        fileList: [],
        showUploadList: false,
        multiple: true
    };
    return (
        <Fragment>
            <Spin spinning={isLoading} tip="Loading...">
                {
                    type === 'upload' ? <div className="upload">
                        <Upload {...props}>
                            {children || component}
                        </Upload>
                    </div> : <Dragger {...props}>
                        {children || component}
                    </Dragger>
                }
            </Spin>
        </Fragment>
    )
}

export default Index