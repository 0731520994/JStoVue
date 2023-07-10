import { createStore } from 'vuex';

const dataUrl = 'https://0731520994.github.io/JSONServer/database.json'
export default createStore({
  state: {
    products: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
    state.products = products;
    }
  },
  actions: {
    async fetchProducts(context) {
      try {
        const res = await fetch(dataUrl);
        const { products } = await res.json();
        if (products) {
          context.commit('setProducts', products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async updateProduct(context, { updatedProduct, id }) {
      try {
        await fetch(`${dataUrl}/${id}`, {
          method: 'PUT',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProduct)
        });

        context.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
    async deleteProduct(context, { id }) {
      try {
        await fetch(`${dataUrl}/${id}`, {
          method: 'DELETE'
        });
        context.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    async createProduct(context, { newProduct }) {
      try {
        await fetch(dataUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(newProduct)
        });
        context.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error creating product:', error);
      }
    }
  }
});







 

  
  

