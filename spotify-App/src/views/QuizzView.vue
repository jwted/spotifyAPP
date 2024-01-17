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
    const artistsId = this.userStore.getTopArtists
    artistsId.forEach(artist => {
        artist=artist.id
        console.log(artist)
    });

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
