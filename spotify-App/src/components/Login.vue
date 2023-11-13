<script>
/* import { userStore } from '../stores/counter' */

export default{
data() {
  return {
    CLIENT_ID:"648fdde9ee8d43df83b827613921ea7e" ,
    AUTH_ENDPOINT:"https://accounts.spotify.com/authorize",
    REDIRECT_URL_LOGIN:"http://localhost:5173/home/",
    REDIRECT_URL_LOGIN_ENCODED:"http%3A%2F%2Flocalhost%3A5173%2Fhome%2F",
    SCOPES:["user-read-currently-playing", "user-read-playback-state"], /// o que se quer obter do user
    SCOPES_PARAMS: ""
  }
},  

mounted () {
  
   const {access_token,expires_in,token_type} = this.getParamsFromAUTH(window.location.hash)
   localStorage.setItem("accessToken",access_token)
   localStorage.setItem("expiresIN",expires_in)
},



methods: {
  login() {
    this.SCOPES_PARAMS = this.SCOPES.join("%20")
    window.location = `${this.AUTH_ENDPOINT}?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URL_LOGIN}&scope=${this.SCOPES_PARAMS}&response_type=token`
  },

  getParamsFromAUTH(hash){
    const stringAfterHashtag = hash.substring(1)
    const pararmsInUrl = stringAfterHashtag.split("&")
    const paramsSplitUp = pararmsInUrl.reduce((accumulater,currentValue)=>{
      const [key,value]= currentValue.split('=')
      accumulater[key] = value
      return accumulater
    },{})
    return paramsSplitUp
  }
},


}
    
    


</script>

<template>
  <div>
    <button @click="login">LOGIN</button>
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
