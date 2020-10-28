<template>
    <div class="cart-button-wrapper" v-if="showCartButton">
        <img class="cart-button"
            :src="require('@/assets/img/cart-outline.svg')"
            @click="showHideCart()">
        <div class="amountBubble" v-if="getAmountInCart>0">{{ getAmountInCart }}</div>
    </div>
</template>

<script>
export default {
    name: 'CartButton',

    computed: {
        getAmountInCart() {
            return this.$store.getters.getAmountInCart
        },
        showCartButton() {
            return this.$store.state.showCartButton
        },
        showTheCart() {
            return this.$store.state.showCart
        }
    },
    methods: {
        // unSelectProduct() {
        //     this.$store.commit('setSelectedProduct', null)
        // },
        showHideCart() {
            this.$store.state.showCart = !this.$store.state.showCart
            this.$store.state.showLogIn = false
        },
    },
}
</script>

<style scoped lang="scss">
    .cart-button-wrapper {

position: relative;

        img.cart-button {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        &:hover {
            transform: scale(1.05);
        }
        &:focus {
            transform: scale(0.97);
        }
        }
        .amountBubble {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 0.6rem;
            font-size: 0.8rem;
            color: white;
            background-color: red;
            position: absolute;
            top: 1px;
            right: 1px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    // div.cart-button {
    //     width: 4rem;
    //     height: 4rem;
    //     background: chocolate;
    //     border-radius: 2rem;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }
</style>