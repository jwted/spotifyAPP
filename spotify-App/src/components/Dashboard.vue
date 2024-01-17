<script>
import axios from "axios"
import { Buffer } from 'buffer'
import {useUserStore} from '../stores/userStore'
export default{
data() {
  return {
    userStore:useUserStore(),
    
  }
},  



methods: {
    
   
    
    /* async getToken(code){
        
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
        
        
       */ 
    }, 

    created () {
        console.log('first')
        this.userStore.isLogged = true
    },
    
    mounted () {
        
        const urlObject = new URL(window.location);
        const code = urlObject.searchParams.get('code');
        
        setInterval(this.userStore.getUserInfo(code),3600000)
        /* this.getProfile(String(this.token)) */
        console.log(this.userStore.isLogged)
        
    }
}


</script>

<template>
    <v-app>
        <v-card>
            <v-layout>

                
                
        </v-layout>
        </v-card>
    </v-app>
</template>

<style>
/* @media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
} */
</style>
