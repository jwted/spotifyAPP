<script>
import axios from "axios"
import { Buffer } from 'buffer'

export default{
data() {
  return {
    token:"",
    userData:{},
    CLIENT_ID:"648fdde9ee8d43df83b827613921ea7e" ,
    CLIENT_SECRET:"21d216171a434a829cd378d951ac5e38",
    REDIRECT_URL_LOGIN:"http://localhost:5173/home/",
    REDIRECT_URL_LOGIN_ENCODED:"http%3A%2F%2Flocalhost%3A5173%2Fhome%2F",
  }
},  



methods: {
    
    
    async getToken(code){


        
         const grant = {
            grant_type: "authorization_code",
            code,
            redirect_uri:this.REDIRECT_URL_LOGIN, // required for verification, but no actual redirect
        };

        const tokenRequest = fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            body: new URLSearchParams(Object.entries(grant)).toString(),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': 'Basic '  + 'NjQ4ZmRkZTllZThkNDNkZjgzYjgyNzYxMzkyMWVhN2U6MjFkMjE2MTcxYTQzNGE4MjljZDM3OGQ5NTFhYzVlMzg='
            },
        });

        tokenRequest.then(response => response.json()).then(async (answer) => {
            if (answer.error) {
               console.log(answer.error)
               console.log(answer)
            } 

            localStorage.setItem("accessToken", answer.access_token);
            localStorage.setItem("refresh-token", answer.refresh_token);
            await this.refreshAccessToken(); // because first access token is apperantly invalid
            ;
        });

        await tokenRequest; 
    },

    async refreshAccessToken(){
        const access_token = window.location.hash.split('&')[0].split('=')[1]
        const refreshToken = localStorage.getItem("refresh-token");
    if (refreshToken === null) {
        return;
    }
    const code =Buffer.from(this.CLIENT_ID + ':' + this.CLIENT_SECRET).toString('base64')
    const grant = {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        code:'BQAoob9RyS6cDzmXqmuS6rcWhQ82tQ0-KBcqSlJ7u4DEaCE6kRAVVrRNC3hbAzRZx1NRfssNFn_ZJnwzg5SaZBRQ1xwewXSFoRkOPvsZQDv_rYwKGteJUIS5eL-4RoLv4HOCh0emaOl4Xg-Ll4Dkw5E1KORQciu1hrfvff-169KdAQbupuIEO0ZkE--AzZgXjjN6Jqk',
        client_id: this.CLIENT_ID,
        client_secret: this.CLIENT_SECRET,
        redirect_uri:"http://localhost:5173/home/"

    };
    const tokenRequest = fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        body: new URLSearchParams(grant),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization': 'Basic ' + 'NjQ4ZmRkZTllZThkNDNkZjgzYjgyNzYxMzkyMWVhN2U6MjFkMjE2MTcxYTQzNGE4MjljZDM3OGQ5NTFhYzVlMzg='
        },
    });

    tokenRequest.then(response => response.json()).then(async (answer) => {

        localStorage.setItem("accessToken", answer.access_token);
        localStorage.setItem("refresh-token", answer.refresh_token);
        setTimeout(() => this.refreshAccessToken(), (answer.expires_in - 100) * 1000);
    });
    /* tokenRequest.catch(async (error) => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("refresh-token");
        console.warn("access Token refresh failed (network error): " + error);
        await navigateTo("/login");
    }); */

    await tokenRequest;
    }




    
    
    
    
    
    
    
    
   
    
    },
    
    mounted () {
        const code = window.location.hash.split('&')[0].split('=')[1]
        this.getToken(code)
    }
}


</script>

<template>
  <div>
    
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
