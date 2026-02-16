// Home page starts
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => displayTrending(json));

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
fetch()
// Products page ends

