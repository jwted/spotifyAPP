<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          style="background-color: #191414;box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);"
        >
          <v-list>
            <v-list-item>
                <img 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                style="width: 195px; height:60px;padding-top: 5px;padding-left: 20px;">
            </v-list-item>
          </v-list>
          
          <v-divider></v-divider>
          
          <v-list density="compact" nav>
            <!-- <v-list-item
              prepend-avatar="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
              title="User"
              style="color:#FFF;font-size: 24px;font-style: normal;font-weight: 500;"
            ></v-list-item> -->
            <v-list-item value="login">
              <v-list-item-action style="justify-content: center;">
                <Login/>
              </v-list-item-action>
            </v-list-item>
            
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 200vh"></v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
  import Login from "./Login.vue"
  export default {
    components: {
      Login,
    },
  }
</script>

<style lang="scss" scoped>

</style>