import React, {useState, useMemo, Fragment, useCallback, useRef} from 'react';
import NoNorms from './public/no-norms';
import IsNorms from './public/is-norms';
import NormForm from './public/norm-form';
import { Switch, Button } from 'antd';
import './index.scss';

const Index = () => {
    const [flag, setFlag] = useState<boolean>(true)
    const onChange = (val: boolean) => {
        setFlag(val)
    }
    const formDataref: any = useRef()
    const setFormRef: any = useRef()
    const handleFormData = useCallback(() => {
        const data = formDataref.current.handleData();
        setFormRef.current.setData(data)
    }, [formDataref])
    const NoNormsComp = useMemo(() => <NoNorms />, [])
    const NormFormComp = useMemo(() => <NormForm setFormRef={setFormRef}/>, [setFormRef])
    const RefreshForm = useMemo(() => <Fragment>
        <Button type="primary" style={{width: 134}} onClick={handleFormData}>刷新规格项目表</Button>
        { NormFormComp }
    </Fragment>, [NormFormComp, handleFormData])
    const IsNormsComp = useMemo(() => 
        <IsNorms component={RefreshForm} formDataref={formDataref}/>, 
        [RefreshForm, formDataref])
    return <div className="modules goods_add_norms">
        <h2 className="goods_add_public_title">规格</h2>
        <div style={{paddingLeft: 50, marginTop: 18}}>
            <div className="norms_switch">
                <span>启用商品规格</span>
                <Switch defaultChecked onChange={onChange} />
            </div>
            <p>
                1. 第一个规格为主规格，拖动规格可调整规格显示顺序, 更改规格及规格项后请点击下方的【刷新规格项目表】来更新数据。<br /> 
                2. 每一种规格代表不同型号，例如颜色为一种规格，尺寸为一种规格，如果设置多规格，手机用户必须每一种规格都选择一个规格项，才能添加购物车或购买。
            </p>
        </div>
        {
            !flag ? NoNormsComp : IsNormsComp
        }
    </div>
}

export default Index;