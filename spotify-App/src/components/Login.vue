<script>
import { useUserStore } from '../stores/userStore'

export default{
data() {
  return {
    CLIENT_ID:"648fdde9ee8d43df83b827613921ea7e" ,
    AUTH_ENDPOINT:"https://accounts.spotify.com/authorize",
    REDIRECT_URL_LOGIN:"http://localhost:5173/home",
    REDIRECT_URL_LOGIN_ENCODED:"http%3A%2F%2Flocalhost%3A5173%2Fhome%2F",
    SCOPES:["user-read-currently-playing", "user-read-playback-state","user-read-private","user-read-email"], /// o que se quer obter do user
    SCOPES_PARAMS: "",
    userStore:useUserStore()
  }
},  

mounted () {
  

},



methods: {
  
  generateCodeVerifier(length){
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  },
  
  async generateCodeChallange(codeVerifier){
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
  },
  
  async login() {
      if(!this.userStore.isLogged){

        const verifier = this.generateCodeVerifier(128);
        const challenge = await this.generateCodeChallange(verifier);
     
    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", this.CLIENT_ID);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5173/home");
    params.append("scope", "user-read-private user-read-email user-top-read");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);
    window.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    
  }else{
    this.$router.push('/home')
  }
    
   },

  
},


}

</script>

<template>
  <div>
    <button v-if="!userStore.isLogged"
    @click="login" 
    style="color:#FFF;font-size: 18px;font-style: normal;font-weight: 500;">
      Login
    </button>
    <button v-if="userStore.isLogged"
    @click="this.$router.push('/home')" 
    style="color:#FFF;font-size: 18px;font-style: normal;font-weight: 500;">
      Dashboard
    </button>
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
