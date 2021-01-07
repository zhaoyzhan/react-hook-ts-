import React, {Fragment, useMemo} from 'react';
import {Input, Button} from 'antd';
import {ElUpload, PublicBtn} from '../../../../../a-components/upload/main';
import './index.scss';

const Index = () => {
    const PublicBtnComp = useMemo(() => <PublicBtn />, [])
    const UploadImgComp = useMemo(() => (
        <ElUpload changeImg={() => {}} component={PublicBtnComp}/>
    ), [PublicBtnComp]);
    return <Fragment>
        <h2 className="goods_add_public_title">库存</h2>
        <div style={{paddingLeft: 50}} className="param_norms no_norms">
            <div className="no_norms_1">
                <div className="no_norms_1_upload flex">
                    <label>图片</label>
                    {UploadImgComp}
                </div>
                <div className="no_norms_1_form">
                    <div>
                        <label style={{width: 56}}>商品编码</label>
                        <Input style={{width: 640}} />
                    </div>
                    <div className="other">
                        <label style={{width: 56}}>重量</label>
                        <Input style={{width: 208}} />
                        <span>克</span>
                        <label style={{width: 56}}>库存</label>
                        <Input style={{width: 270}} />
                    </div>
                </div>
            </div>
            <div className="no_norms_2">
                <Fragment>
                    <label>售价</label>
                    <Input style={{width: 208}} />
                </Fragment>
                <Fragment>
                    <label>原价</label>
                    <Input style={{width: 208}} />
                </Fragment>
                <Fragment>
                    <label>成本价</label>
                    <Input style={{width: 208}} />
                </Fragment>
            </div>
            <Button type="primary" style={{width: 88}}>保存</Button>
        </div>
    </Fragment>
}

export default Index;