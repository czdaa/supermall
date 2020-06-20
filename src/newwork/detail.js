import {
  request
} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, service, iid) {
    this.title = itemInfo.title,
      this.desc = itemInfo.desc,
      this.newPrice = itemInfo.newPrice,
      this.oldPrice = itemInfo.oldPrice,
      this.discount = itemInfo.discount,
      this.discountBgcolor = itemInfo.discountBgColor,
      this.columns = columns,
      this.services = service,
      this.realprice = itemInfo.lowNowPrice,
      this.Images = itemInfo.topImages[0],
      this.iid = iid
  }
}