import Vue from "vue";
import Vuex from "vuex";
import { Product, RootState } from "./types";

Vue.use(Vuex);

const products: Product[] = [
  {
    name: "Organic Teddy Bear",
    price: 102.5,
    image: "https://source.unsplash.com/Zzgmde4_lYU/",
  },
  {
    name: "Organic Reindeer",
    price: 60,
    image: "https://source.unsplash.com/JsjXnWlh8-g/",
  },
  {
    name: "Organic Teddy Bear",
    price: 102.5,
    image: "https://source.unsplash.com/Zzgmde4_lYU/",
  },
  {
    name: "Organic Teddy Bear",
    price: 102.5,
    image: "https://source.unsplash.com/Zzgmde4_lYU/",
  },
]

const state: RootState = {
  showCartDialog: false,
  showRightDrawer: false,
  selectedProduct: products[0],
  filteredProducts: [],
  products,
  cart: [],
};

export default new Vuex.Store({
  state,
  mutations: {
    addCartItem(state, product: Product) {
      state.cart.push(product);
    },

    applyFilter(state, products: Array<Product>) {
      state.filteredProducts = products;
    },

    showCartDialog(state, value: boolean) {
      state.showCartDialog = value;
    },

    setRightDrawerValue(state, value: boolean) {
      state.showRightDrawer = value;
    },

    setSelectedProduct(state, product: Product) {
      state.selectedProduct = product;
    },
  },

  actions: {
    addCartItem({ commit }, cartItem) {
      commit("addCartItem", cartItem);
    },

    showCartDialog({ commit }, value: boolean) {
      commit("showCartDialog", value);
    },

    toggleRightDrawer({ commit }, value: boolean) {
      commit("setRightDrawerValue", value);
    },

    selectProduct({ commit }, product: Product) {
      console.log(product);
      commit("setSelectedProduct", product);
      commit("setRightDrawerValue", true); // Show the right drawer with the selected product.
    },
  },

  getters: {
    getCart: (state) => state.cart,
    cartCount: (state) => state.cart.length,
    products: (state) => state.products,
    isCartOpen: (state) => state.showCartDialog,
    showRightDrawer: (state) => state.showRightDrawer,
    selectedProduct: (state) => state.selectedProduct,
  },
});
