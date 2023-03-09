const selectProduct = document.getElementById("numberProduct");
const contentContainer = document.getElementById("content");


selectProduct.addEventListener("change",async () => {
    let valueProductSelect = selectProduct.value;
    fetchAPI(valueProductSelect).then((productFromApi) => {
        productFromApi.data.forEach(product => {
            let productContainer = document.createElement('p');
            productContainer.innerHTML = product.name;
            contentContainer.appendChild(productContainer);
        });
    });
});

window.addEventListener("load", (event) => {
    fetchAPI(1).then((data) => {
        let contentChild = document.createElement('p');
        contentChild.innerHTML = data.code;
        contentContainer.appendChild(contentChild);
    });
  });


