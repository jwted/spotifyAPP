<script>
import dashboard from '@/components/Dashboard.vue';
import NavBar from "@/components/NavBar.vue"
import GraphGenre from '@/components/GraphGenre.vue';

export default {
  components: {
  dashboard,
  NavBar,
  GraphGenre
}}
</script>

<template>
  <v-app>
    <v-card>
      <v-layout>
        <NavBar/>
        <dashboard/>
      </v-layout>
    </v-card>
  </v-app>
</template>