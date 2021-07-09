import { list } from "./script.js";

export class Basket {
    _id;
    _list = [];
    _quantity = 0;
    _clear = 0;

    constructor(){
        this.autoID();
        this.initEvent();
    }

    addBasket(good){
        this._list.push(good);
        console.log(this._list);
        this.countQuantity(this._list);
        this.setQuantity();
    }

    countQuantity(goods){
       this._quantity = goods.length;
    }

    autoID(){
        if(this._id === undefined){
            this._id = Math.round(Math.random() * 10000 + 1);
        }
    }

    setQuantity(){
        let elQuantity = document.querySelector('.quantity-basket');
        elQuantity.innerHTML = this._quantity;
    }

    initEvent(){
        let elBtn = document.querySelector('.cart-button');
        elBtn.addEventListener('click', this.render);
    }

    render() {
        let elGood = document.querySelectorAll('.goods-item');
        console.log(this._list);
        for(let i = 0; elGood.length > i; i++){
            elGood[i].remove();
        }

        let elList = document.querySelector('.goods-list');

        for(let i = 0; list._basket._list.length > i; i++){
            let good =  `<div class="goods-item" data-id="${list._basket._list[i]._id}">
                            <h3>${list._basket._list[i]._title}</h3>
                            <p>${list._basket._list[i]._price}</p>
                            <button class = 'add-btn'>Delete</button>
                        </div>`;
            elList.insertAdjacentHTML('beforeend', good);
        }

        if(list._basket._list.length == list._basket._clear){
            let good =  `<div>Basket clear</div>`
            elList.insertAdjacentHTML('beforeend', good);
            list._basket._clear--;
        }
    }
}