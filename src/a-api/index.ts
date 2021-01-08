
// 店铺
import request from '../utils/request'

export interface lists {
    keyword: string,
    page: string | number,
    limit: string | number,
    token: string
}

// 店铺列表
export const shopList = (data: any) =>
  request({        
    url: '/product/index/infolist',
    method: 'post',
    data
  })

// 登录
export const Login = (data?: any) =>
  request({        
    url: '/auth/oauth/token',
    method: 'post',
    data: {
      ...data,
      contentType: '_formdata',
      loginT: true
    }
  })
export const NoticesNum = (data?: any) =>
  request({        
    url: '/scrm/notices/num',
    method: 'post',
    data: data || {}
  })