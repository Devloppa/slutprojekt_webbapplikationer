const URL=document.location.protocol+'//'+document.location.host+'/api'

// /api/auth/	POST	Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header.
// /api/register/	POST	Registrerar en user enligt User-modellen.
// /api/products/	GET	Returnerar en lista på samtliga produkter.
// /api/products/:id	GET	Returnerar en enstaka produkt.
// /api/products/	POST	Skapar en ny produkt, se produkt-modell. Enbart tillgänglig för admins
// /api/products/:id	PATCH	Uppdaterar produkt, se produkt-modell. Enbart tillgänglig för admins
// /api/products/:id	DELETE	Tar bort en produkt med :id. Enbart tillgänglig för admins
// /api/orders	GET	Returnerar en lista på samtliga ordrar för admins, och ägda orders för inloggad användare.
// /api/orders	POST	Skapar en ny order, se order-modell.

async function logInUser(emailToSend, pass) {
    let response = await fetch(URL + '/auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({    
            email : emailToSend,
            password : pass
        })
    })
    let status = response.status
    let tokenAndUser = await response.json() // returns status 403 for wrong user
    tokenAndUser.status = status
    return tokenAndUser                      // returns {token: and user:}
}

async function registerUser(user) {
    let response = await fetch(URL + '/register/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const data = await response
    return data.json()
}

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
        method : 'POST',
        headers : {
            "Content-Type": "application/json",
            'Authorization' : token
        },
        body : JSON.stringify(product)
    }) 
    return response // message:  product: 
}

async function updateProduct(token, product) {
    let response = await fetch(URL + '/products/' + product._id, {
        method : 'PATCH',
        headers : {
            "Content-Type": "application/json",
            'Authorization' : token
        },
        body : JSON.stringify(product)
    }) 
    return response // status: 200 for success 400 for error, message: , data: updated product if status 200
}

async function deleteProduct(token, product) {
    let response = await fetch(URL + '/products/' + product._id, {
        method : 'DELETE',
        headers : {
            "Content-Type": "application/json",
            'Authorization' : token
        },
        body : JSON.stringify(product)
    }) 
    return response  // status: 200 for success and 400 for error, message: 
}

async function getAllOrders(token) {
    let response = await fetch(URL + '/orders', {
        headers: {'Authorization' : token}
    })
    return response.json()
}

async function addOrder(token, order) {
    let response = await fetch(URL + '/orders', {
        method: 'POST',
        headers: {
            'Authorization' : token,
            "Content-Type": "application/json"
    },
        body: JSON.stringify(order)
    })
    return response.json()
}

export default {getAllProducts, getSingleproduct, logInUser, registerUser, createProduct, updateProduct, deleteProduct, getAllOrders, addOrder}