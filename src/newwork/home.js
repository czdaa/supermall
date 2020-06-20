//将不同页面的请求经过一层封装防止，可以使项目维护起来更方便
import {
  request
} from './request'


//首页的数据请求函数 获取轮播图数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
//请求商品数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}