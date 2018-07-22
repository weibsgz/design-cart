//购物车 单例模式

class Cart {
    constructor() {
        this.list = []
    }
    add(data) {
        this.list.push(data)
        console.log(this.list)
    }
    del(id) {
        this.list = this.list.filter(item => {
            if (item.id === id) {
                return false
            }
            return true
        })
        console.log(this.list)
    }
    getList() {
        return this.list.map(item => {
            return item.name
        }).join('\n')
    }
}

// 返回单例
let getCart = (function () {
    let cart
    return function () {
        if (!cart) {
            cart = new Cart();
        }
        return cart
    }
})()

export default getCart