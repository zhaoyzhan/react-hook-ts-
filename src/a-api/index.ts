
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