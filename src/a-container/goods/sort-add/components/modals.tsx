import React, {
    SFC, 
    useCallback, 
    Fragment, 
    useState, 
    useImperativeHandle, 
    useMemo,
    useRef
} from 'react';
import Modal from '../../../../a-components/modal';
import {operat} from './types';
import Form from './form';

const Index: SFC<{modalType: string, visibleRef: any}> = ({modalType, visibleRef}) => {
    const [visible, setVisible] = useState(false)
    const formRef: any = useRef()
    const handleOk = useCallback(() => {
        formRef.current.onsure().then(() => {
            console.log('formRef, onsure')
        })
    }, [])
    const handleCancel = useCallback(() => {
        setVisible(false)
    }, [])
    useImperativeHandle(visibleRef, () => ({
        changeVisible: (flag: boolean) => {
            setVisible(flag)
        }
    }))
    const FormComp = useMemo(() => <Form formRef={formRef} modalType={modalType}/>, [formRef, modalType])
    const getTitle = useCallback(() => {
        switch (modalType) {
            case operat.ADD:  //添加商品分类
                return '添加商品分类';
            case operat.TWOADD:   //添加商品二级分类
                return '添加商品二级分类';
            case operat.EDIT:    //编辑商品分类
                return '编辑商品分类';
            default:
                break;
        }
    }, [modalType])
    const ModalMp = useMemo(() => {
        if(!visible) return '';
        return <Modal 
            title={getTitle()}
            handleOk={handleOk}
            handleCancel={handleCancel}
            content={FormComp}
        />
    }, [FormComp, handleOk, visible, handleCancel, getTitle])
    return <Fragment>
        {ModalMp}
    </Fragment>
}

export default Index;