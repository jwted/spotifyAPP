<template>
  <canvas ref="myChart"></canvas><br>
</template>

<script>
import { useUserStore } from '../stores/userStore';
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      genresData: [],
      userStore: useUserStore(),
      chartInstance: null,
    };
  },

  mounted() {
    setTimeout(() => {
      this.fetchTopGenres();
    }, 0);
  },

  methods: {
    fetchTopGenres() {
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
        type: 'doughnut', 
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

