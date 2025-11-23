# E-Commerce Product Management System
## TypeScript and Advanced JavaScript - SBA

This project is a small but functional E-commerce Product Management System built with TypeScript. It was created as part of the TypeScript and Advanced JavaScript Skills-Based Assessment. The goal was to use TypeScript features, OOP, async API calls, utility modules, and custom error handling to build a realistic product data workflow.

# Features
1. Product Class
- A Product class that matches the structure of the DummyJSON Products API.
- Methods that display product details and calculate the price after discount.

2. Utilities
- discountCalculator: Computes the dollar amount discounted from the original price.
- taxCalculator: Applies a tax rate based on product category
    - Standard tax: 4.75%
    - Grocery tax: 3%

3. API Integration
- Fetches product data using the DummyJSON Products API
- Uses async/wait with proper try/catch blocks
- Convert APi data into Product instances before processing

4. Main Application
- Displays each products's details, discount amount, tax amount, and final calculated price.
- Demonstrates OOP concepts like classes, methods, and clean separation of logic

# Reflection 

1. How did you implement TypeScript features and OOP principles in your project?

- I used TypeScript throughout the project to add strong typing and make the code safer and easier to understand. I created a Product class that holds all the product properties from the API, along with methods like displayDetails() and getPriceWithDiscount(). Using a class helped me keep all product related logic in one place. I also created separate utility files for calculating discounts and taxes, and each function has clear types for inputs and outputs. The API service uses async functions with typed return values, so I always know what kind of data to expect. Overall, the combination of TypeScript and OOP helped make the project more organized and predictable.

2. What challenges did you encounter and how did you overcome them?

- One challenge was structuring the project into separate folders while keeping everything connected. At first, imports were confusing, but I fixed this by double checking file paths and making sure each module only handled one responsibility. Another challenge was working with the DummyJSON API data, since it contains more fields than I needed. I focused only on the necessary properties and typed them inside the class so the rest of the code stayed clean. I also ran into errors when handling asynchronous functions. Some fetch calls failed, so I added try/catch blocks and a custom error class to provide clearer error messages. Testing each part one by one helped me understand what was going wrong and how to fix it.

3. How did you handle asynchronous operations and error management?

- I used async/await to fetch product data from the DummyJSON API. Each API request was wrapped in a try/catch block so the app could respond properly if something went wrong. Instead of letting the program crash, errors were passed to a custom error handler that prints clear messages. This made debugging much easier. By combining asynchronous functions with structured error handling, the program can still run smoothly even when an API call fails.

