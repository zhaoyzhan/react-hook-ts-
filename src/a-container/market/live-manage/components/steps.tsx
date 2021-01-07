import React, { FC, Fragment } from 'react';
import classnames from 'classnames';
import './index.scss';
interface stepT {
    name: string,
    img?: any,
    active_img: any,
    id: number
}
const step: stepT[] = [{
    id: 1,
    name: '基本信息',
    active_img: require('../../../../assets/images/steps/step1-active.png'),
    img: ''
}, {
    id: 2,
    name: '基本信息',
    active_img: require('../../../../assets/images/steps/step2-active.png'),
    img: require('../../../../assets/images/steps/step2.png')
}, {
    id: 3,
    name: '基本信息',
    active_img: require('../../../../assets/images/steps/step3-active.png'),
    img: require('../../../../assets/images/steps/step3.png')
}]

const Index:FC<{stepIdx?: number}> = ({stepIdx = 1}) => {
    return <ul 
        style={{ padding: '63px 160px 30px', alignItems: 'flex-start'}}
        className="live_manage_create_steps flex_center">
        {
            step.map(({id, name, img, active_img}) => (
                <Fragment key={id}>
                    <li>
                        {
                            stepIdx >= id ?  <img src={ active_img } alt=""/> 
                                : <img src={ img } alt=""/>
                        }
                        <p className={classnames(`flex_center ${stepIdx === id && 'active'} ${stepIdx > id && 'pass'}`)}>
                            <span>{id}</span>
                            {name}
                        </p>
                    </li>
                    {
                        id < 3 && <img src={require('../../../../assets/images/steps/to.png')} alt=""/>
                    }
                </Fragment>
            ))
        }
    </ul>
}

export default Index;