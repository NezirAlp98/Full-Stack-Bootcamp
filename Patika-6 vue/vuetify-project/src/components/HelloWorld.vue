<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height" :variant="variant">
      <v-text-field v-model="name" :label="nameLabel"/>
      <v-btn @click="sendName(name)">Send Name</v-btn>
      <h3>{{name}}</h3>
      <h3>{{fullName}}</h3>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "Nezir",
      middleName:"Alp",
      surName: "Arslan",
      nameLabel: 'İsim giriniz',
      variant: 'outlined',
    }
  },

  computed: {
    fullName(){
      return this.name + this.middleName+this.surName
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    sendName(val){
    console.log(this.nameLabel)
    this.alertBig(val)
    },
    alertBig(val){
      alert(val)
    }
  },
  
  watch: {
    name(val,oldVal){
      console.log("watch" + val,"oldVal" + oldVal)
    },
  },
}
</script>

<style scoped>
  .d-flex {
    display: flex;
  }
</style>

