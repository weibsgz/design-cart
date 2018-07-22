import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart.js'
export class Item {
    constructor(list,data) {
        this.list = list;
        this.data = data; //list.js data数组的每一项
        this.$el = $('<div>');
        this.cart = getCart()  //单列

        this.text = '加入购物车'
    }
    init() {
        this.initContent();
        this.initBtn();
        this.render();
    }

    initContent () {
        let $el = this.$el;
        let data = this.data; 
        $el.append($(`<p>名称:${data.name}</p>`))
        $el.append($(`<p>价格:${data.price}</p>`))
    }

    initBtn() {
        let $el = this.$el;
        let $btn = $('<button>'+this.text+'</button>')
        let _this = this;
        $btn.click(function() {
            if ($(this).text() === '加入购物车') {
                _this.addToCartHandle()
                $(this).text('从购物车移除')
            }
            else {
                _this.deleteFromCartHandle()
                 $(this).text('加入购物车')
            }
            
        })

        $el.append($btn)
    }

    addToCartHandle() {
      this.cart.add(this.data)
    }

    deleteFromCartHandle() {
       this.cart.del(this.data.id)
    }


    render() {
        this.list.$el.append(this.$el)
    }
}