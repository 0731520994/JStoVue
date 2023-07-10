<template>
  <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <img src="../components/logo.jpg" alt="logo">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link  to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link  to="/about">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link  to="/products">Products</router-link>
                </li>
                <li class="nav-item">
                  <router-link  to="/contact">Contact</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </div>
</template>

<script>
  export default {
      
  }
</script>

<style lang="scss" scoped>
  
</style>