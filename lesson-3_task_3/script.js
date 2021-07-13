import {makeGETRequest, API_URL} from './api.js';

class Good {
    constructor(id, title, price) {
        this._id = id;
        this._title = title;
        this._price = price;
    }

    render() {
        return `<div class="goods-item" data-id="${this._id}">
                    <h3>${this._title}</h3>
                    <p>${this._price}</p>
                    <button class = 'add-btn'>Add to  basket</button>
                </div>`;
    }
}

class GoodList {
    _goods;
    _basket;
    _total = 0;


    constructor (goods) {
        this.fetchGoods();
        // this._goods = goods;
        this._$goodsListContainer = document.querySelector('.goods-list');
        this._basket = this.createBasket();
    }

    fetchGoods() {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this._goods = JSON.parse(goods);
            console.log(this._goods);
            this._goods.forEach(element => this.renderGoodsList([new Good(element.id_product, element.product_name, element.price)]));
        })
    }

    renderGoodsList(goods) {
        let goodsList = goods.map(
                item => item.render()
            ).join(' ');
    
        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
        this.initEvent();
    }

    initEvent(){
        let elBtn = document.querySelectorAll('.add-btn');
        for(let i = 0; elBtn.length > i; i++){
            elBtn[i].addEventListener('click', this.addBasket);
        }
    }

    createBasket(){
        return new Basket();
    }

    addBasket(i){

        console.log(i.target.parentNode.getAttribute('data-id'));
        console.log(list._goods);
        for(let b = 0; list._goods.length > b; b++){

            console.log(list._goods[b]);

            if(i.target.parentNode.getAttribute('data-id') == list._goods[b].id_product){
                list._basket.addBasket(list._goods[b]);
                list.getTotalSum(list._goods[b].price);
            }
        }
        list.setTotalSum();

        console.log(list._basket);
    }

    getTotalSum(price){
        this._total += price;
    }

    setTotalSum(){
        let elQuantity = document.querySelector('.total-basket');
        elQuantity.innerHTML = this._total;
    }


}

import {Basket} from './basket.js';

export const list = new GoodList()

// list._goods;

// list.renderGoodsList();
// ==========================================================================

// [
//     new Good(1, 'Bread', 15),
//     new Good(2, 'Eggs', 20),
//     new Good(3, 'Beer', 45),
//     new Good(4, 'Fish', 98),
// ]





