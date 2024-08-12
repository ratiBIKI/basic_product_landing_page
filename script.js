document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productlist");

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        displayProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
        productList.innerHTML = "Failed to load products. Please try again!";
      });
  }

  function displayProducts(products) {
    productList.innerHTML = ""; // Clear any existing elements
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>`;
      productList.appendChild(productElement);
    });
  }

  fetchProducts();
});
