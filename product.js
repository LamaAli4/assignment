function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
// Example
var products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
];
console.log("Total Price:", calculateTotalPrice(products));
// Task 5: Email validation function
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Example
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
