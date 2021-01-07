import React, {useMemo} from 'react';
import Upload from './upload';
import './index.scss';


const Index: React.SFC<{img?: string, changeImg: (img: string) => void, title?: string}> = ({img, changeImg, title='点击上传'}) => {
    const UploadComp = useMemo(() => (
        <Upload 
            changeImg={changeImg} 
            component={img ? <img className="upload_img" src={img} alt=""/> : <span className="upload_btn">{title}</span>}
            />
    ), [img, changeImg, title]);
    return (
        <div className="upload_def_z">
            {UploadComp}
        </div>
    )
}


export default Index