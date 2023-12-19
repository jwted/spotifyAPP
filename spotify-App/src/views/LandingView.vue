<script>
import Login from '../components/Login.vue'
/* import NavBar from "../components/NavBar.vue" */
export default{

  components: {
    Login,
    /* NavBar, */
  },
}
</script>

<template>
  <div>
    <Login/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
