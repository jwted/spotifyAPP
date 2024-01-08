<script>
/* import Login from '@/components/Login.vue' */
import NavBar from "@/components/NavBar.vue"
export default{
  components: {
    /* Login, */
    NavBar
  },

}
</script>

<template>
  <v-app>
    <v-card>
      <v-layout>
        <NavBar/>

        <v-container 
        style="background: #A4A4A4">
          <!-- Carousel -->
          <v-container 
          style="margin-bottom: 50px;">
            <v-carousel 
            style="height: 85vh; width: 70vw;padding-left: 100px;padding-top: 30px;border-color: white;" 
            outline
            cycle
            hide-delimiter-background>
              <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              ></v-carousel-item>
        
              <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
              ></v-carousel-item>
        
              <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-container>
          
          <!-- Cards -->
          <v-container>
          <v-row>
            <v-col>
              <!-- Card 1 -->
              <v-card
              max-width="300">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
                <v-card-title>User Estatísticas</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus, nisi non viverra ornare, sem orci luctus tortor, eu dapibus dui orci ut justo. In tristique scelerisque purus, non placerat leo dignissim sit amet. Vivamus tincidunt ligula arcu, a pellentesque mauris vestibulum at. Maecenas placerat lacus eget lectus semper sodales. In hac habitasse platea dictumst. Donec felis magna, feugiat quis urna vel, ornare suscipit elit.</v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <!-- Card 2 -->
              <v-card
              max-width="300">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
                <v-card-title>Musica Estatísticas</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus, nisi non viverra ornare, sem orci luctus tortor, eu dapibus dui orci ut justo. In tristique scelerisque purus, non placerat leo dignissim sit amet. Vivamus tincidunt ligula arcu, a pellentesque mauris vestibulum at. Maecenas placerat lacus eget lectus semper sodales. In hac habitasse platea dictumst. Donec felis magna, feugiat quis urna vel, ornare suscipit elit.</v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <!-- Card 3 -->
              <v-card
              max-width="300">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
                <v-card-title>Quiz</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus, nisi non viverra ornare, sem orci luctus tortor, eu dapibus dui orci ut justo. In tristique scelerisque purus, non placerat leo dignissim sit amet. Vivamus tincidunt ligula arcu, a pellentesque mauris vestibulum at. Maecenas placerat lacus eget lectus semper sodales. In hac habitasse platea dictumst. Donec felis magna, feugiat quis urna vel, ornare suscipit elit.</v-card-text>
              </v-card>
            </v-col>
          </v-row>
          </v-container>
        </v-container>
      </v-layout>
    </v-card>
  </v-app>
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
