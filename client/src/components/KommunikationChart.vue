<template>
  <Bar :chart-data="chartData" :width="150" :height="50" />
</template>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      kommunikationFeedbackData: [],
      chartData: {
        labels: [
          '1 - Sehr gut',
          '2 - Gut',
          '3 - Zufriedenstellend',
          '4 - Nicht gut',
          '5 - Gar nicht gut',
        ],
        datasets: [
          {
            label: 'Bewertung von 1 - 5',
            backgroundColor: '#B71C1C',
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  async created() {
    await this.getFeedbackData();
    this.setData();
  },
  methods: {
    setData() {
 
      this.chartData.datasets[0].data = this.kommunikationFeedbackData.map((el) =>
        Number(el.kommunikation_count),
      );
    },
    async getFeedbackData() {
      const { data } = await axios({
        url: '/feedbackdata',
        method: 'GET',
      });
      this.kommunikationFeedbackData = data[0];
    },
  },
};
</script>
