export interface ProductData{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    brand: string;
}

export class Product {
    constructor(private data: ProductData){}

    displayDetails(): void{
        console.log(`Product: ${this.data.title}`);
        console.log(`ID: ${this.data.id}`);
        console.log(`description: ${this.data.description}`);
        console.log(`category: ${this.data.category}`);
        console.log(`price: ${this.data.price}`);
        console.log(`discountPercentage: ${this.data.discountPercentage}`);
        console.log(`rating: ${this.data.rating}`);
        console.log(`Brand: ${this.data.brand}`);
    }

    getPriceWithDiscount(): number{

        const discountAmount = (this.data.price * this.data.discountPercentage)/100;
        return Number((this.data.price - discountAmount).toFixed(2))
    }

    getRawData(): ProductData {
        return this.data;
    }


}
