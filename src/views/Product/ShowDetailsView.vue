<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <!--            display image-->
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" :alt="product.name" class="img-fluid" />
      </div>
      <!--            display product details-->
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="catgory font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">$ {{ product.price }}</h6>
        <p>
          {{ product.description }}
        </p>
        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>
        <button
            id="wishlist-button"
            class="btn mr-3 p-1 py-0"
            :class="{ product_added_wishlist: isAddedToWishlist }"
            @click="addToWishList(this.product.id)"
        >
          {{ wishlistString }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import sweetalert from "sweetalert";
import axios from "axios";
export default {
  data() {
    return {
      product: {},
      category: {},
      isAddedToWishlist: false,
      wishlistString: "Add to wishlist",
      token: null,
    };
  },
  props: ["baseURL", "products", "categories"],
  methods: {
    /*addToWishlist() {
      if(!this.token){
        sweetalert({
          text: "please login to add item in wishlist",
          icon: "error",
        });
        return;
      }
      axios.post(`${this.baseURL}/wishlist/add?token=${this.token}`, {
        id: this.product.id,
        name: this.product.name,
        imageURL: this.product.imageURL,
        price: this.product.price,
        description: this.product.description,
        categoryId: this.product.categoryId,
      }).then((res) => {
        if(res.status == 201){
          this.wishListString = "Added to Wishlist";
        }
      }).catch((err) => {
        console.log("err", err);
      });
    },*/
    addToWishList(productId) {
      axios
          .post(`${this.baseURL}/wishlist/add?token=${this.token}`, {
            id: productId
          })
          .then(
              (response) => {
                if (response.status == 201) {
                  this.isAddedToWishlist = true;
                  this.wishlistString = "Added to WishList";
                }
              },
              (error) => {
                console.log(error);
              }
          );
    },

  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
        (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
  },
};
</script>
<style>
.category {
  font-weight: 400;
}

#wishlist-button {
  background-color: #b9b9b9;
}
</style>