import React, {useState, useCallback, useMemo, FC, Fragment, useRef, useEffect, useImperativeHandle } from 'react';
import Modal from '../modal';
import {CloseOutlined} from '@ant-design/icons';
import { Tabs, Select } from 'antd';
import {PublicBtn, ElUpload} from '../upload/main';
import './index.scss';

const { TabPane } = Tabs;
const { Option } = Select;

const Index: FC<{imgChange: (img: string) => void, uploadRef: any}> = ({imgChange, uploadRef}) => {
    const [visible, setVisible] = useState(false);
    const [activeIdx, setIdx] = useState('1')
    const changeref: any = useRef(null)
    const handleOk = useCallback(() => {
        setVisible(false)
    }, [])
    const handleCancel = useCallback(() => {
        setVisible(false)
    }, [])
    const tabChange = (idx: string) => {
        setIdx(idx)
    }
    useEffect(() => {
        changeref.current = imgChange;
        return () => {
            changeref.current = null;
        }
    })
    const changeImg = useCallback((img: string) => {
        console.log(img,' lkjjjj')
    }, [])
    useImperativeHandle(uploadRef, () => ({
        changeModal: (flag: boolean) => {
            setVisible(flag)
        }
    }))
    const headComp = useMemo(() => (
        <div className="upload_record_dragger">
            <ElUpload type="dragger" changeImg={changeImg} component={<div className="dragger_box">
                <p>把文件拖动到这里</p>
                <span>或者</span>
                <div>在本地文件中浏览</div>
            </div>} />
        </div>
    ), [changeImg])
    const handleChange = (val: string) => {
        console.log('oooiii', val)
    }
    const uploadButton = useMemo(() =>(  //<LoadingOutlined />
        <PublicBtn />
    ), [])
    const PUploadComp = useMemo(() => (
        <ElUpload changeImg={changeImg} component={uploadButton}/>
    ), [changeImg, uploadButton])
    const hasUpload = useMemo(() => (
        <div className="has_upload">
            <div className="has_upload_select">
                <Select defaultValue="lucy" style={{ width: 260, height: 34 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="mack">mack</Option>
                </Select>
                <span>最新/最早</span>
            </div>
            <div className="has_upload_main">
                <ul>
                    <li>
                        {PUploadComp}
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    ), [PUploadComp])
    const getContent = useMemo(() => (
        <div className="upload_box">
            <Tabs type="card" onChange={tabChange} defaultActiveKey={activeIdx}>
                <TabPane tab="上传新图片" key="1">
                </TabPane>
                <TabPane tab="已上传的图片" key="2">
                </TabPane>
            </Tabs>
            {
                activeIdx === '1' ? headComp : hasUpload
            }
            <CloseOutlined className="upload_box_icon" onClick={handleCancel}/>
        </div>
    ), [activeIdx, handleCancel, headComp, hasUpload])
    return <Fragment>
        {
            visible ?  <Modal
                classname="template_sort_upload"
                closable={false}
                showFooter={false}
                handleOk={handleOk}
                handleCancel={handleCancel}
                content={getContent}
            /> : ''
        }
    </Fragment>
}

export default Index;