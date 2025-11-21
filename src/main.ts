import { Product } from "./models/Product";
import { fetchAllProducts, fetchProductById } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";

async function displayFeaturedProducts() {
    console.log("Fetching Featured Products..");
    try{
        const productData = await fetchAllProducts()
        console.log(`Successfully fetched ${productData.length} Products!! `);
        productData.forEach((data) => {
            const product = new Product(data);
            product.displayDetails();

            const discountAmount = calculateDiscount(data.price, data.discountPercentage);
            const discountedPrice = product.getPriceWithDiscount();
            const taxAmount = calculateTax(discountedPrice, data.category);
            const finalPrice = discountedPrice + taxAmount;

            console.log(`Original Price: $${data.price.toFixed(2)}`);
            console.log(`Discount Applied: -$${discountAmount.toFixed(2)}(${data.discountPercentage})`);
            console.log(`Price After Discount: $${discountedPrice.toFixed(2)}`);
            console.log(`Tax: (${data.category === "groceries"?"3%":"5%"}) + $${taxAmount.toFixed(2)}`);
            console.log(`Original Price: $${data.price.toFixed(2)}`);
            console.log(`Final Price: $${finalPrice.toFixed(2)}`);
        });
    
    console.log("Fetching a specific product (ID: 1)...");
    const singleProductData = await fetchProductById(1);
    const singleProduct = new Product(singleProductData);
    singleProduct.displayDetails();
    console.log("Specific product loaded successfully!");

  } catch (error) {
    handleError(error);
  }

}
// Run the app
displayFeaturedProducts();
    
