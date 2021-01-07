
import React, {FC, ReactNode, useRef, useEffect} from 'react';
import {Popconfirm} from 'antd';

interface Props {
    context?: ReactNode,
    onConfirm?: () => void,
    onCancel?: () => void,
    title?: string,
    okText?: string,
    cancelText?: string
}
const Index: FC<Props> = ({
    context, 
    onConfirm = () => {}, 
    onCancel = () => {},
    title = '确定删除此数据吗', 
    okText = '确定',
    cancelText = '取消'
}) => {
    const onRef: any = useRef(null);
    const cancelRef: any = useRef(null);
    useEffect(() => {
        onRef.current = onConfirm;
        cancelRef.current = onCancel;
        return () => {

        }
    })
    return <Popconfirm
        title={title}
        onConfirm={() => onRef.current()}
        onCancel={() => cancelRef.current()}
        okText={okText}
        cancelText={cancelText}
    >
        {context}
    </Popconfirm>
}

export default Index;