<template>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="justify-content-center" v-if="product">
    <img class="card-img-top animate__animated animate__bounceInUp" :src="product.prodUrl" alt="Product Image">
    <h1 class="text-white">{{ product.prodName }}</h1>
    <div class="card-text text-light bg-secondary subtle p-5 animate__animated animate__backInLeft">
      <p >Amount: R{{ product.amount }}</p>
      <button class="btn btn-danger mx-5 w-50 text-black bg-white-subtle p-1 " @click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductView',
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); 
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params);
  }
}
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
  margin: 2.5rem;
  border-radius: 60%;
}
</style>
