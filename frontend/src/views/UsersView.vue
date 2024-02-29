<template>
        
            <table class="table">
  <thead>
    <tr>
      <th scope="col">userID</th>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">userAge</th>
      <th scope="col">userRole</th>
      <th scope="col">emailAdd</th>
      <th scope="col">userPass</th>
      <th scope="col">userPass</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.userID">
      <th scope="row">{{ user.userID  }}</th>
      <td>{{ user.firstName }}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>

  </tbody>
</table>
</template>

<script>
// import Card from '@/components/Card.vue';
export default {
  name: 'UsersViewCo',
  components: {
      // Card
  },
  computed: {
      users() {
          return this.$store.state.users
      }
  },
  mounted() {
      this.$store.dispatch('fetchUsers')
  }
}
</script>

<style scoped>
.card-img-top {
  width: 130px;
  height: 130px;


}

#router {
  color: rgb(34, 0, 255) !important;

  font-weight: bold !important;
}
.footer{
  margin-top: 500px
}
</style>