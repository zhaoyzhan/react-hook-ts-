import {
	reRoot
} from './reducer-types';
import menu_list from '../utils/menu-list';
import {menuLists} from '../a-types/index';

export interface breads {
	path: string,
	name: string,
	key: string
}

const initState = {
	menu_list,
    child_list: [],
	selectKey: '',
	openkeys: [],
	collapsed: false,
	breadcrumbs: [],
	choseKey: ''
    // menu_list: localStorage.menu_list ? JSON.parse(localStorage.menu_list) : [],
    // fromRouter: sessionStorage.fromRouter ? sessionStorage.fromRouter : ''
};

/* action 对应的处理方法，用于更新state中的数据 */
const actDefault = (state: any) => state;

//路由切换
const changeSelectKey = (state: any, action: any) => {
	const {
		products
	} = action;
	let new_openKeys: any[] = [],
		breadList: breads[] = [],
        child_list: any[] = [],
		selectKey: string = '';
	set_openkeys([...state.menu_list], products, new_openKeys); //获取要打开的list
	get_f_route([...state.menu_list], products, child_list); //是否为非展示路由页面
    get_f_child([...state.menu_list], products, (!child_list.length && child_list) || []); //获取子页面
	get_bread([...state.menu_list], products, breadList);
	selectKey = getSelectKey([...state.menu_list], products)
	const new_list: any[] = [...new_openKeys, ...state.openkeys].reduce((res, cur) => { //去重
		(res.indexOf(cur) === -1) && res.push(cur);
		return res;
	}, []);
	return Object.assign({}, state, {
		selectKey: selectKey || 
		products,
		openkeys: new_list,
        child_list,
		breadcrumbs: breadList,
		choseKey: products
	});
}

//路由模式切换
const setCollapsed = (state: any, action: any) => {
	const {
		products
	} = action;
	return Object.assign({}, state, {
		collapsed: products,
		openkeys: products ? [] : state.openkeys
	});
}
//路由开合
const changeOpenKey = (state: any, action: any) => {
	const {
		products
	} = action;
	return Object.assign({}, state, {
		openkeys: [...products]
	})
}
//拥有子路由的路由集合
const set_openkeys = (list: menuLists[], tar: string, open_list: string[]) => {
	list.forEach((item: menuLists) => {
		if (item.keys && !!~item.keys.indexOf(tar)) {
			open_list.push(item.path);
			item.children && set_openkeys(item.children, tar, open_list);
		}
	})
}

//是否为非展示路由页面
const get_f_route = (list: menuLists[], route: string, childList:menuLists[]) => {
	const child = list.filter((item: menuLists) => item.keys && item.keys.indexOf(route) !== -1)
    child.length && child[0].children && child[0].children.forEach((item: menuLists) => {
        childList.push(item)
    })
}

//获取子页面
const get_f_child = (list: menuLists[], route: string, selectKeys: menuLists[]) => {
    const child = list.filter((item: menuLists) => route === item.path && item.children)
    child.length && child[0].children && child[0].children.forEach((item: menuLists) => {
        selectKeys.push(item)
    })
}


//设置左侧menu列表
const setMenuList = (state: any, action: any) => {
	const {
		products
	} = action;
	localStorage.setItem('menu_list', JSON.stringify(products));
	return Object.assign({}, state, {
		menu_list: products
	});
}

//设置用户信息
const setUserInfo = (state: any, action: any) => {
	const {
		products
	} = action;
	localStorage.setItem('menu_list', JSON.stringify(products.menus));
	localStorage.setItem('user_info', JSON.stringify(products));
	return Object.assign({}, state, {
		menu_list: products.menus,
		userInfo: products
	});;
}

//设置顶部按钮
const setTopBtn = (state: any, action: any) => {
	const {
		products
	} = action;
	sessionStorage.setItem('topBtn', JSON.stringify(products));
	return Object.assign({}, state, {
		topBtn: products
	});
}

//判断从哪个页面离开的
const setFromRouter = (state: any, action: any) => {
	const {
		products
	} = action;
	sessionStorage.setItem('fromRouter', products);
	return Object.assign({}, state, {
		fromRouter: products
	});
}
//获取面包屑
const get_bread = (menus: menuLists[], path: string, breadList: breads[]): void => {
	menus.forEach((item: menuLists) => {
		if(!!~path.indexOf(item.path)) {
			breadList.push({
				path: item.keys ? item.keys[0] : item.path,
				key: item.path,
				name: item.meta.title
			})
			if(item.path !== path && item.children) {
				const rest = item.children.filter((it: menuLists) => it.path === path)[0]
				if(rest.meta.for) {
					const restF = item.children.filter((it: menuLists) => it.path === rest.meta.for)[0]
					breadList.push({
						path: restF.path,
						key: restF.path,
						name: restF.meta.title
					})
				}
				breadList.push({
					path: rest.path,
					key: rest.path,
					name: rest.meta.title
				})
			}
		}
	})
}
//获取高粱
const getSelectKey = (menus: menuLists[], path: string): string => {
	let src: string = '';
	menus.forEach((item: menuLists) => {
		item.path === path && (src =  item.meta.for || item.path)
		!src && item.children && item.children.length && (item.children.forEach((it: menuLists) => {
			it.path === path && (src = it.meta.for || it.path)
		}))
	})
	return src;
}

const reducerFn = (state = initState, action: any) => {
	switch (action.type) {
        case reRoot.changeSelectKey:
			return changeSelectKey(state, action);
		case reRoot.changeOpenKey:
			return changeOpenKey(state, action);
		case reRoot.changeCollapsed:
			return setCollapsed(state, action);
		case reRoot.setMenuList:
			return setMenuList(state, action);
		case reRoot.setTopBtn:
			return setTopBtn(state, action);
		case reRoot.setUserInfo:
			return setUserInfo(state, action);
		case reRoot.setFromRouter:
			return setFromRouter(state, action);
		default:
			return actDefault(state);
	}
};

export default reducerFn;