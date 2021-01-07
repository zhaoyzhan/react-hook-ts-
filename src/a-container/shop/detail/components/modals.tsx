import React, { useEffect, Fragment, useMemo, useRef, useReducer, useCallback } from 'react';
import Modal from '../../../../a-components/modal';
import Upload from '../../../../a-components/upload';
import {formTypes, initS} from './types';
import ImageDefa from '../../../../a-components/image/image';
import {Input, Select} from 'antd';
const { Option } = Select;

const initialState = {
	headPic: '',
    shopName: '',
    shopDesc: '',
    shopShow: '',
    address: '',
    adressDetail: '',
    backPhone: '',
    backPeople: '',
    backAdrDetail: '',
    backAddress: ''
}

const { TextArea } = Input;

function reducer(state: initS, action: any) {
    switch (action.type) {
        case formTypes.headPic:
            return {
                ...state,
                headPic: action.pic
            }
        case formTypes.shopName:
            return {
                ...state,
                shopName: action.value
            }
        case formTypes.shopDesc:
            return {
                ...state,
                shopDesc: action.value
            }
        case formTypes.shopShow:
            return {
                ...state,
                shopShow: action.value
            }
        case formTypes.adress:
            return {
                ...state,
                address: action.value[0],
                adressDetail: action.value[1]
            }
        case formTypes.backInfo:
            return {
                ...state,
                backPhone: action.value[3],
                backPeople: action.value[2],
                backAdrDetail: action.value[1],
                backAddress: action.value[0]
            }
        default:
            throw new Error();
    }
}

