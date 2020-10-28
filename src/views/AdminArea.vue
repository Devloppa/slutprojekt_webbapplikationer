<template>
  <div class="admin-area-container">
    <Header :CurrentLocation="'Admin Area'"/>
    <button class="create-button" @click="createMode">
      Create Product
    </button>
    <div class="create-product-container" v-if="activateCreateMode">
      <div class="create-product">
        <img class="exit" :src="require('@/assets/img/close-circle-outline.svg')"
        @click="exitCreateMode">
        <div class="product-input-container">
          <input type="text" v-model="product.title" placeholder="title" />
          <input type="number" v-model="product.price" placeholder="price" />
          <input type="text" v-model="product.shortDesc" placeholder="Short description" />
          <textarea type="text" v-model="product.longDesc" placeholder="Long description"></textarea>
          <button class="add-button" @click="createProduct">Add Product</button>
        </div>
        <div class="product-in-create-container">
          <article class="product-in-create">
          <img v-if="displayImgCreate" v-bind:src="require('@/assets/img/' + product.imgFile)" />
        
        </article>
        <select v-on:change="showImgCreate" v-model="product.imgFile">
          <option value="hoodie-ash.png">hoodie-ash.png</option>
          <option value="hoodie-fire.png">hoodie-fire.png</option>
          <option value="hoodie-ocean.png">hoodie-ocean.png</option>
          <option value="skateboard-generic.png">skateboard-generic.png</option>
          <option value="skateboard-greta.png">skateboard-greta.png</option>
          <option value="wheel-rocket.png">wheel-rocket.png</option>
          <option value="wheel-spinner.png">wheel-spinner.png</option>
          <option value="wheel-wave.png">wheel-wave.png</option>
        </select>
        </div>
      </div>
    </div>
    <div class="update-product-container" v-if="activateUpdateMode">
      <div class="update-product">
        <img class="exit" :src="require('@/assets/img/close-circle-outline.svg')"
        @click="exitUpdateMode">
        <div class="product-input-container">
        <input type="text" v-model="updateProductForm.title" placeholder="title" />
        <input type="number" v-model="updateProductForm.price" placeholder="price" />
        <input type="text" v-model="updateProductForm.shortDesc" placeholder="Short description" />
        <textarea type="text" v-model="updateProductForm.longDesc" placeholder="Long description"></textarea>
        <button class="update-button" @click="updateProduct">Update Product</button>
        </div>
        <div class="product-in-update-container">
          <article class="product-in-update">
          <img
          v-if="displayImgUpdate"
          v-bind:src="require('@/assets/img/' + updateProductForm.imgFile)"
          /> 
        </article>
        <select v-model="updateProductForm.imgFile">
          <option value="hoodie-ash.png">hoodie-ash.png</option>
          <option value="hoodie-fire.png">hoodie-fire.png</option>
          <option value="hoodie-ocean.png">hoodie-ocean.png</option>
          <option value="skateboard-generic.png">skateboard-generic.png</option>
          <option value="skateboard-greta.png">skateboard-greta.png</option>
          <option value="wheel-rocket.png">wheel-rocket.png</option>
          <option value="wheel-spinner.png">wheel-spinner.png</option>
          <option value="wheel-wave.png">wheel-wave.png</option>
        </select>
        </div>
      </div>
    </div>
    <div class="product-container">
      <article class="product" v-for="product in getProductList" v-bind:key="product._id">
        <div class="product-frame">
          <div class="icons">
            <img
              :src="require('@/assets/img/create-outline.svg')"
              @click="updateMode(product)"
            />
            <img :src="require('@/assets/img/trash-outline.svg')" @click="deleteProduct(product)" />
          </div>
          <div class="product-img">
            <img v-bind:src="require('@/assets/img/' + product.imgFile)" />
          </div>
        </div>
        <article class="product-info">
          <p>{{product.title}}</p>
          <p>{{product.shortDesc}}</p>
          <p>
            <strong>{{product.price}} kr inkl moms</strong>
          </p>
        </article>
      </article>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "AdminArea",
  components: {
    Header
  },
  data() {
    return {
      product: {
        title: "",
        price: 0,
        shortDesc: "",
        longDesc: "",
        imgFile: ""
      },
      updateProductForm: {
        title: "",
        price: 0,
        shortDesc: "",
        longDesc: "",
        imgFile: ""
      },
      activateUpdateMode: false,
      displayImgCreate: false,
      displayImgUpdate: false,
      activateCreateMode: false
    };
  },
  computed: {
    getProductList() {
      return this.$store.state.productList;
    },
    getCurrentUser() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    loginAdmin() {
      this.$store.dispatch("logInUser", this.admin);
    },
    async createProduct() {
      let response = await this.$store.dispatch("createProduct", this.product);
      this.activateCreateMode = false
      return response
    },
    updateProduct() {
      this.$store.dispatch("updateProduct", this.updateProductForm);
      this.activateUpdateMode = !this.activateUpdateMode;
    },
    deleteProduct(product) {
      if (confirm("Are you sure?")) {
        window.scrollTo(0, 0)
        this.$store.dispatch("deleteProduct", product);
      }
    },
    showImgCreate() {
      this.displayImgCreate = true;
    },
    createMode() {
      if(this.activateUpdateMode == true){
        this.activateUpdateMode = false;
      }
      this.activateCreateMode = true;
    },
    exitCreateMode() {
      this.activateCreateMode = false;
    },
    updateMode(product) {
      if(this.activateCreateMode == true){
        this.activateCreateMode = false;
      }
      this.updateProductForm = product;
      window.scrollTo(0, 0)
      this.displayImgUpdate = true;
      this.activateUpdateMode = true;
    },
    exitUpdateMode() {
      this.activateUpdateMode = false;
    }
  },
  created() {
    this.$store.commit("restoreSession");
    this.$store.state.showCartButton = false;
  }
};
</script>

