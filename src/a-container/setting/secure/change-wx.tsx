import React, { useMemo, useCallback, useState, FC } from 'react';
import useBread from "../../../a-components/breadcrumbs/use-bread";
import PublicForm from './public-form';
import { Button } from 'antd';
import './index.scss';

const Scan: FC<{ isReturn: () => void }> = ({ isReturn }) => {
    return <div style={{ marginTop: 30 }} className="flex_column_center">
        <img 
            src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg" 
            style={{ width: 200, height: 200, marginBottom: 18, boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.1)', borderRadius: 4 }} 
            alt=""/>
        <p style={{ lineHeight: '20px', color: '#0E1726', marginBottom: 30 }}>请使用新的微信号扫一扫验证</p>
        <Button style={{width: 110}} onClick={ isReturn } type="primary">返回上一步</Button>
    </div>
}

const Index = () => {
    const [status, setStatus] = useState<number>(0);
    const callBack = useCallback(() => {
        setStatus(1);
        console.log('yes');
    }, []);
    const isReturn = useCallback(() => {
        setStatus(0);
    }, [])
    const useForm = useMemo(() => <PublicForm callBack={callBack}/>, [callBack]);
    const useScan = useMemo(() => <Scan isReturn={isReturn}/>, [isReturn])
    return <div className="padding_22_18">
        { useBread() }
        <div className="modules">
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#313030', lineHeight: '21px', marginBottom: 20 }}>换绑微信</h3>
            { status === 0 ? useForm : useScan }
        </div>
    </div>
}

export default Index;