async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
   const productList= document.getElementById("productRow")
    data.forEach((element) => {
        
      const d = document.createElement("div");
      d.classList.add("col-4", "p-2");
      d.innerHTML = `
         <div class="card border border rounded shadow p-2">
              <div class="h-50">
                <img
                  src="${element.image}"
                  alt="${element.title}"
                  class="object-fit-contain w-100 h-100 rounded"
                />
                <div class="h-50 p-2">
                  <div class="fw-bold fs-5">${element.title.slice(0,30)}...</div>
                  <div class="fw-semibold">${element.rating.rate}/5 (${element.rating.count})</div>
                  <div class="fw-semibold fs-5">₹ ${element.price*100}</div>
                  <div class="mb-1">
                 ${element.description.slice(0,50)}...                  </div>
                  <div class="d-flex gap-3 justify-content-center mt-2 flex-call">
                    <button class="btn btn-outline-warning">Add to Cart</button>
                    <button class="btn btn-warning">Buy Now!</button>
                  </div>
                </div>
              </div>`;
              productList.appendChild(d);

    });
  } catch (error) {
    console.log(error.message);
  }
}
getProducts();

