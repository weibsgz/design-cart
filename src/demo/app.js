import $ from 'jquery'
import ShoppingCart from './ShoppingCart/ShoppingCart.js'
import List from './List/List.js'
export default class App {
    constructor(id) {
        this.$el = $('#' + id)
    }

    //初始化购物车
    initShoppingCart() {
        console.log(this) //App {$el:$("#app")}
        let shoppingCart = new ShoppingCart(this) //this相当于App的实例
        shoppingCart.init()
    }

    //初始化列表
    initList() {
        let list = new List(this);
        list.init();
    }

    init() {
      this.initShoppingCart();
      this.initList();
    }
}