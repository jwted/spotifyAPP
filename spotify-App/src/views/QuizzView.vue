<script>
import dashboard from '../components/Dashboard.vue';
import NavBar from "../components/NavBar.vue"
import {useUserStore} from '../stores/userStore'

export default {
  components: {
  dashboard,
  NavBar,
},
data() {
    return {
        userStore: useUserStore()
    }
},

mounted(){
    console.log(this.userStore.getTopArtists)
}

}




</script>

<template>
  <main>
    <div style="display: flex;">

      <NavBar/>
    </div>
  </main>
</template>
