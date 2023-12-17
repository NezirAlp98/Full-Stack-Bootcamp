// Utilities
import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const useAppStore = defineStore("app", {
  state: () => ({
    count: 0,
    products: [],
  }),

  getters: {
    isCountOdd:(state)=>{
      return state.count % 2 === 1
    },
    getFilteredProductsById: (state)=>(id) =>{
      return state.products.filter(product=>product.id === id);
    }, 
  },

  actions: {
    increment() {
      this.count++;
    },
    incrementWithValue(val) {
      this.count = this.count + val;
    },

    getProducts() {
      try {
        const response = axios.get(BASE_URL).then((response) => {
          this.products = response.data;
          console.log(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    },

    async setProduct() {
      try {
        const response = await axios.post(BASE_URL, {
          body: {
            title: "test product",
            price: 1000,
            description: "test",
            category: "electronics",
            image: "test",
            rating: {
              rate: 5,
              count: 10,
            },
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updatetProduct(id) {
      try {
        const response = await axios.put(BASE_URL + "/" + id, {
          body: {
            title: "test product",
            price: 1000,
            description: "test",
            category: "electronics",
            image: "test",
            rating: {
              rate: 5,
              count: 10,
            },
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(id) {
      try {
        const response = await axios.delete(BASE_URL + "/" + id);
        this.products = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
