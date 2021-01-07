import React from 'react';
import '../personal/index.scss';

const Index = () => {
    React.useEffect(() => {
        console.log('lllll')
    })
    return <div style={{ marginBottom: 30 }} className="flex_column_center setting_personal_infohead">
        <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2369017631,3935728806&fm=26&gp=0.jpg" style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 18 }} alt=""/>
        <p>微信名称</p>
        <p>用户ID：231331311</p>
    </div>
}

export default Index;