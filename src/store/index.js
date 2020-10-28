import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    productList: [],
    awaitedOrder: [],
    currentUser: null, // add role to current user for admin/customer
    //   {
    //     _id: '6b521d3f-3d15...' // add server side
    //     email: 'johan.kivi@zocom.se',
    //     password: '$$$hashed password$$$',
    //     name: 'Johan Kivi',
    //     role: 'admin', // or customer
    
    //     adress: {
    //         street: 'Tokitokvägen 3',
    //         zip: '123 45',
    //         city: 'Tokberga'
    //     },
    //     orderHistory: [ orderId1, orderId2, ... ]
    // } 
    productsInCart: [
        // {
        //   amount: Number,
        //   product: {}
        // }
    ],
    order: {
        // _id: 123,
        // timeStamp: Date.now(), 
        // status: 'inProcess',
        // items: [ <productId1>, <productId2>, ... ],
        // orderValue: 999
    },
    showCart: false,
    showLogIn: false,
    showProduct: false,
    showCartButton: true,
    selectedProduct: null,
  },
  getters: {
    getAmountInCart: state => {
      return state.productsInCart.map(item => item.amount).reduce((a, b) => a + b, 0)
    }
  },
  mutations: {
    restoreSession(state) {
      if (  sessionStorage.getItem('sinus-token') && 
            sessionStorage.getItem('sinus-user')) {
        state.currentUser = JSON.parse(sessionStorage.getItem('sinus-user'))
      }
      if (sessionStorage.getItem('sinus-cart')) {
        state.productsInCart = JSON.parse(sessionStorage.getItem('sinus-cart'))
      }
      state.showCart = false
      state.showLogIn = false
      state.showCartButton = true
    }, 
    saveSession(state) {
      sessionStorage.setItem('sinus-user', JSON.stringify(state.currentUser))
      sessionStorage.setItem('sinus-cart', JSON.stringify(state.productsInCart))
    },
    setProductList(state, payload) {
      state.productList = payload
    },
    setProductsInCart(state, payload) {
      state.productsInCart = payload
    },
    setUser(state, payload) {
      state.currentUser = payload
    },
    setOrder(state, payload) {
      state.order = payload
    },
    addProductToCart(state, productToAdd) {
      let productExists = false
      for (let cartItem of state.productsInCart) {
        if (cartItem.product._id === productToAdd._id) {
          cartItem.amount++
          productExists = true
        }
      }
      if (!productExists) {
        let newProduct = {}
        newProduct.product = productToAdd
        newProduct.amount = 1
        state.productsInCart.push(newProduct)
      }
      sessionStorage.setItem('sinus-cart', JSON.stringify(state.productsInCart))
    },
    removeProductFromCart(state, productToRemove) {
      let index = state.productsInCart.findIndex(item => item.product._id === productToRemove._id)
      for (let cartItem of state.productsInCart) {
        if (cartItem.product._id === productToRemove._id) {
          if (cartItem.amount > 1) {
            cartItem.amount--
          } else {
            state.productsInCart.splice(index, 1)
          }
        }
      }
      sessionStorage.setItem('sinus-cart', JSON.stringify(state.productsInCart))
    },
    setSelectedProduct(state, payload) {
      state.selectedProduct = payload
    },
    changeCartVisibility(state, payload) {
      state.showCart = payload
    },
    changeLoginVisibility(state, payload) {
      state.showLogIn = payload
    }
  },



  actions: {

    async loadProductList(context) {
      let products = await API.getAllProducts()
      context.commit('setProductList', products)
    },

    async logInUser(context, payload) {
      let response = await API.logInUser(payload.email, payload.pass)
      if(response.status == 200){
        sessionStorage.setItem('sinus-token', response.token)
        sessionStorage.setItem('sinus-user', JSON.stringify(response.user))
        context.commit('setUser', response.user)
        return response.status
      } else {
        return response.status
      }
    },

    async registerUser(_, userToRegister) {
      let response = await API.registerUser(userToRegister)
      return response
    },

    async getSingleproduct(context, productId) {
      let response = await API.getSingleproduct(productId)
      if (response.status == 200){
        context.commit('setSelectedProduct', response)
      }
      return response.status
    },

    async createProduct(context, product) {
      let token = sessionStorage.getItem('sinus-token')
      let response = await API.createProduct(token, product)
      if (response.status == 200) {
        response = await context.dispatch('loadProductList')
      }
      return response
    },

    async updateProduct(context, updatedProduct) {
      let token = sessionStorage.getItem('sinus-token')
      let response = await API.updateProduct(token, updatedProduct)
      console.log(response.status);
      
      if (response.status == 200) {
        context.dispatch('loadProductList')
      }
        // update product in cart
      for (let itemInCart of context.state.productsInCart) {
        if (itemInCart.product._id == updatedProduct._id) {
          itemInCart.product = updatedProduct
        }
      }
      sessionStorage.setItem('sinus-cart', JSON.stringify(context.state.productsInCart))
      return response.message
    },

    async deleteProduct(context, product) {
      let token = sessionStorage.getItem('sinus-token')
      let response = await API.deleteProduct(token, product)
      if (response.status == 200) {
        context.dispatch('loadProductList')
      }
      return response
    },

    async getAllOrders() {
      if(sessionStorage.getItem('sinus-token')) {
        let token = sessionStorage.getItem('sinus-token')
        let response = await API.getAllOrders(token)
        return response
      } else {
        return []
      }
      
    },

    async addOrder(context, order) {
      let token = sessionStorage.getItem('sinus-token')
      let response = await API.addOrder(token, order)
      context.state.awaitedOrder = context.state.productsInCart
      context.state.order = []
      context.state.productsInCart = []
      context.commit('saveSession')
      return response
    },

  },
  modules: {
  }
})