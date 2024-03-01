<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img height="120px" width="120px" src="https://i.postimg.cc/d0bpKTM7/R-removebg-preview-1.png" alt="">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link KK" to="/"> HOME</router-link>
          <router-link class="nav-item nav-link KK" to="/about"> ABOUT</router-link>
          <router-link class="nav-item nav-link KK" to="/products">PRODUCTS</router-link>
          <router-link class="nav-item nav-link KK" to="/admin"> ADMIN</router-link>
          <router-link class="nav-item nav-link KK" to="/contact">CONTACT </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
img {
  margin-top: -15% !important;
}

a:hover {
  background-color: rgb(173, 187, 235) !important;
  border-radius: 10% !important;
  color: white !important;
}

.KK {
  font-size: large !important;
  font-weight: bold !important;
  margin-left: 4% !important;
  color: rgba(255, 255, 255, 0.818) !important;
  font-family: "Rubik Bubbles", system-ui !important;
  font-weight: 400 !important;
  font-style: normal !important;
}

.navbar-toggler {
  border: none;
  outline: none;
}

@media (max-width: 768px) {
  img {
    margin-top: 0; 
  }

  .navbar-nav {
    text-align: center; 
  }

  .KK {
    margin-left: 0 !important; 
  }
}
</style>
