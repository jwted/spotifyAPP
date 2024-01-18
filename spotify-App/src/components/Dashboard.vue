<script>
import {useUserStore} from '../stores/userStore.js'
import Chart from 'chart.js/auto';
import GraphGenre from "@/components/GraphGenre.vue"
import GraphMusic from "@/components/GraphMusic.vue"

export default{
    components: {
        GraphGenre,
        GraphMusic
    },

    data() {
        return {
            userStore:useUserStore(),
            dialog: false,
            music: null,
        }
    },  

    created () {
        this.userStore.isLogged = true
    },
    
    mounted () {
        
        const urlObject = new URL(window.location);
        const code = urlObject.searchParams.get('code');
        
        setInterval(this.userStore.getUserInfo(code),3600000)

    },
    methods: {
        

            openModal(music) {
                this.music = music;
                this.dialog = true;
            },
            closeModal() {
                this.dialog = false;
            },
    },
}
</script>

<template>
    <v-container v-if="userStore.isLogged && userStore.userData.images && userStore.userData.images.length > 0">
        <!-- User -->
        <h1>My stats</h1><br>
        <v-row>
            <v-col style="width: 10px">
                <!-- URL -->
                <v-card style="width: 200px; height: 90px;">
                    <v-card-title>My Account</v-card-title>
                    <a :href="this.userStore.userData.uri" style="padding: 10px;">
                        <v-btn elevation="2" outlined>Go</v-btn>
                    </a>
                </v-card>
            </v-col>
            <v-col style="width: 10px;">
                <!-- Followers -->
                <v-card style="width: 200px; height: 90px;">
                    <v-card-title>Followers</v-card-title>
                    <v-card-text style="font-size: small;">{{ this.userStore.userData.followers.total }}</v-card-text>
                </v-card>
            </v-col>
            <v-col style="width: 10px">
                <!-- Language -->
                <v-card style="width: 200px; height: 90px;">
                    <v-card-title>Language</v-card-title>
                    <v-card-text style="font-size: small;">{{ this.userStore.userData.country }}</v-card-text>
                </v-card>
            </v-col>
            <v-col style="width: 10px">
                <!-- Type -->
                <v-card style="width: 200px; height: 90px;">
                    <v-card-title>Subscription</v-card-title>
                    <v-card-text style="font-size: small;">{{ this.userStore.userData.product }}</v-card-text>
                </v-card>
            </v-col>
        </v-row><br>
        <h2>Top Artists</h2>
        <v-row rows="6">
            <v-col v-for="artist in this.userStore.TopArtists" cols="4">
                <v-card style="width: 180px;height: 200px;">
                    <v-img :src=artist.images[0].url style="width: 200px;height: 150px;"></v-img>
                    <v-card-title>{{ artist.name }}</v-card-title>
                </v-card>
            </v-col>
        </v-row><br>
        <h2>Top Music</h2>
        <v-row rows="6">
            <v-col v-for="music in this.userStore.Music" cols="6">
                <v-card style="width: 400px; height: 600px;">
                    <v-card-title style="font-size: medium;">{{ music.name }}</v-card-title>
                    <v-card-text style="font-size: medium;">Artist : {{ music.artists[0].name }}</v-card-text>
                    <v-card-text style="font-size: medium;">Popularity : {{ music.popularity }} (0-100)</v-card-text>
                    <v-card-text style="font-size: medium;">Duration : {{ music.duration_ms }}ms</v-card-text>
                    <v-card-text style="font-size: medium;">Details :</v-card-text>
                    <GraphMusic :musicInfo="music.graph" />
                    
                    <a :href="music.uri" style="padding: 10px;">
                            <v-btn elevation="2" outlined>LISTEN</v-btn>
                    </a>
                                                </v-card>
                </v-col>
        </v-row><br>
        <h2>Most Heard Genres</h2>
        <v-container v-if="userStore.isLogged && userStore.userData.images && userStore.userData.images.length > 0">
            <GraphGenre/>
        </v-container>
        </v-container>
</template>

<style>

</style>
 