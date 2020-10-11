//Where all the products are to be shown to the user

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
<template>
  <div class="products">
    <h1>Slutprojekt webbapplikationer 2.0</h1>
    <p>
      Lets code!<br />
      Skapa ett nytt Vue Project<br />
      Inkludera Router<br />
      Skapa en sida med 3st Views<br />
      /Products<br />
      /Cart<br />
      /Login
    </p>
    <img src="https://via.placeholder.com/150" alt="Placeholder" />
    <!-- <img :src="picsOfProducts"> -->
    <!-- <div id="demo">
      <ul>
        <li v-for="jsonImgFile in getImgFile">
          {{ jsonImgFile }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
// import products from "@/assets/products.json";
// const data = {
//   data: [
//     [
//       {
//         title: "Tricky",
//         price: 799,
//         shortDesc: "Unisex",
//         category: "board",
//         longDesc: "Skate ipsum dolor sit amet...",
//         imgFile: "skateboard-generic.png",
//         serial: "231874871397182",
//       },
//     ],
//     [
//       {
//         title: "Tricky",
//         price: 799,
//         shortDesc: "Unisex",
//         category: "board",
//         longDesc: "Skate ipsum dolor sit amet...",
//         imgFile: "skateboard-generic.png",
//         serial: "231874871397182",
//       },
//     ],
//   ],
// };

export default {
  // el: "#demo",
  // data() {
  //   return {
  //     jsonProducts: products,
  //   };
  // },
  // computed: {
  //   getImgFile() {
  //     return this.jsonProducts.map((productsSet) => productsSet[0].imgFile);
  //   },
  // },
  // el: "#demo",
  // data() {
  //   return {
  //     data: data.data,
  //   };
  // },
  // computed: {
  //   imageUri() {
  //     return this.data.map((dataSet) => dataSet[0].imgFile);
  //   },
  // },
};

// var jsonData = URL("./assets/products.json");
// console.log(JSON.parse(jsonData[0].title).data[0].title);
// var jsonDataShowAll = JSON.parse(jsonData[0].title).data;

// jsonDataShowAll.array.forEach(element => {
//   console.log(element.title)
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: auto;
}
</style>
