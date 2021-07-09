//Массив товаров. Если в массив добавить товар, то для этого товара будет построен DOM, товар отобразится в каталоге.
items = [
    {
        name: 'Кроссовки',
        price: '4500',
        pic: 'img/sneakers.jpg',
        id: 1000,
        quantity: 0,
    },
    {
        name: 'Брюки',
        price: '2000',
        pic: 'img/pants.jpg',
        id: 1001,
        quantity: 0,
    },
    {
        name: 'Футболка',
        price: '800',
        pic: 'img/t-shirt.jpg',
        id: 1002,
        quantity: 0,
    },
];

 //Функция строит каталог.
 createCatalog();

arBasket = [];
arElem = [];
var price = 0;

function createCatalog(){
    var elemDiv = document.getElementById('js-items');
    arElem = [];
    for(i = 0; items.length > i; i++){
        elemCatalog = "<div class='goods'>\n" +
                "<div class='picture'\n>" +
                    "<img class='js-pic' src='" + items[i].pic + "'" + "alt='кроссовки'>\n"+
                "</div>\n" +
                "<div class='desc'>\n" +
                    "<h4 class='js-name'>" + items[i].name + "</h4>\n" +
                    "<p>Цена: <span class='js-price'>"+ items[i].price +"</span></p>\n" +
                    // "<div class='block_btn'>\n" +
                    //     "<button class='btn btn-min'><img src='img/arrow-back-page.svg' alt='back'></button>\n" +
                    //     "<div class='js-quantity'>0</div>\n" +
                    //     "<button class='btn btn-plus'><img src='img/arrow-next-page.svg' alt='next'></button>\n" +
                    // "</div>\n" +
                    "<button data-product-id = " + items[i].id + " id='js-btn-buy' class='btn btn-buy'>Купить</button>\n" +
                "</div>\n" +
            "</div>\n"
        arElem.push(elemCatalog);
        elemDiv.innerHTML = arElem.join('');
    }
}

btnBuy = document.querySelectorAll('.btn-buy');

for(i = 0; btnBuy.length > i; i++){
    btnBuy[i].addEventListener('click', addBasket);
}

function addBasket(i){ //добавление в корзину
    var elemDiv = document.getElementById('js-items-basket');
    var productId = i.target.getAttribute('data-product-id');

    for(i = 0; items.length > i; i++){
        if(items[i].id == productId){
            arBasket.push(items[i]);
        }
    }
    for(i = 0; arBasket.length > i; i++){
        if(!arBasket[i].add){
            arBasket[i].add = 1;
            elemBasket = "<div class='goods'>\n" +
                                "<div class='picture'\n>" +
                                    "<img class='js-pic' src='" + arBasket[i].pic + "'" + "alt='кроссовки'>\n"+
                                "</div>\n" +
                                "<div class='desc'>\n" +
                                    "<h4 class='js-name'>" + arBasket[i].name + "</h4>\n" +
                                    "<p>Цена: <span class='js-price'>"+ arBasket[i].price +"</span></p>\n" +
                                "</div>\n" +
                            "</div>\n"
            arElem.push(elemBasket);
            elemDiv.innerHTML = arElem.join('');
        } 
    }

    getAllPrice(); //общая стоимость

    function getAllPrice(){
        var elAllPrice = document.querySelector('.js-all-price');
        for(i = 0, price = 0; arBasket.length > i; i++){      
            price = +arBasket[i].price + price;
        }
        elAllPrice.innerHTML = price;
    }
}

