import React, {
    Fragment, 
    useState, 
    useMemo, 
    useCallback, 
    FC, 
    useImperativeHandle
} from 'react';
import {Button} from 'antd';
import NormItem from './norm-item';
import {warning} from '../../../../../utils/warning';
import './index.scss';
export interface normT {
    name: string,
    norm?: normT[]
}
const defauNorm: normT = {
    name: '',
    norm: []
}
const elClone = (arr: any) => JSON.parse(JSON.stringify(arr));
const Index: FC<{component: any, formDataref: any}> = ({component, formDataref}) => {
    const [norms, setNorms] = useState<normT[]>([{name: '颜色', norm: [{name: '红色'}, {name: '绿色'}, {name: '蓝色'}]}, {name: '型号', norm: [{name: 'xl'}, {name: 'xxl'}]}])
    useImperativeHandle(formDataref, () => ({
        handleData: () => {
            return norms;
        }
    }))
    const addNorm = useCallback((idx?: number) => {
        let newNorms: normT[] = []
        if(idx === undefined) {
            if(norms.length >= 2) {
                warning('最多添加2个');
                return;
            }
            newNorms = [
                ...norms,
                defauNorm
            ]
        } else {
            newNorms = norms.reduce((res: any, cur: any, index: number) => {
                if(idx === index) {
                    if(cur.norm.length >= 9) {
                        warning('最多添加9个');
                        res.push(cur)
                    } else {
                        const newNum = elClone(cur)
                        newNum.norm.push({
                            name: ''
                        })
                        res.push(newNum)
                    }
                } else {
                    res.push(cur)
                }
                return res;
            }, [])
        }
        setNorms(newNorms);
    }, [norms])
    const handleNorms = useCallback((value: string, idxF: number, idxS?: number) => {
        const newNorms = norms.reduce((res: any, cur: any, idx: number) => {
            if(idxS !== undefined) {
                if(idx === idxF) {
                    const newNum = elClone(cur)
                    newNum.norm[idxS].name = value
                    res.push(newNum)
                } else {
                    res.push(cur)
                }
            } else {
                res.push({
                    ...cur,
                    name: idx === idxF ? value : cur['name']
                })
                
            }
            return res;
        }, [])
        setNorms(newNorms)
    }, [norms])
    const NormsComp = useMemo(() => (
        <ul>
            {
                norms.map((item: normT, index: number) => 
                    <li key={index}>
                        <NormItem 
                            norms={item} 
                            addNorm={addNorm}
                            idx={index} 
                            norm={item.norm} 
                            handleNorms={handleNorms}/>
                    </li>)
            }
        </ul>
    ), [norms, handleNorms, addNorm])
    return <Fragment>
        <div style={{paddingLeft: 50}} className="param_norms is_norms">
            <Button 
                type="primary" 
                onClick={() => addNorm()}
                style={{width: 96, display: 'block', marginBottom: 18}}>添加规格</Button>
            {NormsComp}
            {component}
            <Button type="primary" onClick={() => console.log(norms)} style={{width: 96}}>保存</Button>
        </div>
    </Fragment>
}

export default Index;