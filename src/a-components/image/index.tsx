import React, {Fragment, useMemo} from 'react';
import Image, {paramS} from './image';

export default (params?: paramS) => {
    //组件
    const ImageComp = useMemo(() => 
        <Image 
            img={(params && params.img) || ''} 
            width={(params && params.width) || 100} 
            height={(params && params.height) || 100} 
            classname={(params && params.classname) || ''}/>, 
            [params])
    return (
        <Fragment>
            { ImageComp }
        </Fragment>
    );
}