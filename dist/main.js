import { Product } from "./models/Product";
import { fetchAllProducts, fetchProductById } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";
async function start() {
    const app = document.getElementById("app");
    try {
        const productData = await fetchAllProducts();
        // Clear loading message
        app.innerHTML = `
      <div class="container">
        <header>
          <h1>E-Commerce System</h1>
        </header>
        <div class="grid" id="products"></div>
      </div>
    `;
        const grid = document.getElementById("products");
        productData.forEach((data) => {
            const product = new Product(data);
            const discountAmount = calculateDiscount(data.price, data.discountPercentage);
            const discountedPrice = product.getPriceWithDiscount();
            const taxAmount = calculateTax(discountedPrice, data.category);
            const finalPrice = discountedPrice + taxAmount;
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
        <div class="card-img">${data.title}</div>
        <div class="card-body">
          <div class="card-title">${data.title}</div>
          <div><strong>Category:</strong> ${data.category} | <strong>Brand:</strong> ${data.brand || "N/A"}</div>
          <div class="price-row"><span>Original Price:</span> <span class="original">$${data.price.toFixed(2)}</span></div>
          <div class="price-row"><span>Discount (${data.discountPercentage}%):</span> <span class="discount">-$${discountAmount.toFixed(2)}</span></div>
          <div class="price-row"><span>After Discount:</span> <span>$${discountedPrice.toFixed(2)}</span></div>
          <div class="price-row"><span>Tax:</span> <span>+$${taxAmount.toFixed(2)}</span></div>
          <div class="final-price"><span>Final Price:</span> <span>$${finalPrice.toFixed(2)}</span></div>
        </div>
      `;
            grid.appendChild(card);
        });
        // Required: Product ID 1 in console
        const single = await fetchProductById(1);
        new Product(single).displayDetails();
        console.log("Specific product loaded successfully!");
    }
    catch (error) {
        handleError(error);
        app.innerHTML = "<h2 style='color:white;text-align:center;'>Failed to load products</h2>";
    }
}
start();
