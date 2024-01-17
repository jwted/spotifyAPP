import { defineStore } from "pinia";
import axios from 'axios'
import { Buffer } from 'buffer'
export const useUserStore = defineStore('user', {
  state: () => ({
    userData:{},
    TopArtists:[],
    TopMusics:[],
    isLogged:false,
    CLIENT_ID:"648fdde9ee8d43df83b827613921ea7e" ,
    CLIENT_SECRET:"21d216171a434a829cd378d951ac5e38",
    REDIRECT_URL_LOGIN:"http://localhost:5173/home",
    REDIRECT_URL_LOGIN_ENCODED:"http%3A%2F%2Flocalhost%3A5173%2Fhome%2F",

  }),
  getters: {
    getUserData:(state) => state.userData,
    getTopArtists:(state) => state.TopArtists,
    getTopMusics:(state) => state.TopMusics,
  },
  actions: {
      async getUserInfo(code) {
        const verifier = localStorage.getItem("verifier")
        const data = {
          'code': code,
          'redirect_uri': 'http://localhost:5173/home',
          'grant_type': 'authorization_code',
          'code_verifier': verifier
        }

        //Token
        await axios.post("https://accounts.spotify.com/api/token", data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + (new Buffer.from(this.CLIENT_ID + ':' + this.CLIENT_SECRET).toString('base64'))
            }
          })
          .then((response) => this.token = (response.data.access_token))
          .catch((err) => console.log(err));

        //User Data
        await axios.get("https://api.spotify.com/v1/me", {
            headers: {
              'Authorization': 'Bearer ' + this.token
            }
          })
          .then((response) => this.userData = response.data, console.log(this.userData))
          .catch((err) => console.log(err));

        //Top Artist Data
        await axios.get("https://api.spotify.com/v1/me/top/artists", {
            headers: {
              'Authorization': 'Bearer ' + this.token
            }
          })
          .then((response) => this.TopArtists = (response.data.items))
          .catch((err) => console.log(err));
        this.TopArtists = this.TopArtists.slice(0, 6)

        //Top Music Data
        await axios.get("https://api.spotify.com/v1/me/top/tracks", {
            headers: {
              'Authorization': 'Bearer ' + this.token
            }
          })
          .then((response) => this.TopMusics = (response.data.items))
          .catch((err) => console.log(err));
        this.TopMusics = this.TopMusics.slice(0, 6)
      },


      logout() {
        this.$reset()
        console.log('sai fdp')
      }
    },
    methods: {

    },
  });