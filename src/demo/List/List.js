import $ from 'jquery'
import {GET_LIST} from '../config/config.js'
import createItem from './createItem.js'
export default class List {
    constructor(app) {

        this.app = app;
        console.log(this.app)
        this.$el = $('<div>')
    }
    init() {
        //1,先获取数据  2， 渲染list列表   3，一次性append到 $("#app")
       this.loadData().then(data => {
          //填充this.$el这个空的DIV
          this.initItemList(data)
       }).then(()=>{
          //渲染
          this.render()
       })
    }
    //获取数据
    loadData() {
       //fetch 通过promise形式返回ajax
       return fetch(GET_LIST).then((result)=>{
            return result.json()
       })
    }
    //生成列表
    initItemList(data) {

        data.forEach(itemData => {
            //创建一个 Item 然后init
            let item = createItem(this,itemData);
            item.init();
        })
    }

    //渲染
    render() {
        //this.app.$el 就是 app.js传过来的 $("#app")
        this.app.$el.append(this.$el)
    }
}