<template>
 <div class="container">
  <div class="links">
    <a href="#" class="card-link">Sorting</a>
    <a href="#" class="card-link" data-bs-toggle="modal" data-bs-target="#addProductModal">Add new product</a>
    <div class="modal fade" id="addProductModal" tabindex="-1" role="dialog" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add New Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <label>
                Product Name:
              </label>
                <input type="text" name="productName" id="name">
              <label>
                Product Price:
              </label>
                <input type="text" name="productPrice" id="price"><br>
                <label>
                  URL:
                </label>
                  <input type="text" name="urlName" id="url">
              <button type="submit" onclick="addItem()">Add Product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  <table class="table1">
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody id="tableData">
      <tr v-for="(product, index) in products" :key="index">
        <td><img :src="product.image"></td>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>
          <button class="delete-button" @click="deleteItem(index)">Delete</button>
          <button class="edit-button" @click="editItem(index)">Edit</button>
        </td>
        </tr>
    </tbody>
  </table>
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


data() {
   return {
    newProduct: {
      name: '',
      price: '',
      image: '',
      },
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch('createProducts', { newProduct: this.newProduct });
    },
    deleteItem() {
      this.$store.dispatch('deleteProducts', { newProduct: this.newProduct });
    },
    editItem() {
      this.$store.dispatch('editProducts', { newProduct: this.newProduct });
    },
    sortItem() {
      this.$store.dispatch('sortProducts', { newProduct: this.newProduct });
    },

  }
};



    

</script>

<style scoped>
.table1 {
    
  width: 100%;
  height: 20%;
  border-collapse: collapse;
  padding-top: 20px;
 
  
}

.table1 th,
.table1 td {
  padding: 10px;
  text-align: left;
  
}


.links{

 display: flex;
 justify-content: space-between;
 padding-bottom: 5%;
 font-size: xx-large;

}



.table1 th {
  background-color: rgb(247, 184, 184);
}



tr th,tr td{
  padding: 10px;
  text-align: left;
  border: 1px solid hotpink;

}
.links{

 display: flex;
 justify-content: space-between;
 padding-bottom: 5%;
 font-size: xx-large;

}

img{
  width: 15%;

}

</style>
