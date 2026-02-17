// Home page starts
const loadTrending = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => displayTrending(json));
};

const displayTrending = (trendingData) => {
  const trending = document.getElementById("trending");
  trending.innerHTML = "";

  trendingData.filter((data) => {
    if (data.rating.rate > 4.6 && data.rating.count > 300) {
      const trendCard = document.createElement("div");
      trendCard.innerHTML = `
    <div class="card bg-base-100 max-w-96 shadow-sm">
        <div class="h-72  bg-gray-400">
            <img class="h-full mx-auto items-center" src="${data.image}" alt="${data.category}" />
        </div>
        <div class="p-5 space-y-4">
            <div class="flex justify-between">
                <p class="text-[#4F39F6] bg-[#4F39F620] px-2 rounded-xl">${data.category}</p>
                <p><span class="text-yellow-500 mr-1"><i class="fa-solid fa-star"></i></span>${data.rating.rate}
                    (${data.rating.count})</p>
            </div>
            <h2 class="card-title">${data.title}</h2>
            <p class="font-bold">$${data.price}</p>
            <div class="flex justify-between">
                <button class="btn"><i class="fa-solid fa-circle-info"></i>Details</button>
                <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>Buy Now</button>
            </div>
        </div>
    </div>
        `;
      trending.appendChild(trendCard);
    }
  });
};
// Home page ends

// Products page starts
 const  showProducts = () => {
  document.getElementById("products-section").classList.remove("hidden")
  document.getElementById("main-section").classList.add("hidden")
 }
 const  showMain = () => {
  document.getElementById("products-section").classList.add("hidden")
  document.getElementById("main-section").classList.remove("hidden")
 }


const loadCategory = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};

const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => displayAllProducts(json));
};

const loadProductsByCategory = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllProducts(data));
};

const displayAllProducts = (products) => {
  const allProducts = document.getElementById("all-products");
  allProducts.innerHTML = "";

  products.forEach((product) => {
    productCard = document.createElement("div");
    productCard.innerHTML = `
    <div class="card bg-base-100 max-w-96 shadow-sm">
        <div class="h-72  bg-gray-400">
            <img class="h-full mx-auto items-center" src="${product.image}" alt="${product.category}" />
        </div>
        <div class="p-5 space-y-4">
            <div class="flex justify-between">
                <p class="text-[#4F39F6] bg-[#4F39F620] px-2 rounded-xl">${product.category}</p>
                <p><span class="text-yellow-500 mr-1"><i class="fa-solid fa-star"></i></span>${product.rating.rate}
                    (${product.rating.count})</p>
            </div>
            <h2 class="card-title">${product.title}</h2>
            <p class="font-bold">$${product.price}</p>
            <div class="flex justify-between">
                <button class="btn"><i class="fa-solid fa-circle-info"></i>Details</button>
                <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>Buy Now</button>
            </div>
        </div>
    </div>
    `;

    allProducts.append(productCard);
  });
};

const displayCategory = (categories) => {
  const productCategory = document.getElementById("product-category");
  productCategory.innerHTML = `<button onclick="loadAllProducts()" class="btn btn-outline">All</button>`;

  categories.forEach((category) => {
    const str = encodeURIComponent(category);

    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = `<button onclick="loadProductsByCategory(&quot;${str}&quot;)" class="btn btn-outline capitalize">${category}</button>`;

    productCategory.appendChild(categoryBtn);
  });
};

// Products page ends

loadTrending();
loadCategory();
loadAllProducts();
