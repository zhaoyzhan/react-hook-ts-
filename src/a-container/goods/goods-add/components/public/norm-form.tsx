import React, {
    FC,
    useImperativeHandle,
    useState,
    Fragment
} from 'react';
import {Input} from 'antd';
import './index.scss';
import {debounce} from 'lodash';
const publicTh = ['SKU编码', '单买价格', '拼团价格', '服务佣金', '可售库存'];

const calcDescartes = (array: any) => {
    if (array.length < 2) return array[0] || [];
    return Array.prototype.reduce.call(array, (col: any, set: any) => {
        var ret: any = [];
        col.forEach((a: any, idx: number) => {
            set.norm.forEach((b: any, id:number) => {
                ret.push(a.concat([b]));
            });
        });
        return ret;
    }, [[]]);
}

const Index: FC<{setFormRef: any}> = ({setFormRef}) => {
    const [resD, setResD] = useState<any>([]);
    const [rRow, setrRoe] = useState<any>([]);
    const [gDate, setgDate] = useState<any>([]);
    useImperativeHandle(setFormRef, () => ({
        setData: (data?: any) => {
            console.log(calcDescartes(data), 'lkkkkkkkkk', data);
            if(!data || data.length <= 0) return;
            setResD(data);
            const restData = calcDescartes(data);
            setgDate(restData);
            let row: any[] = [];
            let rowspan: number = restData.length;
            for (let n = 0; n < data.length; n++) {
                row[n] = parseInt(String(rowspan / data[n].norm.length))
                rowspan = row[n]
            }
            setrRoe(row);
        }
    }))
    const tdRow = (i: number) => resD.map((_: any, j: any) => {
        let td;
        if (i % rRow[j] === 0 && rRow[j] > 1) {
            td = <td rowSpan={rRow[j]} key={j}>{gDate[i][j].name}</td>
        } else if (rRow[j] === 1) {
            gDate[i] instanceof Array ? td = <td key={j}>{gDate[i][j].name}</td> : td = <td key={j}>{gDate[i].name}</td>
        }
        return td
    })
    const inpChange = debounce(({value} : {value: string}, i: number, k: number) => {
        console.log(gDate[i][0].name + '-' + gDate[i][1].name, publicTh[k], value)
    }, 200)
    return <Fragment>
        {
            resD.length ? <table className="spec_table" style={{margin: '20px 0 20px'}}>
                <thead>
                    <tr>
                        {
                            resD.map((th: any, k: number) => <th key={k}>{th.name}</th>)
                        }
                        {
                            publicTh.map((name: any, k: number) => <th key={k}>{name}</th>)
                        }
                    </tr>
                    {
                        gDate.map((_: any, i: any) => {
                            return (
                                <tr key={i}>
                                    {
                                        tdRow(i)
                                    }
                                    {
                                        publicTh.map((name: any, k: number) => <td key={k}>
                                            <Input onChange={({target}) => inpChange(target, i, k)} />
                                        </td>)
                                    }
                                </tr>
                            )
                        })
                    }
                </thead>
            </table> : <div style={{marginBottom: 20}}></div>
        }
    </Fragment>
}

export default Index;