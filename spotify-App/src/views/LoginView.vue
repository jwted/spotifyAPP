<script>
import Login from '../components/Login.vue'
export default{

  components: {
    Login,
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
