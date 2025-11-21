"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(data) {
        this.data = data;
    }
    displayDetails() {
        console.log(`Product: ${this.data.title}`);
        console.log(`ID: ${this.data.id}`);
        console.log(`description: ${this.data.description}`);
        console.log(`category: ${this.data.category}`);
        console.log(`price: ${this.data.price}`);
        console.log(`discountPercentage: ${this.data.discountPercentage}`);
        console.log(`rating: ${this.data.rating}`);
        console.log(`Brand: ${this.data.brand}`);
    }
    getPriceWithDiscount() {
        const discountAmount = (this.data.price * this.data.discountPercentage) / 100;
        return Number((this.data.price - discountAmount).toFixed(2));
    }
    getRawData() {
        return this.data;
    }
}
exports.Product = Product;
