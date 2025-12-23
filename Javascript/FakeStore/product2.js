async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const productList = document.getElementById("divPro");
    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("row");
      d.innerHTML = `<div class="col-3 h-100">
            <img
              src="${element.image}"
              alt=""
              class="object-fit-contain w-100 h-100 rounded proI"
            />
          </div>
          <div class="col-9">
            <div class="h-50 p-2 col-9">
              <div class="fw-bold fs-5">${element.title}</div>
              <div class="fw-semibold">
                ${element.rating.rate}/5 (${element.rating.count})
              </div>
              <div class="fw-semibold fs-5">₹ ${element.price * 100}</div>
              <div class="mb-1">${element.description.slice(0,620)}</div>
              <div class="d-flex gap-3  mt-2 ">
                <button class="btn btn-outline-warning">Add to Cart</button>
                <button class="btn btn-warning">Buy Now!</button>
              </div>
            </div>
          </div>
          `;
      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}
getProducts();
