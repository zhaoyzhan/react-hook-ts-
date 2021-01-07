import React, {useCallback} from 'react';
import {breads} from '../../a-reducer/root-reducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
    withRouter
} from "react-router-dom";
import './index.scss';

const mapStateToProps = ({roote}: {roote: any}) => ({
    breadcrumbs: roote.breadcrumbs
})
const mapDispatchToProps = (dispatch: Dispatch): {} => ({
})

const Index: React.SFC<{breadcrumbs: breads[], history?: any}> = ({breadcrumbs, history}) => {
    const handleClick = useCallback((type: boolean, path: string) => {
        if(!type) return;
        history.push(path);
    }, [history]);
    return (
        <div className="bread_crumbs">
            <ul>
                {
                    breadcrumbs.map((item: breads, index: number) => <li 
                        className={breadcrumbs.length > 1 && index !== breadcrumbs.length - 1 ? 'is_active' : ''}
                        key={item.key}>
                        <p onClick={() => handleClick(breadcrumbs.length > 1 && index !== breadcrumbs.length - 1, item.path)}>
                            {item.name}
                        </p>
                        {
                            index < breadcrumbs.length - 1 ? <span>/</span> : ''
                        }
                    </li>)
                }
            </ul>
        </div>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));