import { apiConect } from "./apiConect.js"

const product = document.querySelector('.product')


function showAndDeleteProducts(image, productName, price, id) {
  const productShelf = document.querySelector('.product__shelf')
  const productItem = document.createElement('div');
  productItem.classList.add('product__shelf__item');
  productItem.innerHTML = `<div class="product__shelf__item">
  <div class="product__shelf__item__img">
    <img src="${image}" alt="gameboy">
  </div>
  <div class="product__shelf__item__info">
    <p class="product__shelf__item__info__name">
      ${productName}
    </p>
    <p class="product__shelf__item__info__price">
      ${price}
    </p>
  </div>
  <ion-icon name="trash-bin" class="product__shelf__item__bin" id="trash-bin" data-id="${id}"></ion-icon>
  </div>`

  productShelf.appendChild(productItem);

  const trashBin = productItem.querySelector('.product__shelf__item__bin');
  trashBin.addEventListener('click', async function() {
    const idProduto = this.getAttribute('data-id');
      await apiConect.apiDeleteProduct(idProduto);
      productItem.remove();
  });

  return productShelf;
}


async function showProductsList() {
  try {
  const productList = await apiConect.apiShowProductsList()
  productList.forEach(element => showAndDeleteProducts(element.image, element.productName, element.price, element.id))
  } catch (e) {
    alert("Não foi possível carregar os produtos")
  }
}

showProductsList()

