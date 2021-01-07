import React, {FC, useRef, useEffect} from 'react';
import {paramS} from '../parameter';
import {debounce} from 'lodash';
import {Input} from 'antd';
import './index.scss';
interface Props extends paramS {
    inpChange: (type: string, value: string, index: number) => void,
    index: number
}
const Index: FC<Props> = ({name, value, index,inpChange}) => {
    const handleRef: any = useRef(null)
    useEffect(() => {
        handleRef.current = inpChange;
        return () => {
            handleRef.current = null;
        }
    })
    const handleChange = debounce((val: string, type: string) => {
        handleRef.current(type, val, index)
    }, 300)
    return <div className="param_item">
        <div className="box">
            <span>参数名称</span>
            <Input onChange={(e) => handleChange(e.target.value, 'name')} placeholder="请输入" defaultValue={name} style={{width: 270}}/>
        </div>
        <div className="box">
            <span>参数值</span>
            <Input onChange={(e) => handleChange(e.target.value, 'value')} placeholder="请输入" defaultValue={value} style={{width: 270}}/>
        </div>
        <div className="operat"></div>
    </div>
}

export default Index;