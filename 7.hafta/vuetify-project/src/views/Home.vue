<template>
  <HelloWorld title="patika tablo" @addItem="changePage" />
  <!-- helloworld vue title verisi gönderdik -->
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  components: {
    HelloWorld: HelloWorld,
  },
  methods: {
    changePage(e) {
      //this.getProducts();
    },
    async getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
