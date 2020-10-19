// To show the products added to Cart

<template>
  <div class="cart">
    <h1>Cart section</h1>
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
      <p>{{ products }}</p>
      <!-- <div id="AddToCartButton"></div> -->
    </table>
  </div>
</template>

<style scoped>
img {
  height: auto;
  margin: 10px 0;
}
h3 {
  margin: 0 40px;
  text-align: center;
}
p {
  margin: 0 40px;
  text-align: center;
}
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