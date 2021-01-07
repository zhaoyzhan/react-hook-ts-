import React, {useState, useCallback, useMemo, Fragment} from 'react';
import {Button} from 'antd';
import Item from './public/item';
import './index.scss';
export interface paramS {
    name: string,
    value: string
}
const arrI = {
    name: '',
    value: ''
}
const Index = () => {
    const [params, setParams] = useState<paramS[]>([])
    const addParam = () => {
        setParams([
            ...params,
            arrI
        ])
    }
    const inpChange = useCallback((type: string, value: string, index: number) => {
        const newParam = params.reduce((res: any, cur: any, idx: number) => {
            res.push({
                ...cur,
                [type]: index === idx ? value : cur[type]
            })
            return res;
        }, [])
        setParams(newParam)
    }, [params])
    const Items = useMemo(() => (
        <Fragment>
            {
                params.map(({name, value}: paramS, index: number) => 
                    <Item name={name} value={value} index={index} key={index} inpChange={inpChange}/>)
            }
        </Fragment>
    ), [params, inpChange])
    const save = () => {
        console.log(params, 'params')
    }
    return <div className="modules goods_parameter">
        <h2 className="goods_add_public_title">参数</h2>
        <div style={{paddingLeft: 50}}>
            {Items}
            <Button type="primary" onClick={save} style={{width: 96}}>保存</Button>
            <Button type="primary" onClick={addParam} style={{width: 96, marginLeft: 20}}>添加参数</Button>
        </div>
    </div>
}

export default Index;