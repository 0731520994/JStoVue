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
        let res = await fetch(dataUrl);
        let {products} = await res.json();
        if (products) {
          context.commit('setProducts', products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  },

function update(updatedProducts, id) {
    return fetch(`https://0731520994.github.io/JSONServer/database.json/${id}`, {
      method: "Post",
      body: JSON.stringify(updatedProducts),
      headers: {
        'contect-Type': 'application/json',
      }
    })
    .then(res => res.json())
  }
function update(products){
  null
}
})