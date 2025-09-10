const products = [
  { id: 1, name: "Men's T-Shirt", price: 499 },
  { id: 2, name: "Women's Jeans", price: 999 },
  { id: 3, name: "Sneakers", price: 1499 },
  { id: 4, name: "Hoodie", price: 799 },
  { id: 5, name: "Jacket", price: 1999 }
];

const productList = document.getElementById("products");
const search = document.getElementById("search");

function displayProducts(items) {
  productList.innerHTML = items.map(p => `
    <div class="product-card">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    </div>
  `).join("");
}

search.addEventListener("input", e => {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  displayProducts(filtered);
});

displayProducts(products);
