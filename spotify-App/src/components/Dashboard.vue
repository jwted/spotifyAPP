<script>
import axios from "axios"
import { Buffer } from 'buffer'

export default{
data() {
  return {
    token:"",
    userData:{},
    topArtists:{},
    topTracks:{},
    CLIENT_ID:"648fdde9ee8d43df83b827613921ea7e" ,
    CLIENT_SECRET:"21d216171a434a829cd378d951ac5e38",
    REDIRECT_URL_LOGIN:"http://localhost:5173/home",
    REDIRECT_URL_LOGIN_ENCODED:"http%3A%2F%2Flocalhost%3A5173%2Fhome%2F",
  }
},  



methods: {
    
   
    
    async getToken(code){
        
            const verifier = localStorage.getItem("verifier") 
             const data={
                    'code': code,
                    'redirect_uri': 'http://localhost:5173/home',
                    'grant_type': 'authorization_code',
                    'code_verifier':verifier
                }
             await axios.post("https://accounts.spotify.com/api/token", data,
                {headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (new Buffer.from(this.CLIENT_ID + ':' + this.CLIENT_SECRET).toString('base64'))
                }}
                )
                .then((response) => this.token=(response.data.access_token))
                .catch((err) => console.log(err));
                
            
            await axios.get("https://api.spotify.com/v1/me",{headers:{
                'Authorization': 'Bearer ' + this.token
            }})
                .then((response) => this.userData=response.data)
                .catch((err) => console.log(err));

            
            
            await axios.get("https://api.spotify.com/v1/me/top/artists",{headers:{
                'Authorization': 'Bearer ' + this.token
            }})
                .then((response) => this.topArtists=(response.data.items))
                .catch((err) => console.log(err));
            this.topArtists = this.topArtists.slice(0,11)
            await axios.get("https://api.spotify.com/v1/me/top/tracks",{headers:{
                'Authorization': 'Bearer ' + this.token
            }})
            .then((response) => this.topTracks=(response.data.items))
            .catch((err) => console.log(err));
            this.topTracks = this.topTracks.slice(0,11)
            
        
        }, 
        
        
        
    },
    
    mounted () {
        
        const urlObject = new URL(window.location);
        const code = urlObject.searchParams.get('code');
        
        setInterval(this.getToken(code),3600000)
        /* this.getProfile(String(this.token)) */
        
        
        
    }
}


</script>

<template>
    <div styel>
        <v-container>
            <!-- User -->
            <v-card>
                <v-img :src="this.userData.images[0].url" style="width: 100px; height: 100px;"></v-img>
                <v-title>{{this.userData.display_name}}</v-title>
            </v-card>
            <h1>Top Artists</h1>
            <v-row v-for="artist in this.topArtists" rows="4">
                <v-col cols="4">
                    <v-card>
                        <v-cardtitle>{{ artist.name }}</v-cardtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        
        <!-- <h1 v-if="this.userData !={}">{{this.userData.display_name}}</h1> -->
        <!-- console.log(this.userData.images[0].url) -->
        <v-container>
        </v-container>
        
        <h1>Top Tracks</h1>  
        <div v-for="track in this.topTracks">
            {{ track.name }}
    </div>    
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
