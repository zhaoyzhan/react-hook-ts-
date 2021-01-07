import React from 'react';

import {
	Menu,
} from 'antd';
import {
	Link,
    withRouter
} from 'react-router-dom';

import {
	connect
} from 'react-redux';

import {
	reRoot
} from '../../a-reducer/reducer-types';
import './index.scss';
import {metas} from '../../a-types/index';

const {
	SubMenu
} = Menu;

let timer = false;

interface getState {
    collapsed: boolean,
    selectKey: string,
    openkeys: string[],
    menu_list: any,
    choseKey: string
}

// 最终要交给redux管理的所有变量
const mapStoreStateToProps = ({roote}: {roote: getState}) => ({
	menu_list: roote.menu_list,
	selectKey: roote.selectKey,
	openkeys: roote.openkeys,
	collapsed: roote.collapsed,
    choseKey: roote.choseKey
});

const mapDispatches = {
	changeSelectKey: (products: string) => ({
		type: reRoot.changeSelectKey,
		products
	}),
	changeOpenKey: (products: string[]) => ({
		type: reRoot.changeOpenKey,
		products
	}),
	changeCollapsed: (products: boolean) => ({
		type: reRoot.changeCollapsed,
		products
	})
}

const pro = (): any => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, 100)
	})
}

interface getProps {
    changeSelectKey: any,
    collapsed: boolean,
    changeOpenKey: any,
    selectKey: string,
    openkeys: string[],
    menu_list: any,
    choseKey: string,
    history: any
}

const init_route = (key: string, fn: any) => {
	if (timer) return;
	timer = true;
	async function setAsync() {
		await pro()
		fn(key)
		timer = false;
	}
	setAsync()
}
const Menus: React.SFC<getProps> = ({changeSelectKey, collapsed, changeOpenKey, selectKey, openkeys, menu_list, choseKey, history}) => {
    const changeKeyRef: any = React.useRef(null);
    const collapsedFlag: any = React.useRef(true);
    React.useEffect(() => {
        changeKeyRef.current = changeSelectKey;
        collapsedFlag.current = collapsed;
        return () => {
            changeKeyRef.current = null;
            collapsedFlag.current = true;
        }
    });
    //选择路由

    const menu_click = React.useCallback((e: any) => {
        choseKey !== e.key && init_route(e.key, changeKeyRef.current);
    }, [choseKey])
    //多级路由开合
    const open_change = (e: any) => {
        changeOpenKey(e);
    }
    React.useEffect(() => {
        init_route(window.location.pathname, changeKeyRef.current)
        history.listen(({pathname}: {pathname: string}) => {
            init_route(pathname, changeKeyRef.current)
        });
    }, [history, changeKeyRef])
    return (
        <div className={`${collapsed ? 'is_collapsed' : 'no_collapsed'} route_container`}>
            <div className="logo">
                <img src={require('../../assets/images/logo.png')} alt=""/>
                <span>开店啦</span>
            </div>
            <Menu
                selectedKeys={[selectKey]}
                defaultOpenKeys={openkeys}
                openKeys={openkeys}
                mode="inline"
                inlineCollapsed={collapsed}
                // onSelect = {(e) => menu_select(e)}
                onClick={menu_click}
                onOpenChange={open_change}
                theme="light"
                style={{
                    background: '#fff',
                    color: '#0E1726',
                    width: '220px'
                }}
            >
                {
                    set_route(menu_list)
                }
            </Menu>
        </div>
    );
}

//循环路由列表
const set_route = (list: any[]) => {
    return list.map(item => {
        return !item.meta.hidden ? set_child(item) : '';
    })
}
//判断路由是否有子列表
const set_child = ({
    children,
    path,
    meta,
    hide
}: {
    children: any[],
    path: string,
    meta: metas,
    hide: boolean
}) => {
    if (children && children.length) {
        return <SubMenu
                    key={path}
                    title={set_subtitle(meta)}
                >
                    {
                        children.map((item: {
                            children: any[],
                            path: string,
                            meta: metas,
                            hide: boolean
                        }) => {
                            return !item.meta.hidden ? set_child(item) : '';				
                        })
                    }
                </SubMenu>
    } else {
        if (hide) return '';
        return <Menu.Item key={path}>
                    <Link to={path} style={{display: 'flex', alignItems: 'center',}}>
                        {meta.icon && <TIocn type={meta.icon}/>}
                        {/* {meta.iconActive && <TIocnActive type={meta.iconActive}/>} */}
                        <TSpan title={meta.title} />
                    </Link>
                </Menu.Item>
    }
}

//拥有子列表的路由标题     
const set_subtitle = ({
    icon,
    title
}: {
    icon: string,
    title: string
}) => {
    return <span style={{display: 'flex', alignItems: 'center',}}>
                <TIocn type={icon}/> 
                <TSpan title={title} />
            </span>
}
//路由icon
const TIocn = ({
    type
}: {type: string}) => <i style={{fontSize: '24px', color: '#000000'}} className={`iconfont ${type} route_icon`}></i>;
//路由icon
// const TIocnActive = ({
//     type
// }: {type: string}) => <i style={{fontSize: '24px', color: '#000000', display: 'none'}} className={`iconfont ${type} active_icon`}></i>;
//路由标题
const TSpan = ({
    title
}: {title: string}) => <span className="route_name" style={{fontSize: '14px', fontWeight: 400, marginLeft: '10px', color: '#0E1726'}}>{title}</span>;


export default withRouter(connect(mapStoreStateToProps, mapDispatches)(Menus));