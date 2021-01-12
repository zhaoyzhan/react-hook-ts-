import React, { useRef, useEffect } from 'react';
import { Login, NoticesNum } from '../../a-api';
import { Button, Input, message } from 'antd';
import Transition from '../../a-components/transition';

const Index = () => {
    const refCount = useRef<any>(null);
    const refPass = useRef<any>(null);
    const handleSub = async (): Promise<void> => {
        if(!refCount.current.state.value || !refPass.current.state.value) {
            message.warning('请输入账号或者密码')
            return;
        }
        try {
            const data: any = await Login({
                account: refCount.current.state.value,
                password: refPass.current.state.value,
                grant_type: 'employee_pwd'
            })
            console.log(data, ';;;;;;')
            sessionStorage.setItem('token', data['access_token'])
        } catch (error) {
            
        }
    }
    const handleMsg = (): void => {
        if(!sessionStorage.token) {
            message.warning('尚未登录')
            return;
        }
        NoticesNum()
    }
    useEffect(() => {
        console.log('process', process.env)
    })
    return <div className="padding_22_18">
        <Input style={{width: 270}} ref={refCount} placeholder="请输入账号"/>
        <br />
        <br />
        <br />
        <Input style={{width: 270}} ref={refPass} placeholder="请输入密码"/>
        <br />
        <br />
        <br />
        <Button onClick={handleSub}>点击登录</Button>
        <br />
        <br />
        <br/>
        <Button onClick={handleMsg}>获取消息</Button>
    </div>
}

export default Transition(Index);