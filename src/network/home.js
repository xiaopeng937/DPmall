import {request} from './request'
//请求轮播图数据
export function getHomeMultidata() {
    return request({
        url: '/home/multidata',
        method: "GET"
    })
}
//请求内容数据
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        },
        method: "GET"
    })
}