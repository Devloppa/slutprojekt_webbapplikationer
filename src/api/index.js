const URL = document.location.protocol + '//' + document.location.host + '/api'

// /api/products/	GET	Returnerar en lista på samtliga produkter.
// /api/products/:id	GET	Returnerar en enstaka produkt.
// /api/products/	POST	Skapar en ny produkt, se produkt-modell. Enbart tillgänglig för admins
// /api/products/:id	PATCH	Uppdaterar produkt, se produkt-modell. Enbart tillgänglig för admins
// /api/products/:id	DELETE	Tar bort en produkt med :id. Enbart tillgänglig för admins
// /api/orders	GET	Returnerar en lista på samtliga ordrar för admins, och ägda orders för inloggad användare.
// /api/orders	POST	Skapar en ny order, se order-modell.

async function getAllProducts() {
    let response = await fetch(URL + '/products')
    let products = await response.json()
    return products
}

async function getSingleproduct(id) {
    let response = await fetch(URL + '/products/' + id)
    let singleproduct = await response.json()
    return singleproduct
}

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