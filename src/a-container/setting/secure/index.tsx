import React, { useMemo, FC } from 'react';
import useBread from "../../../a-components/breadcrumbs/use-bread";
import Info from '../component/info';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Transition from '../../../a-components/transition';
import './index.scss';

interface LiProps {
    label: string,
    value: string,
    btn: string,
    path: string
}

const Li: FC<LiProps> = ({label, value, btn, path}) => {
    return <div className="settig_secure_list align_center">
        <img src="" style={{width: 22, height: 22, borderRadius: '50%', marginRight: 18}} alt=""/>
        <label className="area_head" style={{marginRight: 32}}>{label}</label>
        <div className="align_center">
            <span style={{color: '#9FA2A8'}}>{value}</span>
            <Link to={path}>
                <Button type="link" style={{color: '#3C5BDA'}}>{btn}</Button>
            </Link>
        </div>
    </div>
}

const Index = () => {
    const useInfo = useMemo(() => <Info />, [])
    return <div className="padding_22_18">
        { useBread() }
        <div className="modules">
            { useInfo }
            <Li 
                label="登录密码"
                value="定期更换有助于账号安全"
                btn="修改密码"
                path="/setting/changepassword"
            />
            <Li 
                label="绑定手机"
                value="153****3553"
                btn="换绑手机"
                path="/setting/changephone"
            />
            <Li 
                label="绑定微信"
                value="可用绑定的微信扫码登录"
                btn="换绑微信"
                path="/setting/changewx"
            />
        </div>
    </div>
}

export default Transition(Index);