<!-- src/components/About.vue -->
<template>
   <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="container-fluid  ">
    <h1 class="animate__animated animate__rollIn">About Us</h1>
    <p class="animate__animated animate__jackInTheBox">{{ aboutView }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      aboutView:
        "We believe that access to technology has the power to CHANGE lives. That’s why we offer TECH products at the best prices we can. Our growing product range has it all. Laptops, PCs, monitors, printers, gaming devices, cables, and anything else you need for a world that runs on TECH. Need something we don’t have, we’ll do our best to source it for you. After all, technology can change lives. Don’t get left behind. Start TECH-ing today!",
    };
  },
};
</script>

<style scoped>
.container-fluid {
  max-width: 800px;
  margin: 2% auto;
  padding: 10px;
  box-shadow: 0 0 20px rgba(129, 220, 17, 0.711);
  background-color: #ffffff;
  border-radius: 10%;
  opacity: 95%;
  background-image: url(https://t4.ftcdn.net/jpg/05/46/73/11/240_F_546731133_sS4m3aTYDo6knvFg2tTpGStUiw4ploIs.jpg) ;
}

h1 {
  color: rgb(255, 255, 255);
  font-size: 56px;
  margin-bottom: 50px;
}

p {
  color: rgb(255, 255, 255);
  font-size: 28px;
  line-height: 1.8;
  margin-bottom: 0;
  font-weight: bolder;
}
.footer{
  height: 10% ;
}

/* body{ background-image: url(https://www.bing.com/th/id/OGC.0e5bd0ac099a214e98426eead080f4c4?pid=1.7&rurl=https%3a%2f%2fi.gifer.com%2f7S7F.gif&ehk=cTu90sfWNB6uPC8xsjj0n12YmX4YaBicSN0WYwWTrdc%3d);} */

</style>
