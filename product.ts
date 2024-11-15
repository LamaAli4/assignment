// Task 4: Product interface and total price calculation
interface Product {
  name: string;
  price: number;
}
function calculateTotal(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

// Example
const product: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
console.log("Total Price:", calculateTotal(product));

// Task 5: Email validation function
function isValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Example
console.log(isValid("test@example.com")); // true
console.log(isValid("invalid-email")); // false
