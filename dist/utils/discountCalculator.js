export function calculateDiscount(price, discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Discount percentage must be between 0 and 100");
    }
    return Number((price * (discountPercentage / 100)).toFixed(2));
}