const Index: React.SFC<{type: string, resetVisible: () => void, visible: boolean}> = ({type, resetVisible, visible}) => {
    //state
    const [state, dispatch] = useReducer(reducer, initialState);
    //ref
    const resetRef: any = useRef(null);
    const nameRef: any = useRef('');
    const descRef: any = useRef('');
    const showRef: any = useRef('');
    const adrRef: any = useRef('');
    const adrDetailRef: any = useRef('');
    const backAdrRef: any = useRef('');
    const backPeopleRef: any = useRef('');
    const backPhoneRef: any = useRef('');
    const backAdrDetailRef: any = useRef('');
    //修改state
    const sendDisap = (sendType: string, value: string | string[] | boolean) => {
        console.log(sendType, value, '-------------')
        dispatch({
            type: sendType,
            value
        })
    }
    //确定
    const handleOk = useCallback(() => {
        switch (type) {
            case formTypes.headPic:
                console.log(state.headPic, 'headPic')
                break;
            case formTypes.shopName:
                sendDisap(formTypes.shopName, nameRef.current.state.value);
                break;
            case formTypes.shopDesc:
                sendDisap(formTypes.shopDesc, descRef.current.state.value);
                break;
            case formTypes.shopShow:
                sendDisap(formTypes.shopShow, showRef.current.state.value);
                break;
            case formTypes.adress:
                sendDisap(formTypes.adress, [adrRef.current ,adrDetailRef.current.state.value]);
                break;
            case formTypes.backInfo:
                sendDisap(
                    formTypes.backInfo, 
                    [
                        backAdrRef.current, 
                        backAdrDetailRef.current.state.value,
                        backPeopleRef.current.state.value,
                        backPhoneRef.current.state.value
                    ]);
                break;
            default:
                break;
        }
        resetRef.current()
    }, [state.headPic, type, adrRef])
    //取消
    const handleCancel = () => {
        resetRef.current()
    }
    //修改图片
    const changeImg = useCallback((img: string) => {
        dispatch({
            type: formTypes.headPic,
            pic: img
        })
    }, [])
    //选择框改变
    const selectChange = (val: string) => {
        adrRef.current = val;
    }
    const selectBackChange = (val: string) => {
        backAdrRef.current = val;
    }
    const UploadComp = useMemo(() => <Upload changeImg={changeImg}/>, [changeImg])
    const ImageComp = useMemo(() => <ImageDefa img={state.headPic}/>, [state.headPic])
    const headPicComp = useCallback(() => {
        switch (type) {
            case formTypes.headPic:
                return <div className="modal_pic shop_detail_modal">
                    {UploadComp}
                    <p className="warning">图片格式必须为：png,bmp,jpeg,jpg；不可大于2M；建议使用png格式图片，以保持最佳效果；</p>
                    { state.headPic ? <div>
                        {ImageComp}
                        <div className="box">
                            <p>头像预览</p>
                            {ImageComp}
                            <img src={require('../../../../assets/images/to.png')} style={{width: '50px', height: '10px'}} alt=""/>
                            {ImageComp}
                        </div>
                    </div>: ''}
                </div>
            case formTypes.shopName:
                return <div className="modal_shopname shop_detail_modal">
                    <h3>请输入商店名称</h3>
                    <Input 
                        placeholder="商店名称长度应为10个字以内" 
                        defaultValue={state.shopName} 
                        ref={nameRef}
                        />
                    <p>
                        请确认商店名称内容不含国家相关法律法规禁止内容<br/>
                        提交后审核将会在7个工作日内完成<br/>
                        商店名称长度应为10个字以内
                    </p>
                </div>
            case formTypes.shopDesc:
                return <div className="modal_shopdesc shop_detail_modal">
                    <h3>请输入商店简称</h3>
                    <Input 
                        placeholder="商店简称长度应为10个字以内" 
                        defaultValue={state.shopDesc} 
                        ref={descRef}/>
                    <p>
                        请确认商店简称内容不含国家相关法律法规禁止内容<br/>
                        提交后审核将会在7个工作日内完成<br/>
                        商店简称长度应为10个字以内
                    </p>
                </div>
            case formTypes.shopShow:
                return <div className="modal_shopshow shop_detail_modal">
                    <h3>请输入商店介绍</h3>
                    <TextArea 
                        placeholder="商店介绍长度应为40-120个字"
                        defaultValue={state.shopShow} 
                        ref={showRef}/>
                    <p>
                        请确认商店介绍内容不含国家相关法律法规禁止内容<br />
                        提交后审核将会在7个工作日内完成<br />
                        商店介绍长度应为40-120个字
                    </p>
                </div>
            case formTypes.adress:
                return <div className="modal_adress shop_detail_modal">
                    <div>
                        <label>公司地址</label>
                        <Select 
                            placeholder="请选择" 
                            defaultValue={state.address || undefined} 
                            onChange={selectChange}
                            style={{ width: 200 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                    <div>
                        <label>公司详细地址</label>
                        <Input 
                            placeholder="请输入公司详细地址" 
                            defaultValue={state.adressDetail} 
                            ref={adrDetailRef}/>
                    </div>
                </div>
            case formTypes.backInfo:
                return <div className="modal_backinfo shop_detail_modal">
                    <div>
                        <div>
                            <label>公司地址</label>
                            <Select 
                                placeholder="请选择" 
                                defaultValue={state.backAddress || undefined} 
                                onChange={selectBackChange}
                                style={{ width: 200 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div>
                            <label>公司详细地址</label>
                            <Input 
                                placeholder="请输入公司详细地址" 
                                defaultValue={state.backAdrDetail} 
                                ref={backAdrDetailRef}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>退货联系人</label>
                            <Input 
                                placeholder="请输入退货联系人" 
                                defaultValue={state.backPeople} 
                                ref={backPeopleRef}/>
                        </div>
                        <div>
                            <label>退货联系电话</label>
                            <Input 
                                placeholder="请输入退货联系电话" 
                                defaultValue={state.backPhone} 
                                ref={backPhoneRef}/>
                        </div>
                    </div>
                </div>
            default:
                return ''
        }
    }, [
        UploadComp, 
        ImageComp, 
        state.shopShow, 
        state.shopName, 
        state.shopDesc, 
        state.address,
        state.adressDetail,
        state.backAddress,
        state.backAdrDetail,
        state.backPeople,
        state.backPhone,
        type,
        state.headPic
    ])
    const getTitle = useCallback(() => {
        switch (type) {
            case formTypes.headPic:
                return '修改商店头像';
            case formTypes.shopName:
                return '修改商店名称';
            case formTypes.shopDesc:
                return '修改商店简称';
            case formTypes.shopShow:
                return '修改商店介绍';
            case formTypes.adress:
                return '修改公司地址';
            case formTypes.backInfo:
                return '修改默认退货地址';
            default:
                return '';
        }
    }, [type])
    //组件
    const ModalMp = useMemo(() => {
        if(!visible) return '';
        return <Modal 
            visible={visible} 
            title={getTitle()}
            handleOk={handleOk}
            handleCancel={handleCancel}
            content={headPicComp()}
        />
    }, [headPicComp, handleOk, visible, getTitle])
    //生命周期
    useEffect(() => {
        resetRef.current = resetVisible;
        return () => {
            resetRef.current = null;
            adrRef.current = '';
        }
    })
    // useEffect(() => {
    //     console.log(type, 'oltype', state)
    // }, [state, type])
    return (
        <Fragment>
            {ModalMp}
        </Fragment>
    )
}

export default Index;