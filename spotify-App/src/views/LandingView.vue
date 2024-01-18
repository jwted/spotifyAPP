<script>
import NavBar from "@/components/NavBar.vue"
export default{
  components: {
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
                src="https://open.spotifycdn.com/cdn/images/og-image.548bc4b7.png"
              ></v-carousel-item>
        
              <v-carousel-item
                src="https://www.digitaltrends.com/wp-content/uploads/2022/06/spotify-app-home-page-iphone.jpeg?p=1"
              ></v-carousel-item>
        
              <v-carousel-item
                src="https://ei7sbsqceej.exactdn.com/wp-content/uploads/2023/12/Spotify-Home-Page-Position-Is-Everything-1024x701.jpg?strip=all&lossy=1&resize=840%2C575&ssl=1"
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
                <v-img src="https://images.klipfolio.com/website/public/22b133bc-124d-44f4-85f8-9170b08d3ce9/dashboard-examples-hero.png"></v-img>
                <v-card-title>User Statistics</v-card-title>
                <v-card-text>Check your Spotify account and how many followers you have!</v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <!-- Card 2 -->
              <v-card
              max-width="300">
                <v-img src="https://mir-s3-cdn-cf.behance.net/projects/404/63119b187505621.Y3JvcCwxMzgwLDEwODAsMjkwLDA.png"></v-img>
                <v-card-title>Music Statistics</v-card-title>
                <v-card-text>Check the details of your most heard songs!</v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <!-- Card 3 -->
              <v-card
              max-width="300">
                <v-img src="https://assets-global.website-files.com/61c070585317d2b435a597a4/61cc5e4448ee45202b7a09c4_Song%20Quiz.png"></v-img>
                <v-card-title>Quiz</v-card-title>
                <v-card-text>Test yout knowledge on music!</v-card-text>
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
