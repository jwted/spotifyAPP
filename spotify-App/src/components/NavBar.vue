<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          style="background-color: #191414;box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);position: fixed;"
        >
          <v-list>
            <v-list-item>
                <img 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                style="width: 195px; height:60px;padding-top: 5px;padding-left: 20px;">
            </v-list-item>
          </v-list>
          
          <v-divider></v-divider>
            <div  v-if="userStore.isLogged && userStore.userData.images && userStore.userData.images.length > 0">>
              <v-list style="display: flex;">
                <v-list-item>
                  <img class="profilePic" :src="this.userStore.userData.images[0].url"> 
                </v-list-item>
                <v-list-item>
                  <h1 class="navText">{{this.userStore.userData.display_name}}</h1> 
                </v-list-item>
              </v-list>
            </div>
            
          
          <v-list density="compact" nav>
            
            <v-list-item>
              <v-list-item-action style="justify-content: center;">
                <Login/>
                
              </v-list-item-action>
            </v-list-item>
            
            <v-list-item v-if="userStore.isLogged">
              <v-list-item-action style="justify-content: center;">
                <Button class="navText"  @click="this.$router.push('/quizz')">Quizz</Button>
              </v-list-item-action>
            </v-list-item>
            
            <v-list-item v-if="userStore.isLogged">
              <v-list-item-action style="justify-content: center;">
                <Button id="navLogout"  @click="redirectAndLogout">Logout</Button>
              </v-list-item-action>
            </v-list-item>
            
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 200vh; width: 100px"></v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
  import Login from "./Login.vue"
  import {useUserStore} from "../stores/userStore"
  export default {
    
    data() {
      return {
        userStore: useUserStore(),
      }
    },
    components: {
      Login,
    },
    methods: {
      
      redirectAndLogout(){
        useUserStore().logout()
        this.$router.push('/')
      }
    },
  }
</script>

<style scoped>
.profilePic{
  border-radius: 50%;
}
.navText{
  color:#FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
#navLogout{
  color:#B71C1C ;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}


</style>