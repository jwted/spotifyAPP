<template>
    <canvas ref="myChart"></canvas>
</template>
  
<script>
  import { useUserStore } from '../stores/userStore';
  import Chart from 'chart.js/auto';
  
  export default {
    props: {
        musicInfo: {
            type: Object,
            default: {}
        },
    },

    data() {
      return {
        musicData: [],
        userStore: useUserStore(),
        chartInstance: null,
      };
    },
  
    mounted() {
      setTimeout(() => {
        this.fetchMusicDetails();
      }, 0);
    },
  
    methods: {
        fetchMusicDetails() {

            let acousticness = this.musicInfo.acousticness
            let danceability = this.musicInfo.danceability
            let energy = this.musicInfo.energy
            let instrumentalness = this.musicInfo.instrumentalness
            let key = this.musicInfo.key
            let liveness = this.musicInfo.liveness
            let loudness = this.musicInfo.loudness
            let mode = this.musicInfo.mode
            let speechiness = this.musicInfo.speechiness
            /* let tempo = this.musicInfo.tempo */
            let timeSignature = this.musicInfo.time_signature
            let valence = this.musicInfo.valence
    
            const chartOptions = {
            type: 'polarArea', 
            data: {
                labels: [
                    'Acousticness',
                    'Dance ability',
                    'Energy',
                    'Instrumentalness',
                    'Key',
                    'Liveness',
                    'Loudness',
                    'Mode',
                    'Speechiness',
                    'Time_signature',
                    'Valence'
                ],
                datasets: [
                {
                    data: [acousticness,danceability,energy,instrumentalness,key,liveness,loudness,mode,speechiness,timeSignature,valence],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', 
                    'rgba(54, 162, 235, 0.6)', 
                    'rgba(255, 206, 86, 0.6)', 
                    'rgba(75, 192, 192, 0.6)', 
                    'rgba(153, 102, 255, 0.6)', 
                    'rgba(255, 159, 64, 0.6)', 
                    'rgba(0, 128, 0, 0.6)', 
                    'rgba(255, 0, 255, 0.6)',
                    'rgba(128, 128, 128, 0.6)', 
                    'rgba(0, 0, 255, 0.6)', 
                    'rgba(255, 0, 0, 0.6)' 
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
        },
        },
  };
</script>
  
<style lang="css" scoped>
  canvas{
    width: 300px;
    height: 750px;
  }
</style>
  
  