import {Item} from './Item.js'

//工厂模式

export default function createItem(list,itemData) {
    if(itemData.discount) { //如果有折扣 discount 是1
      itemData = createDiscount(itemData)
    }
    return new Item(list,itemData)
}

function createDiscount(itemData) {
    //普通写法
   // itemData.name = itemData.name + '【折扣】';
   // itemData.price = itemData.price * .8  //打八折

   // return itemData


   //代理
   return new Proxy(itemData,{
      get : function(target,key) {
        if(key == 'name') {
            return `${target[key]}【折扣】` 
        }

        if(key == 'price') {
            return target[key] * .8  
        }

        return target[key]

      }
   })
}