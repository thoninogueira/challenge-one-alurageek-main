async function apiShowProductsList() {
  const endpoint = await fetch('http://localhost:3000/products')
  const convertedEndpoint = await endpoint.json()
  return convertedEndpoint
}

async function createProduct(image, productName, price) {
  const endpoint = await fetch('http://localhost:3000/products', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      image: image,
      productName: productName,
      price: price
    })
  })

  if(!endpoint.ok) {
    throw new Error('Não foi possível adcionar novo produto')
  }
  
  const convertedEndpoint = await endpoint.json()
  return convertedEndpoint
}

async function apiDeleteProduct(idProduto) {
  try {
  const deleteProduct = await fetch(`http://localhost:3000/products/${idProduto}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  })
} catch(error) {
  alert('Erro ao excluir produto')
}

  return deleteProduct
}

export const apiConect = {
  apiShowProductsList,
  createProduct,
  apiDeleteProduct  
}


