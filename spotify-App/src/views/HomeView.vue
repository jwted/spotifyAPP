<script>
import dashboard from '../components/Dashboard.vue';
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
  dashboard,
  NavBar
}}
</script>

<template>
    <v-app>
      <v-card>
        <v-layout>
          <!-- Navbar -->
          <NavBar/>

          <!-- Dashboard -->
          <v-container>
          <dashboard/>
          </v-container>
        </v-layout>
      </v-card>

    </v-app>


    <!-- <dashboard/> -->
</template>
