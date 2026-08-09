const products = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 50000 },
    { name: "Tablet", price: 30000 },
    { name: "Monitor", price: 25000 }
];

products.sort((a, b) => b.price - a.price);

console.log(products);