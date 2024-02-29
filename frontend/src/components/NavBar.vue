<template>
  
  <nav class="navbar d-flex navbar-expand-lg ">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img href="/" height="120px" width="120px" src="https://i.postimg.cc/d0bpKTM7/R-removebg-preview-1.png" alt="">
      </router-link>
    
      <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
        <div class="navbar-nav KK">
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
img{
  margin-top: -15% !important;
  /* padding-top: 12%; */
}
a:hover {
background-color: rgb(173, 187, 235) !important  ;
border-radius: 10% !important;
color: white !important;
}
.KK{
  font-size: large !important;
    font-weight: bold !important;
    float: inline-end;
    margin-left: 4% !important;
    /* color: rgb(5, 5, 5); */
    color: rgba(255, 255, 255, 0.818) !important;
    font-family: "Rubik Bubbles", system-ui !important;
  font-weight: 400 !important;
  font-style: normal !important;

}








</style>
