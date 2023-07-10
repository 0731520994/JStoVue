<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/checkout">Checkout</router-link>
    </nav>
    <router-view />
    <AppFooter /> 
  </div>
</template>

<script>
import AppFooter from './components/FooterCompt.vue';

export default {
  name: 'App',
  components: {
    AppFooter
  },
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

