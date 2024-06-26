import { apiConect } from "./apiConect.js";

const form = document.querySelector('.product__insertion__form')
const resetButton = document.querySelector('.product__insertion__form__button__reset')

async function createProduct(event) {
  event.preventDefault()
  const image = document.querySelector('#form__img').value
  const productName = document.querySelector('#form__name').value
  const price = document.querySelector('#form__price').value
  const priceUSD = Number(price).toLocaleString("en-US", {style:"currency", currency:"USD"})
  try {
    await apiConect.createProduct(image, productName, priceUSD)
    alert("Produto criado com sucesso!")
    form.reset() // Limpa o formulário após submissão bem-sucedida
  } catch(e) {
    alert(e)
  }
}

function resetForm(event) {
  event.preventDefault()
  form.reset() // Limpa o formulário
}

form.addEventListener('submit', createProduct)
resetButton.addEventListener('click', resetForm)
