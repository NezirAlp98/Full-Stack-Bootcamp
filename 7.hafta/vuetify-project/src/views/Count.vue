<template>
  <div>
    <div class="d-flex flex-row justify-center align-center h-100">
      <h1>
        {{ counter.count }}
      </h1>
      <h2>
        {{ counter.isCountOdd ? "tek" : "çift" }}
      </h2>
      <v-btn @click="counter.increment()">Arttır</v-btn>
      <div>
        <v-btn @click="counter.incrementWithValue(2)">Çift Arttır</v-btn>
      </div>
      <div>
        <v-btn @click="counter.getProducts">Get All Products</v-btn>
      </div>
      <div>
        <v-btn @click="getFilteredProductById(15)"
          >Get Filtered Products By Id</v-btn>
      </div>
    </div>
    <pre>
            <!-- {{ counter.products }} -->
            {{ filteredProduct }}
        </pre>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const counter = useAppStore();
const getFilteredProductsById = counter.getFilteredProductsById;
let filteredProduct = [];
const getFilteredProductById = async (id) => {
    filteredProduct=await getFilteredProductsById(id);
}
</script>
