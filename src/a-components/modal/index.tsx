import React, {ReactNode} from 'react';
import { Modal, Button } from 'antd';
import classnames from 'classnames';
import './index.scss';

interface propType {
    title?: string, 
    visible?: boolean, 
    handleCancel?: () => void,
    handleOk?: () => void,
    showFooter?: boolean,
    content?: ReactNode,
    closable?: boolean,
    destroyOnClose?: boolean,
    centered?: boolean,
    width?: number,
    classname?: string,
    okText?: string,
    cancelText?: string,
    children?: any
}

const Index: React.SFC<propType> = ({
    title = '默认标题', 
    visible = true, 
    showFooter = true, 
    handleCancel = () => {},
    handleOk = () => {},
    content = '',
    closable = true,
    destroyOnClose = true,
    centered = true,
    width = 660,
    classname = '',
    okText = '确定',
    cancelText = '取消',
    children
}) => {
    return (
        <Modal
            visible={visible}
            title={title}
            centered={centered}
            destroyOnClose={destroyOnClose}
            onOk={handleOk}
            closable={closable}
            onCancel={handleCancel}
            width={width}
            className={classnames(`public_modal ${classname}`)}
            footer={showFooter ?[
                <Button key="back" className="pause" onClick={handleCancel}>
                    {cancelText}
                </Button>,
                <Button key="submit" className="sure" type="primary" onClick={handleOk}>
                    {okText}
                </Button>,
            ] : []}
        >
            {
                children || content
            }
        </Modal>
    )
}

export default Index;