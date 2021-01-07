import React, { useMemo, useCallback } from 'react';
import useBread from "../../../a-components/breadcrumbs/use-bread";
import PublicForm from './public-form';
import './index.scss';

const Index = () => {
    const callBack = useCallback(() => {
        console.log('yes')
    }, []);
    const useForm = useMemo(() => <PublicForm callBack={ callBack }/>, [callBack]);
    return <div className="padding_22_18">
        { useBread() }
        <div className="modules">
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#313030', lineHeight: '21px', marginBottom: 20 }}>换绑手机</h3>
            { useForm }
        </div>
    </div>
}

export default Index;