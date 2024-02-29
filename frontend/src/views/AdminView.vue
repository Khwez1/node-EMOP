<template>
    <div>
      <main id="o">
        <!-- Main content -->
        <div class="container">
          <main class="container-fluid">
            <div class="container">
              <div class="col d-flex justify-content-center flex-md-row flex-column gap-3">
                  
                <RouterLink to="/users" class="btn btn-primary me-2 " data-bs-toggle="modal" data-bs-target="#addNewProduct">
                    Users
                  </RouterLink>
                  
                </div>
              <div class="row d-flex justify-content-between flex-md-row flex-column gap-2">
                <div class="col">
                  <button class="btn btn-success ms-2" @click="toggleSorting">Sorting</button>
                </div>
               
                <div class="col">
                  <button class="btn btn-success me-2" data-bs-toggle="modal\
                  
                  
                  " data-bs-target="#addNewProduct">
                    Add new products
                  </button>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="addNewProduct" tabindex="-1" aria-labelledby="addNewProductLabel" aria-hidden="true">
                <!-- Modal content -->
              </div>
            </div>
            <div class="row" data-scroll>
              <table class="table table-responsive">
                <thead>
                  <th scope="col" @click="sort('name')">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col" @click="sort('amount')">Amount</th>
                  <th scope="col">Action</th>
                </thead>
                <tbody data-admin>
                  <tr v-for="(product, index) in sortedProducts" :key="index">
                    <td>{{ product.name }}</td>
                    <td><img :src="product.image" :alt="product.name" style="max-width: 50px; max-height: 50px;"></td>
                    <td>R{{ product.amount }}</td>
                    <td>
                      <button class="btn btn-light btn-sm" @click="editProduct(index)">Edit</button>
                      <button class="btn btn-danger btn-sm" @click="deleteProduct(index)">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productsData: [
          { name: 'HP Mono LaserJet MFP 137fnw Printer', image: 'https://tech.co.za/wp-content/uploads/2022/02/4ZB84Aa-768x576.jpg', amount: 5309.00 },
          { name: 'Dell P2418HT Touch Monitor – 23.8 ', image: 'https://tech.co.za/wp-content/uploads/2019/06/DELL-P2418HT-510x383.jpg', amount: 7759 },
          { name: 'Corsair TC200 Gaming Chair – Soft Fabric  ', image: 'https://tech.co.za/wp-content/uploads/2023/02/CF-9010049-WWa-768x576.png', amount: 5309 },
          { name: 'Asus Vivobook Pro 15 K6502ZC 15.6″ Laptop  ', image: 'https://tech.co.za/wp-content/uploads/2023/07/Vivobook-Pro-15-K6502ZCa-768x576.png', amount: 24159 },
          { name: 'Logitech MK330 Wireless Keyboard and Mouse ', image: 'https://www.firstshop.co.za/cdn/shop/products/920-003989-keyboards-35708394340516_700x.jpg?v=1673263740', amount: 699 },
        ],
        sorting: false,
      };
    },
    computed: {
      sortedProducts() {
        if (this.sorting) {
          return this.productsData.slice().sort((a, b) => a.name.localeCompare(b.name));
        } else {
          return this.productsData;
        }
      },
    },
    methods: {
      toggleSorting() {
        this.sorting = !this.sorting;
      },
      editProduct(index) {
        const newName = prompt('Enter new name:');
        const newAmount = prompt('Enter new amount:');
        if (newName !== null && newAmount !== null) {
          this.$set(this.productsData, index, { ...this.productsData[index], name: newName, amount: parseFloat(newAmount) });
        }
      },
      deleteProduct(index) {
        const confirmDelete = confirm('Are you sure you want to delete this product?');
        if (confirmDelete) {
          this.productsData.splice(index, 1);
        }
      },
      sort(prop) {
        this.sorting = !this.sorting;
        this.productsData.sort((a, b) => {
          const aValue = prop === 'name' ? a[prop].toLowerCase() : a[prop];
          const bValue = prop === 'name' ? b[prop].toLowerCase() : b[prop];
          return this.sorting ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        });
      },
    },
    mounted() {
      // Initial setup
      // You can fetch or set the initial product data here
      this.productsData = [
        { name: 'HP Mono LaserJet MFP 137fnw Printer', image: 'https://tech.co.za/wp-content/uploads/2022/02/4ZB84Aa-768x576.jpg', amount: 5309.00 },
        { name: 'Dell P2418HT Touch Monitor – 23.8', image: 'https://tech.co.za/wp-content/uploads/2019/06/DELL-P2418HT-510x383.jpg', amount: 7759},
        {name: 'Corsair TC200 Gaming Chair – Soft Fabric  ', image: 'https://www.bing.com/th?id=OPE.0VNHyt1olJBPHA300C300&pid=21.1&w=124&h=124&qlt=100&dpr=1,6&bw=6&bc=FFFFFF', amount: 5309},
        { name: 'Asus Vivobook Pro 15 K6502ZC 15.6″ Laptop  ', image: 'https://tech.co.za/wp-content/uploads/2023/07/Vivobook-Pro-15-K6502ZCa-768x576.png', amount: 24159},
        {name: 'Logitech MK330 Wireless Keyboard and Mouse ', image: 'https://www.firstshop.co.za/cdn/shop/products/920-003989-keyboards-35708394340516_700x.jpg?v=1673263740', amount: 699}
        // Add more products as needed
      ];
    },
  };
  </script>
  
  <style scoped>
 .container {
  /* margin-top: 40px;  */
  /* background-color: #fff;  */
  padding: 20px; /* Add padding for spacing */
  
}

.main-content {
  text-align: center !important; }


.btn-success {
  background-color: #28a745 !important;
  color: #fff !important;
  margin: 1% !important;
  font-size: large !important;
}

.btn-primary {
  background-color: #007bff !important;
  color: #fff !important;
  
}

.btn-danger {
  background-color: #dc3545 !important;
  color: #fff !important;
}

.product-image {
  max-width: 100px!important;
  max-width: 100px!important;
  max-width: 100px!important;
  max-height: 100px!important;
  border-radius: 10px!important;

}

table {
  
  background-color: rgba(255, 253, 253, 0.007)!important;
  border-collapse: collapse;
  width: 100%!important;
}

th, td {
  border: 5px solid #9a9ea3 !important;
  padding: 10px !important;
}

th {
  text-align: center !important;
  background-color: #f9f8fa !important ;
  color: black !important;
  font-size: larger ;
}
.btnn{
  margin-bottom: 10%;

}
  </style>
  