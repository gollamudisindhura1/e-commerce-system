"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
async function displayFeaturedProducts() {
    console.log("Fetching Featured Products..");
    try {
        const productData = await (0, apiService_1.fetchAllProducts)();
        console.log(`Successfully fetched ${productData.length} Products!! `);
        productData.forEach((data) => {
            const product = new Product_1.Product(data);
            product.displayDetails();
            const discountAmount = (0, discountCalculator_1.calculateDiscount)(data.price, data.discountPercentage);
            const discountedPrice = product.getPriceWithDiscount();
            const taxAmount = (0, taxCalculator_1.calculateTax)(discountedPrice, data.category);
            const finalPrice = discountedPrice + taxAmount;
            console.log(`Original Price: $${data.price.toFixed(2)}`);
            console.log(`Discount Applied: -$${discountAmount.toFixed(2)}(${data.discountPercentage})`);
            console.log(`Price After Discount: $${discountedPrice.toFixed(2)}`);
            console.log(`Tax: (${data.category === "groceries" ? "3%" : "4.75%"}) + $${taxAmount.toFixed(2)}`);
            console.log(`Original Price: $${data.price.toFixed(2)}`);
            console.log(`Final Price: $${finalPrice.toFixed(2)}`);
        });
        console.log("Fetching a specific product (ID: 1)...");
        const singleProductData = await (0, apiService_1.fetchProductById)(1);
        const singleProduct = new Product_1.Product(singleProductData);
        singleProduct.displayDetails();
        console.log("Specific product loaded successfully!");
    }
    catch (error) {
        (0, errorHandler_1.handleError)(error);
    }
}
// Run the app
displayFeaturedProducts();
