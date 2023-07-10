<template>
    <h1>Products</h1>
      <div class="container">
        <div class="row">
          <div class="col" v-for="product in products" :key="product.ID">
            <div class="card" >
              <img :src="product.image" class="card-img-top" :alt="product.name">
              <div class="card-body">
                <h1 class="card-title">{{ product.name }}</h1>
                <h4 class="card-text">{{ product.price }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>

</style>
