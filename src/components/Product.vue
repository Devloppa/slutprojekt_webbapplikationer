<template>
    <div class="product-container">
        <div class="transparent-layer"
                @click="unSelectProduct(selectedProduct)"></div>
        <div class="product">
            <img class="add-to-cart"
                    :src="require('@/assets/img/add-circle-outline.svg')" 
                    @click="addToCart(selectedProduct)"> 
            <img class="product-img"
                    :src="require('@/assets/img/' + selectedProduct.imgFile)" />
            <h2 class="title">{{ selectedProduct.title }}</h2> 
            <h4 class="shortDesc">{{ selectedProduct.shortDesc }}</h4>
            <p class="price">{{ selectedProduct.price }} SEK</p>
            <p class="longDesc">{{ selectedProduct.longDesc }}</p>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    computed: {
        selectedProduct() {
            return this.$store.state.selectedProduct
        },
    },
    methods: {
        unSelectProduct() {
            this.$store.commit('setSelectedProduct', null)
        },
        addToCart(product) {
            this.$store.commit('addProductToCart', product)
            console.log("cart: ")
            console.log(this.$store.state.productsInCart)
        },
    }
}
</script>

<style scoped lang="scss">
div.product-container {
    width: 1000px;
    height: 100%;
    z-index: 6;
    position: absolute;
    display: flex;
    justify-content: center;

    div.transparent-layer {
    top: 0;
    left: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 10;
    position: fixed;
    }
    div.product {
        background: #EBEBEB;
        position: absolute;
        z-index: 15;
        width: 36rem;
        height: 20rem;
        margin: 8rem auto;
        padding: 2rem;
        border-radius: 2rem;
        display: grid;
        grid-template-areas: 
            ". . . add-img"
            "product-img title title ."
            "product-img short . ."
            "product-img price . ."
            "product-img long long ."
            ". long long .";
        grid-template-columns: 4fr 2fr 1fr 1fr;
        grid-template-rows: 3rem 3rem 2rem 2rem 6rem 3rem;
        -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);

        img.add-to-cart {
            cursor: pointer;
            grid-area: add-img;
            width: 3.5rem;
            height: 3.5rem;
            color: black;
        }
        img.add-to-cart:hover {
            width: 3.6rem;
            height: 3.6rem;
        }
        img.add-to-cart:active {
            width: 3.5rem;
            height: 3.5rem;
        }
        img.product-img {
            grid-area: product-img;
            width: 15rem;
            display: flex;
            justify-self: flex-end;
            align-self: center;
            margin-right: 1rem;
        }
        h2.title {
            grid-area: title;
            text-align: left;
        }
        h4.shortDesc {
            grid-area: short;
            text-align: left;
        }
        p.price {
            grid-area: price;
            text-align: left;
        }
        p.longDesc {
            grid-area: long;
            text-align: left;
            font-size: 0.9rem;
        }
    }
}
@media screen and (max-width: 980px) {
    div.product-container {
        max-width: 100vw;
    }
}
</style>