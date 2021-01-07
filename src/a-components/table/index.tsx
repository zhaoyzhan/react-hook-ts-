import React, { FC, Fragment } from 'react';
import { Table } from 'antd';
import classnames from 'classnames';

interface Props {
    columns?: any[], 
    data?: any[], 
    classname?: string,
    select?: boolean,
    selected?: (strs: string[], lists: any[]) => void
}


const Index: FC<Props> = ({columns = [], data = [], classname, select = false, selected = (strs: string[], lists: any[]) => {}}) => {
    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            selected(selectedRowKeys, selectedRows)
        },
        // onSelect: (record: any, selected: any, selectedRows: any) => {
        //     console.log(record, selected, selectedRows);
        // },
        // onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
        //     console.log(selected, selectedRows, changeRows);
        // }
    };
    return <Fragment>
        {
            select ? <Table
                className={classnames(`${classname} default_table`)}
                columns={columns}
                dataSource={data}
                rowSelection={{...rowSelection}}
            /> : <Table
                className={classnames(`${classname} default_table`)}
                columns={columns}
                dataSource={data}
            />
        }
    </Fragment>
}

export default Index;