<template>
    <div class="checkout-container">
        <Header :CurrentLocation="'Checkout'"/>
        <ul class="items">
            <li class="item"    v-for="(item, index) in getProductsInCart"
                                :key="index">
                <img v-bind:src="require('@/assets/img/' + item.product.imgFile)" />
                <h3>{{item.product.title}}</h3>
                <p>{{item.product.price}} kr</p>
                <p>x {{item.amount}}</p>
                <button @click="addToCart(item.product)"><img v-bind:src="require('@/assets/img/add-circle-outline.svg')" /></button>
                <button @click="removeFromCart(item.product)"><img v-bind:src="require('@/assets/img/remove-circle-outline.svg')" /></button>
                <p>subtotal:</p>
                <h5>{{item.amount*item.product.price}} kr</h5>
            </li>
        </ul>
        <div class="summery">
            <div class="sum">
                <p>Total:  </p>
                <h3>{{getSum}} kr</h3>
                <p> incl. vat</p>
            </div>
            <h3 class="choosePM">Choose Payment Method</h3>
            <div class="paymentM">
                <form @submit.prevent="submit">
                    <div class="card">
                        <input type="radio" id="card" name="paymentMethod" value="card">
                        <label for="card">Card</label>
                    </div>
                    <div class="bankTrasfer">
                        <input type="radio" id="bankTransfer" name="paymentMethod" value="bankTransfer">
                        <label for="bankTransfer">Bank transfer</label>
                    </div>
                    <div class="kidney">
                         <input type="radio" id="kidney" name="paymentMethod" value="kidney">
                        <label for="kidney">Kidney</label>
                    </div>
                </form>
            </div>
        </div>
        <button type="submit" @click="submit">SUBMIT ORDER</button>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'Checkout',

    data() { return {
        order: {
            items: [], // item._ids only
            _id: "thisDoesntMatter"
        }
    }},

    components: {
        Header
    },

    computed: {
        getProductsInCart() {
            return this.$store.state.productsInCart
        },
        getCurrentuser() {
            return this.$store.state.currentUser
        },
        getSum() {
            let sum = 0
            for ( let itemInCart of this.$store.state.productsInCart) {
                sum += itemInCart.amount*itemInCart.product.price
            }
            return sum
        }
    },

    methods: {
        submit() {
            if (this.$store.state.productsInCart.length > 0) { 
                // adding item _ids to order.items
                for(let itemInCart of this.$store.state.productsInCart) {
                    if(itemInCart.amount > 1) {
                        for (let i = 0; i < itemInCart.amount; i++) {
                            this.order.items.push(itemInCart.product._id)
                        }
                    } else {
                        this.order.items.push(itemInCart.product._id)
                    }
                }
                this.$store.dispatch('addOrder', this.order)
                this.$router.push('myaccount')
            }
        },
        addToCart(product) {
            this.$store.commit('addProductToCart', product)
        },
        removeFromCart(product) {
            this.$store.commit('removeProductFromCart', product)
        },
    },

    created() {
        this.$store.commit('restoreSession')
        this.$store.state.showCartButton = false
    }
}
</script>

<style scoped lang="scss">
.checkout-container {
    -webkit-box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.75);
    padding-top: 6rem;
    margin: auto;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1000px;
    min-height: 100vh;

    .items {
        -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #EBEBEB;
        min-width: 40rem;
        max-width: 700px;
        margin: 0;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        border-radius: 2rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
        .item:nth-child(even) {
            background-color: white;
        }
        .item {
            height: 5rem;
            margin: 0;
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
            min-width: 35rem;
            background-color: #F1F1F1;
            -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
            box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
            img {
                max-width: 3rem;
                max-height: 3rem;
            }
            button {
                background-color: transparent;
                border: none;
                color: none;
                margin: 0;
                padding: 0;
                max-height: 2rem;
                max-width: 2rem;
                img {
                    height: 2rem;
                    width: 2rem;
                }
            }
        }
    }
    .summery {
        -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #EBEBEB;
        min-width: 40rem;
        max-width: 700px;
        max-height: 10rem;
        margin: 0;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        border-radius: 2rem;
        .sum, .choosePM, .paymentM {
            margin: 0;
            padding: 1rem;
            height: 10rem;
            min-width: 35rem;
            max-width: 600px;
            font-size: 1.2rem;
            -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
            box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        }
        .sum {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            p {
                margin-left: 1rem;
                margin-right: 1rem;
            }
            p, h3 {
                margin-top: 0;
                margin-bottom: 0;
            }
        }
        .sum,.paymentM {
            background-color: #F1F1F1;
        }
        .choosePM {
            background-color: white;
            font-weight: normal;
        }
        form {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
        }
    }
    button {
        -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
        font-size: 1.3rem;
        background-color: white;
        padding: 0;
        margin-top: 3rem;
        margin-bottom: 3rem;
        height: 4rem;
        width: 30rem;
        border: none;
        border-radius: 2rem;

    }
}
ul, li {
    padding: 0;
    margin: 0;
}
button {
    outline: 0;
    cursor: pointer;
        &:hover {
            transform: scale(1.01);
        }
        &:focus {
            transform: scale(0.99);
        }
        img {
            &:hover {
                transform: scale(1.06);
            }
            &:focus {
                transform: scale(0.95);
            }

        }
}

</style>