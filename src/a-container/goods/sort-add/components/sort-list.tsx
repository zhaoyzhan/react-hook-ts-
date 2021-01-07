import React, {useState, Fragment, useMemo, useRef, useImperativeHandle, FC, useCallback} from 'react';
import { Table, Button } from 'antd';
import {operat, dateI, dataS} from './types';
import Confirm from '../../../../a-components/confirm';
import Modals from './modals';
import './index.scss';

const tableData: dataS[] = [
    {
        id: 1,
        shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
        num: 60,
        key: 1,
        name: 'shop1',
        children: [{
            id: 11,
            shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
            num: 42,
            key: 11,
            name: 'shop1-1',
        }, {
            id: 12,
            key: 12,
            shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
            num: 30,
            name: 'shop1-2',
        }, {
            id: 13,
            key: 13,
            shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
            num: 30,
            name: 'shop1-3',
        }],
    }, {
        id: 2,
        key: 2,
        shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
        num: 32,
        name: 'shop2',
    }, {
        id: 10,
        key: 10,
        shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
        num: 2,
        name: 'shop3',
    }
];

const Fdata: dateI[] = [
    {
        id: 1,
        shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
        num: 60,
        key: 1,
        name: 'shop1'
    }, {
        id: 2,
        key: 2,
        shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
        num: 32,
        name: 'shop2',
    }, {
        id: 10,
        key: 10,
        shopImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
        num: 2,
        name: 'shop3',
    }
]
const Index: FC<{compRef: any}> = ({compRef}) => {
    const [modalType, setModalType] = useState('')
    const visibleRef: any = useRef()
    const expandedRowRender = (record: dateI, index: number, indent: number, expanded: boolean) => {
        if(expanded) {
            return <Table
                className="sort_second_table"
                columns={getColumns(0)}
                dataSource={tableData[index]['children'] || []}
                showHeader={false}
                pagination={false}
            />
        } else {
            return ''
        }
    }
    const handleOpera = useCallback((type: string) => {
        switch (type) {
            case operat.TWOADD:
                setModalType(type)
                visibleRef.current.changeVisible(true)
                break;
            case operat.UP:
                
                break;
            case operat.DOWN:
                
                break;
            case operat.EDIT:
                setModalType(type)
                visibleRef.current.changeVisible(true)
                break;
            case operat.DEL:
                console.log('operate.del')
                break;
            default:
                break;
        }
    }, [])
    const handleDel = useCallback((type: string) => {
        return <Confirm 
            onConfirm={() => handleOpera(type)} 
            context={<Button type="link">删除</Button>}/>
    }, [handleOpera])
    const getColumns = useCallback((type: number):{}[] => (
        [
            {
                title: '商品图片',
                dataIndex: 'shopImg',
                key: 'shopImg',
                width: '20%',
                align: 'center',
                className: "sort_table_img",
                render: (src: string) => {
                    return (
                        <img style={{width: '60px', height: '60px'}} src={src} alt=""/>
                    )
                }
            }, {
                title: '商品名称',
                dataIndex: 'name',
                align: 'left',
                key: 'name',
                className: "sort_table_name",
                render: (name: string, record: any) => (
                    <div>
                        <p>{name}</p>
                        <span>({record.num})</span>
                    </div>
                )
            }, {
                title: '操作',
                width: '40%',
                align: 'center',
                className: "sort_table_operat",
                key: 'id',
                render: (row: any, record: any) => {
                    return (
                        <div className="sort_operat_btns" >
                            {
                                type ? <Button onClick={() => handleOpera(operat.TWOADD)} type="link">添加商品二级分类</Button> : ''
                            }
                            <Button onClick={() => handleOpera(operat.UP)} type="link">上移</Button>
                            <Button onClick={() => handleOpera(operat.DOWN)} type="link">下移</Button>
                            <Button onClick={() => handleOpera(operat.EDIT)} type="link">编辑</Button>
                            {handleDel(operat.DEL)}
                        </div>
                    )
                }
            }
        ]
    ), [handleOpera, handleDel])
    useImperativeHandle(compRef, ()=> ({
        setVisible: (flag: boolean) => {
            setModalType(operat.ADD)
            visibleRef.current.changeVisible(flag)
        }
    }))
    const Modal = useMemo(() => <Modals modalType={modalType} visibleRef={visibleRef}/>, [modalType, visibleRef])
    return (
        <Fragment>
            <Table
                className="sort_table default_table"
                columns={getColumns(1)}
                dataSource={Fdata}
                expandable={{
                    expandedRowRender,
                    expandIcon: ({ expanded, onExpand, record }) =>
                        expanded ? (
                            <div className="closeBtn" onClick={e => onExpand(record, e)}>闭合</div>
                        ) : (
                            <div className="closeBtn" onClick={e => onExpand(record, e)}>展开</div>
                    )
                }}
            />
            {Modal}
        </Fragment>
    )
}

export default Index;