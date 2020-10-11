const URL = document.location.protocol + '//' + document.location.host + '/api'

// /api/products/	Returnerar en lista på samtliga produkter.
async function getAllProducts() {
    let response = await fetch(URL + '/products')
    let products = await response.json()
    return products
}

// /api/products/:id	Returnerar en enstaka produkt.
async function getSingleproduct(id) {
    let response = await fetch(URL + '/products/' + id)
    let singleproduct = await response.json()
    return singleproduct
}

// /api/products/	POST	Skapar en ny produkt, se produkt-modell.
async function createProduct(token, product) {
    let response = await fetch(URL + '/products/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': token
        },
        body: JSON.stringify(product)
    })
    return response
}

// /api/products/:id	PATCH	Uppdaterar produkt, se produkt-modell.
async function updateProduct(token, product) {
    let response = await fetch(URL + '/products/' + product._id, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            'Authorization': token
        },
        body: JSON.stringify(product)
    })
    return response
}

// /api/products/:id	DELETE	Tar bort en produkt med :id.
async function deleteProduct(token, product) {
    let response = await fetch(URL + '/products/' + product._id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': token
        },
        body: JSON.stringify(product)
    })
    return response
}

export default { getAllProducts, getSingleproduct, createProduct, updateProduct, deleteProduct }