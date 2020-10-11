//Where all the products are to be shown to the user

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<template>
  <div class="products">
    <h1>Slutprojekt webbapplikationer 2.0</h1>
    <img src="https://via.placeholder.com/150" alt="Placeholder" />
    <table id="table">
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Serial</th>
        <th>Description</th>
        <th>Picture</th>
        <th>Add to cart</th>
      </tr>
      <!-- <div id="demo">
        <ul>
          <li v-for="uri in imageUri" :key="uri.Id">
            {{ uri }}
          </li>
        </ul>
      </div> -->
      <!-- <p>{{products}}</p> -->
      <!-- <div id="AddToCartButton"></div> -->
    </table>
  </div>
</template>

<script>
// export default{
//   el: "#demo",
//   data: {
//     products: []
//   },
//   computed: {
    
//     function (data) {
//       var product = "";

//       jQuery.each(data, function (key, value) {
//         // Skapar rader med datan från json objekt
//         product += "<tr>";
//         product += "<td>" + value.title + "</td>";
//         product += "<td>" + value.price + "</td>";
//         product += "<td>" + value.serial + "</td>";
//         product += "<td>" + value.shortDesc + "</td>";
//         product += "<td>" + value.imgFile + "</td>";
//         product += "</tr>";
//         jQuery("#table").append(product);
//       });
//     }
//   },
//   mounted(){
//     axios.get("./assets/products.json")
//     .then((response) =>{
//       this.products = response.data;
//     })
//   }
// }
















// export default {
//   el: "#demo",
//   data() {
//     return {
//       data: data.data,
//     };
//   },
//   created: {
//     productData : getJson("./assets/products.json")
//     .then(
//       response => {
//         this.productData = response.body
//         console.log(response);
//       }
//     )
//   },
//   computed: {
//     imageUri() {
//       return this.data.map((dataSet) => dataSet[0].imgFile);
//     },
//   },
// };

// export default {
//   data (){
//     return {
//       products: ''
//     }
//   },
//   created (){
//     this.$http.get('@/assets/products.json')
//     .then(
//       response => {
//         this.products = response.body
//         console.log(response);
//       }
//     )
//   }
// };

// jQuery(document).ready(function () {
//   // Hämtar data från json fil
//   jQuery.getJSON("./assets/products.json"),
//     function (data) {
//       var product = "";

//       jQuery.each(data, function (key, value) {
//         // Skapar rader med datan från json objekt
//         product += "<tr>";
//         product += "<td>" + value.title + "</td>";

//         product += "<td>" + value.price + "</td>";

//         product += "<td>" + value.serial + "</td>";

//         product += "<td>" + value.shortDesc + "</td>";

//         product += "<td>" + value.imgFile + "</td>";

//         product += "</tr>";
//       });

//       // Lägger in datan i rader i tabellen
//       if (product != null) {
//         jQuery("#table").append(product);

//         var addButton = document.getElementById("AddToCartButton");
//         var button = document.createElement("BUTTON");
//         var textOnButton = document.createTextNode("Buy");
//         button.appendChild(textOnButton);
//         addButton.appendChild(button);

//         jQuery("#table").append(addButton);
//       } else {
//         console.log("Product from products.json is null!");
//       }
//     };
// });
</script>

<style scoped>
table {
  margin: 0 auto;
  font-size: large;
  border: 1px solid black;
}

h1 {
  text-align: center;
  font-size: xx-large;
  font-family: "Gill Sans", "Gill Sans MT", " Calibri", "Trebuchet MS",
    "sans-serif";
}

td {
  background-color: #e4f5d4;
  border: 1px solid black;
}

th,
td {
  font-weight: bold;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}

td {
  font-weight: lighter;
}
</style>
