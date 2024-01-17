<script>
import {useUserStore} from '../stores/userStore.js'
import Chart from 'chart.js/auto';
import GraphGenre from "@/components/GraphGenre.vue"

export default{
    components: {
        GraphGenre,
    },

    data() {
        return {
            userStore:useUserStore(),
            genresData: [],
            chartInstance: null,
        }
    },  

    created () {
        /* console.log('first') */
        this.userStore.isLogged = true
    },
    
    mounted () {
        
        const urlObject = new URL(window.location);
        const code = urlObject.searchParams.get('code');
        
        setInterval(this.userStore.getUserInfo(code),3600000)
        /* this.getProfile(String(this.token)) */
        console.log(this.userStore.isLogged)

        //Graph Genres
        /* setTimeout(() => {
            this.fetchTopGenres();
        }, 0); */
    },
    methods: {
        //Graph Genres
        /* fetchTopGenres() {
            const genres = this.userStore.TopArtists.map(item => item.genres).flat();

            const genreCounts = genres.reduce((counts, genre) => {
                counts[genre] = (counts[genre] || 0) + 1;
                return counts;
            }, {});

            this.genresData = Object.entries(genreCounts).map(([label, value]) => ({
                label,
                value,
            }));

            const chartOptions = {
                type: 'doughnut', // Change the chart type if needed
                data: {
                labels: this.genresData.map(data => data.label),
                datasets: [
                    {
                    data: this.genresData.map(data => data.value),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                    ],
                    },
                ],
                },
                options: {
                    responsive: false, 
                    width: 200, 
                    height: 200, 
                },
            };
            this.chartInstance = new Chart(this.$refs.myChart, chartOptions);
            }, */
    },
}


</script>

<template>
    <v-container v-if="userStore.isLogged && userStore.userData.images && userStore.userData.images.length > 0">
        <!-- User -->
        <h1>My stats</h1><br>
        <v-row>
            <v-col style="width: 100px;">
                <!-- Followers -->
                <v-card style="width: 200px; height: 90px;">
                    <v-card-title>Followers</v-card-title>
                    <v-card-text style="font-size: small;">{{ this.userStore.userData.followers.total }}</v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <!-- Language -->
                <v-card style="width: 200px; height: 90px;">
                    <v-card-title>Language</v-card-title>
                    <v-card-text style="font-size: small;">{{ this.userStore.userData.country }}</v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <!-- Total artits followed (tem de ser artista) -->
                <!-- <v-card>
                    <v-card-title>Total of followed artists</v-card-title>
                    <v-card-text>{{ this.userStore.userDataFollowing.items[0].followers[0].total }}</v-card-text>
                </v-card> -->
            </v-col>
        </v-row><br>
        <h2>Top Artists</h2>
        <v-row rows="6">
            <v-col v-for="artist in this.userStore.TopArtists" cols="4">
                <v-card style="width: 180px;height: 200px;">
                    <v-img :src=artist.images[0].url style="width: 200px;height: 150px;"></v-img>
                    <v-card-title>{{ artist.name }}</v-card-title>
                    <!-- <v-card-text style="font-size: small;">{{ artist.genres }}</v-card-text> -->
                </v-card>
            </v-col>
        </v-row><br>
        <h2>Top Music</h2>
        <v-row rows="6">
            <v-col v-for="music in this.userStore.TopMusics" cols="4">
                <v-card style="width: 300px; height: 270px;">
                    <!-- <v-img :src=music.images.url style="width: 200px;height: 150px;"></v-img> -->
                    <v-card-title style="font-size: medium;">{{ music.name }}</v-card-title>
                    <v-card-text style="font-size: small;">Artist : {{ music.artists[0].name }}</v-card-text>
                    <v-card-text style="font-size: small;">Popularity : {{ music.popularity }}</v-card-text>
                    <v-card-text style="font-size: small;">Duration : {{ music.duration_ms }}ms</v-card-text>
                    <a :href="music.uri" style="padding: 10px;">
                        <v-btn elevation="2" outlined>LISTEN</v-btn>
                    </a>
                </v-card>
            </v-col>
        </v-row><br>
        <h3>Top Genres</h3>
        <v-container v-if="userStore.isLogged && userStore.userData.images && userStore.userData.images.length > 0">
            <GraphGenre/>
        </v-container>
        <!-- <canvas ref="myChart"></canvas><br> -->
    </v-container>
</template>

<style>

</style>
