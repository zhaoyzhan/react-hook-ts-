import React, { Fragment, useMemo } from 'react';
import classnames from 'classnames';

export interface paramS {
    img?: string, 
    width?: number, 
    height?: number,
    classname?: string
}

const Index: React.SFC<paramS> = ({img = '', width = 100, height = 100, classname = ''}) => {
    const nullImage = useMemo(() => <div 
        className={classnames(classname)}
        style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column',
            width: width + 'px',
            height: height + 'px',
            borderRadius: '4px',
            border: '1px solid #DCDCE6'
        }}>
        <img src={require('../../assets/images/null-img.png')} style={{width: '28px', height: '26px', marginBottom: '13px'}} alt=""/>
        <p
            style={{
                fontSize: '14px',
                color: '#9FA2A8',
                lineHeight: '20px'
            }}>暂无照片</p>
    </div>, [width, height, classname])
    return <Fragment>
        {
            (img && <img 
                src={img} 
                style={{
                    width: width + 'px',
                    height: height + 'px',
                    borderRadius: '4px'
                }}
                alt=""/>) || nullImage
        }
    </Fragment>
}

export default Index;