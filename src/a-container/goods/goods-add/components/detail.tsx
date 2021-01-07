import React, {useMemo} from 'react';
import Upload from '../../../../a-components/upload/upload';
import './index.scss';


const Index = () => {
    const uploadSucess = (img: string) => {
        console.log('img, ', img)
    }
    const UploadComp = useMemo(() => (
        <Upload changeImg={uploadSucess} component={
            <div className="goods_detail_upload_btn">
                <img src={require('../../../../assets/images/add-goods-detail.png')} alt=""/>
                <p>最多上传10个素材，拖拽可进行排序，单张图片需限制在1M以内 </p>
            </div>
        }/>
    ), [])
    return <div className="modules goods_add_detail">
        <h2 className="goods_add_public_title">商品详情</h2>
        <ul>
            <li>
                {UploadComp}
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
}

export default Index;