export default [{
	path: '/index',
	meta: {title: '首页', icon: 'icon-home', iconActive: 'icon-shop'},
	children: []
}, {
	path: '/shop',
	meta: {title: '店铺管理', icon: 'icon-shop'},
	keys: ['/shop/detail', '/shop/carousel', '/shop/navigation', '/shop/recommend', '/shop/publish','/shop/addCarousel'],
	children: [{
		path: '/shop/detail',
		children: [],
		meta: {title: '基础信息', icon: 'icon-javascript'}
	}, {
		path: '/shop/carousel',	
		children: [],
		meta: {title: '轮播图', icon: 'appstore'}
	},
	{
		path: '/shop/addCarousel',	
		children: [],
		meta: {title: '添加轮播图', icon: 'appstore',hidden:true, for: '/shop/carousel'}
	},
	 {
		path: '/shop/navigation',	
		children: [],
		meta: {title: '快捷导航', icon: 'appstore'}
	}, {
		path: '/shop/recommend',	
		children: [],
		meta: {title: '精品推荐', icon: 'appstore'}
	}, {
		path: '/shop/publish',	
		children: [],
		meta: {title: '发布店铺', icon: 'appstore'}
	}]
}, {
	path: '/goods',
	meta: {title: '商品管理', icon: 'icon-goods'},
	keys: ['/goods/sortadd', '/goods/add', '/goods/list'],
	children: [{
		path: '/goods/sortadd',
		children: [],
		meta: {title: '新增分类', icon: 'icon-javascript'}
	}, {
		path: '/goods/add',	
		children: [],
		meta: {title: '新增商品', icon: 'appstore'}
	},
	{
		path: '/goods/list',	
		children: [],
		meta: {title: '商品列表', icon: 'appstore'}
	}]
}, {
	path: '/order',
	meta: {title: '订单与配送', icon: 'icon-order'},
	keys: ['/order/manage', '/order/delivery', '/order/template', '/order/reviews'],
	children: [{
		path: '/order/manage',
		children: [],
		meta: {title: '订单管理', icon: 'icon-javascript'}
	}, 
	{
		path: '/order/orderDetail',
		children: [],
		meta: {title: '订单详情', icon: 'icon-javascript',hidden:true, for: '/order/manage'}
	}, 
	{
		path: '/order/delivery',	
		children: [],
		meta: {title: '批量发货', icon: 'appstore'}
	},
	{
		path: '/order/template',	
		children: [],
		meta: {title: '配送模版', icon: 'appstore'}
	}
	// , {
	// 	path: '/order/reviews',	
	// 	children: [],
	// 	meta: {title: '评论管理', icon: 'appstore'}
	// }
	]
}, {
	path: '/service',
	meta: {title: '售后与客服', icon: 'icon-kefu'},
	keys: ['/service/handle'],
	children: [{
		path: '/service/handle',
		children: [],
		meta: {title: '售后处理', icon: ''}
	}]
}, {
	path: '/market',
	meta: {title: '营销中心', icon: 'icon-yingxiao'},
	keys: ['/market/coupon', '/market/liveshop', '/market/livemanage', '/market/editCoupon', '/market/livecreate'],
	children: [{
		path: '/market/coupon',
		children: [],
		meta: {title: '优惠券', icon: ''}
	}, {
		path: '/market/editCoupon',	
		children: [],
		meta: {title: '编辑优惠券', icon: '', hidden:true, for: '/market/coupon'}
	}, {
		path: '/market/liveshop',
		children: [],
		meta: {title: '直播商品管理', icon: ''}
	}, {
		path: '/market/livemanage',
		children: [],
		meta: {title: '直播间管理', icon: ''}
	}, {
		path: '/market/livecreate',
		children: [],
		meta: {title: '创建直播间', icon: '', hidden:true, for: '/market/livemanage'}
	}]
}, {
	path: '/setting',
	meta: {title: '设置中心', icon: 'icon-yingxiao'},
	keys: ['/setting/personal', '/setting/secure', '/setting/changepassword', '/setting/changephone', '/setting/changewx'],
	children: [{
		path: '/setting/personal',
		children: [],
		meta: {title: '个人设置', icon: ''}
	}, {
		path: '/setting/secure',	
		children: [],
		meta: {title: '安全设置', icon: ''}
	}, {
		path: '/setting/changepassword',	
		children: [],
		meta: {title: '修改密码', icon: '', hidden:true, for: '/setting/secure'}
	}, {
		path: '/setting/changephone',	
		children: [],
		meta: {title: '换绑手机', icon: '', hidden:true, for: '/setting/secure'}
	}, {
		path: '/setting/changewx',	
		children: [],
		meta: {title: '换绑微信', icon: '', hidden:true, for: '/setting/secure'}
	}]
}]