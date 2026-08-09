function getTotalStock(products) {
    return products.reduce((total, product) => {
        return total + product.stock;
    }, 0);
}

const products = [
    { name: "Laptop", stock: 5 },
    { name: "Phone", stock: 10 },
    { name: "Tablet", stock: 7 }
];

console.log(getTotalStock(products));