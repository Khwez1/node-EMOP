<template>
    <div class="container">
        <input type="text" id="Input" placeholder="Search products">
        <button onclick="searchProducts()">Search</button>
    
            <div class="row d-flex justify-content-center" v-if="products">
                
                <Card v-for="product in products" :key="product.prodID" class="col-4">
                    <template #imgTop>
                        <img class="card-img-top" :src="product.prodUrl">
                    </template>

                    <template #cardHeader>
                        <h4 class="card-title">{{ product.prodName }}</h4>
                    </template>

                    <template #cardBody>
                        <p class="card-text text-light bg-gradient bg-white-subtle p-2">
                            Quantity: {{ product.quantity }}
                        </p>
                        <p class="card-text text-light bg-gradient bg-white-subtle p-2">
                            Amount: R{{ product.amount }}
                        </p>
                          <router-link :to="{name: 'product', params: {id:product.prodID }}"><button class="btn btn-light mx-4 w-100 text-black">View Product</button></router-link>  

                    </template>
                </Card>
                <!-- <div class="col" v-for="p in [1,2,3,4,5,5]" :key="p">{{p}}</div> -->
            </div>
            
            <div class="row" v-else>
                <p class="lead col">Loading ... </p>
            </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ProductsView',
    components: {
        Card
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
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
#Input{
    margin: 1%
}
</style>