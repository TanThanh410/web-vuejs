<template>
  <Navbar />
  <router-view v-if="categories && products" style="min-height: 60vh"
               :baseURL="baseURL"
               :categories="categories"
               :products="products"
               @fetchData="fetchData"
  >
  </router-view>
  <FooterCopo />
</template>
<script>
import axios from "axios";
import Navbar from "@/components/NavbarCopo.vue";
import FooterCopo from "@/components/FooterCopo.vue";

export default {
  components: {FooterCopo, Navbar},
  data(){
    return{
      baseURL: "http://localhost:8080",
      products: null,
      categories: null
    }
  },
  methods:{
    async fetchData() {

      // api call to get all the categories
      await axios.get(this.baseURL + "/category/getAll")
          .then(res => {
            this.categories = res.data
          }).catch((err) => console.log('err', err));

      // api call to get the products

      await axios.get(this.baseURL + "/product/getAll")
          .then(res => {
            this.products = res.data
          }).catch((err) => console.log('err', err));
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
