<script>
import dashboard from '../components/Dashboard.vue';
import NavBar from "../components/NavBar.vue"


export default {
  components: {
  dashboard,
  NavBar,
}}
</script>

<template>
  <v-app>
    <div>
      <NavBar/>
      <dashboard/>
    </div>
  </v-app>
</template>