<style scoped lang="scss">

.admin-area-container {
  -webkit-box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.75);
  padding-top: 5rem;
  max-width: 1000px;
  margin: 0 auto;
  background: #F0F0F0;
}
.product-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.product-frame {
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  width: 20rem;
  height: 15rem;
  background: #ebebeb;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
}
.product-frame .icons {
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: space-between;
}
.product-frame .icons img {
  display: flex;
  justify-content: space-between;
  width: 10%;
}
.product-frame .icons img:hover {
  cursor: pointer;
}
.product-img img {
  width: 50%;
}
.product-info p {
  margin: 0;
  text-align: left;
  margin-left: 2rem;
}
.update-product-container {
  max-width: 800px;
  margin: 0 auto;
}
.update-product {
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  width: 50rem;
  height: 30rem;
  background: #C4C4C4;
  border-radius: 2rem;
}
.update-product {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2rem;
}
.update-product .exit {
  padding: 1rem;
  width: 5%;
  position:absolute; top:0; right:0;
}
.update-product .exit:hover {
  cursor: pointer;
}
.product-input-container {
  padding: 1rem;
  height: 21rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.product-input-container input {
  height: 2rem;
  font-size: 1rem;
}
.product-input-container textarea {
  height: 6rem;
  font-size: 1rem;
}
.product-in-update-container {
  height: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product-in-update {
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  width: 20rem;
  height: 15rem;
  background: #ebebeb;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
}
.product-in-update img {
  height: 90%;
  padding: 1rem;
}
.product-in-update select {
  margin: 1rem;
}
.update-button {
  cursor: pointer;
  outline: 0;
  padding: 1rem;
  border-radius: 3rem;
    &:hover {
      transform: scale(1.02);
    }
    &:focus {
      transform: scale(0.97);
    }
}
.add-product-button img {
  width: 5%;
}
.create-product-container {
  max-width: 800px;
  margin: 0 auto;
}
.create-product {
  position: relative;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  width: 50rem;
  height: 30rem;
  background: #C4C4C4;
  border-radius: 2rem;
}
.create-product .exit {
  padding: 1rem;
  width: 5%;
  position:absolute; top:0; right:0;
}
.create-product .exit:hover {
  cursor: pointer;
}
.create-product {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2rem;
}
.exit {
    &:hover {
      transform: scale(1.05);
    }
    &:focus {
      transform: scale(0.95);
    }
}
.add-button {
  padding: 1rem;
  border-radius: 3rem;
  outline: 0;
  cursor: pointer;
    &:hover {
      transform: scale(1.01);
    }
    &:focus {
      transform: scale(0.98);
    }
}
.create-button {
  cursor: pointer;
  outline: 0;
  width: 10rem;
  padding: 1rem;
  border-radius: 3rem;
  bottom: 2rem;
  font-size: 1rem;
  margin: 2rem;
  -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    &:hover {
      transform: scale(1.02);
    }
    &:focus {
      transform: scale(0.97);
    }
}
.product-in-create-container {
  height: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product-in-create {
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  width: 20rem;
  height: 15rem;
  background: #ebebeb;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
}
.product-in-create img {
  height: 90%;
  padding: 1rem;
}
.product-in-create select {
  margin: 1rem;
}
.icons img {
    &:hover {
      transform: scale(1.1);
    }
    &:focus {
      transform: scale(0.92);
    }
}
</style>