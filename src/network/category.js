import { request } from './request'
//分类
//左边导航栏
export function getCategory() {
  return request({
    url: '/category'
  })
}

//获取中间内容
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
//内容
export function getSortDetails(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}