import React, {Fragment, useCallback, FC, useRef} from 'react';
import {Input} from 'antd';
import {warning} from '../../../../../utils/warning';
import {normT} from './is-norms';
import {debounce} from 'lodash';
import './index.scss';
const { Search } = Input;
interface Props {
    idx: number,
    norm?: normT[],
    norms: normT,
    handleNorms: (value: string, idxF: number, idxS?: number) => void,
    addNorm: (idx?: number) => void
}

const Index: FC<Props> = ({norm = [], idx, norms, handleNorms, addNorm}) => {
    const changeHandle: any = useRef(null)
    const addRef: any = useRef(null)
    const inpSearch = debounce((value: string) => {
        if(!value) {
            warning('请先填写规格名称');
            return;
        }
        addRef.current(idx)
    }, 50)
    const inpChange = debounce((ele: any, idxF: number, idxS?: number) => {
        changeHandle.current(ele.value, idxF, idxS)
    }, 200)
    const InputComp = useCallback((enterBtn: boolean, name: string, index?: number)=> (
        enterBtn ? <Fragment>
            <Search
                placeholder="请输入规格 如颜色"
                enterButton="添加规格"
                defaultValue={name}
                className="norm_input_btn"
                style={{width: 366}}
                onSearch={inpSearch}
                onChange={({target}) => inpChange(target, idx)}
            />
            <div className="norms_del_btn flex_center">
                <img src={require('../../../../../assets/images/norm-del.png')} alt=""/>
            </div>
        </Fragment> : <Fragment>
            <Input
                placeholder="请输入规格 如颜色"
                defaultValue={name}
                style={{width: 270}}
                onChange={({target}) => inpChange(target, idx, index)}
            />
            <div className="norms_del_btn flex_center">
                <img src={require('../../../../../assets/images/norm-del.png')} alt=""/>
            </div>
        </Fragment>

    ), [inpChange, inpSearch, idx])
    React.useEffect(() => {
        changeHandle.current = handleNorms;
        addRef.current = addNorm;
        return () => {
            changeHandle.current = null;
            addRef.current = null;
        }
    })
    return <Fragment>
        <div className="main_norm align_center">
            {InputComp(true, norms.name)}
        </div>
        <ul className="child_norms flex">
            {
                norm.map((item, index) => 
                    <li key={index} className="align_center">
                        {InputComp(false, item.name, index)}
                    </li>) 
            }
        </ul>
    </Fragment>
}

export default Index;