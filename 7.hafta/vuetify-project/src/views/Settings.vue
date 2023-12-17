<template>
  <v-responsive class="pb-12">
    <div>settings</div>
    <FormContainer v-if="false">
      <template v-slot:centerform>
        <UserInfos />
      </template>
      <template v-slot:footer> 3 gün içinde size haber vereceğiz </template>
    </FormContainer>

    <v-data-table class="ma-4" :items="products">
        <template v-slot:[`item.image`]="{ value }">
            <v-img :src="value"></v-img>
        </template>

        <template v-slot:[`item.rating`]="{ value }">
            <v-rating
            hover
            :length="5"
            :size="32"
            :model-value="value.rate"
            active-color="primary"
            />
        </template>
    </v-data-table>
    <v-btn @click="setProduct">Set Product</v-btn>
  </v-responsive>
</template>

<script>
import FormContainer from "@/components/FormContainer.vue";
import UserInfos from "@/components/UserInfos.vue";
import axios from "axios";
export default {
  components: {
    FormContainer,
    UserInfos,
  },
  data() {
    return {
      darkMode: true,
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    changeMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    async getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },

    async setProduct() {
      try {
        const response = await axios.post("https://fakestoreapi.com/products",{
            body:{
                title:"test product",
                price:1000,
                description:"test",
                category:"electronics",
                image:"test",
                rating:{
                    rate:5,
                    count:10
                }
                
            },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>

<style></style>
