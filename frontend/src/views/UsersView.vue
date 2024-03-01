<template>
  <div>
    <main id="o">
      <!-- Main content -->
      <div class="container">
        <main class="container-fluid">
          <div class="container">
            <div class="col d-flex justify-content-center m-2 flex-md-row flex-column gap-3">
            </div>
            <div class="row d-flex justify-content-between flex-md-row flex-column gap-2">
              <div class="col">
                <button class="btn btn-primary me-5 m-5" data-bs-toggle="modal" data-bs-target="#addNewProduct">
                  Add new User
                </button>
              </div>
            </div>
            <div class="modal fade" id="addNewProduct" tabindex="-1" aria-labelledby="addNewProductLabel" aria-hidden="true">
              <!-- Modal content -->
            </div>
          </div>
          <div class="row">
            <div class="table-responsive"> <!-- Ensure responsiveness -->
              <table class="table">
                <thead>
                  <th scope="col" @click="sort('name')">firstName</th>
                  <th>lastName</th>
                  <th>userAge</th>
                  <th>Gender</th>
                  <th>userRole</th>
                  <th>emailAdd</th>
                  <th>userProfile</th>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.userID">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.userAge }}</td>
                    <td>{{ user.Gender }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userProfile }}</td>
                    <td>
                      <button class="btn btn-light bg-gradient btn-sm y" @click="editProduct(index)">Edit</button>
                      <button class="btn btn-danger bg-danger btn-sm" @click="deleteProduct(index)">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </main>
  </div>
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
table {
  
  background-color: rgb(255, 253, 253)!important;
  border-collapse: collapse;
  width: 100%!important;
  font-weight: bold;
  opacity: 90%;
}

th, td {
  border: 5px solid #9a9ea3 !important;
  padding: 10px !important;
  color: black !important;
  
  font-size: medium;
}

th {
  text-align: center !important;
  background-color: #2626e146 !important ;
  color: black !important;
  font-size: larger ;
}
.btnn{
  margin-bottom: 10%;

}
.y {
  background-color: #28a745 !important;
  color: #fff !important;
  margin: 1% !important;
  font-size: large !important;
}
table img {
  max-width: 100%;
  height: auto;
}

.table-responsive {
  overflow-x: auto;
}
</style>