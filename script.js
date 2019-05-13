"use strict";
const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;
class ProductList {
    constructor() {
        this.products = [];
        this._init();
    }
    _getProducts() {
        fetch(`${API}/catalogData.json`).then(result => {
            return result.json();
        }).then(data => {
            this.products = [...data];
            this.render();
        }).catch(error => {
            console.log(error);
        })
    }
    _init() {
        this.render();
        this._getProducts();
    }
    render() {
        const block = document.querySelector('.products');
        this.products.forEach(product => {
            const prod = new Product(product);
            block.insertAdjacentHTML('beforeend', prod.render());
        })
    }
}
class Product {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.id = product.id_product
            , this.title = product.product_name
            , this.price = product.price
            , this.img = img
    }
    render() {
        return `<div class="product-item">
                    <img src="${this.img}" alt="${this.title}">
                    <h3>${this.title}</h3>
                    <p>Цена: ${this.price} рублей</p>
                    <button class="addProduct" type="button">Добавить в корзину</button>
                </div>`;
    }
}
let products = new ProductList();
console.log(products);
const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;
