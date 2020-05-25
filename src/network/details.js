import {request} from './request'

//轮播图
export function getDetailGoods(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

//商品信息
export class Goods {
    //构造器
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
        this.bgColor = itemInfo.discountBgColor
    }
}
//商家信息
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}

//参数
export class GoodsParam {
    constructor(info, rule) {
        this.img = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}

//推荐数据
export function getRecommend() {
    return request({
        url: 'recommend'
    })
}