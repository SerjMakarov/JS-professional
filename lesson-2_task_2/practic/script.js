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

    constructor (goods) {
        this._goods = goods;
        this._$goodsListContainer = document.querySelector('.goods-list');
        this._basket = this.createBasket();
    }

    renderGoodsList() {
        let goodsList = this._goods.map(
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
        for(let b = 0; list._goods.length > b; b++){
            if(i.target.parentNode.getAttribute('data-id') == list._goods[b]._id){
                list._basket.addBasket(list._goods[b]);
                console.log(list._goods[b]);
            }
        }
    }
}

import {Basket} from './basket.js';

export const list = new GoodList([
    new Good(1, 'Bread', 15),
    new Good(2, 'Eggs', 20),
    new Good(3, 'Beer', 45),
    new Good(4, 'Fish', 98),
])

list._goods;

list.renderGoodsList();
// ==========================================================================







