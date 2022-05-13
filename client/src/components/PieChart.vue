<template>
  <div style="max-width: 100vw; max-height: 100vh" v-if="loaded">
    <Pie :chart-data="chartData" :width="350" :height="350" />
  </div>
</template>

<script>
import axios from 'axios';
import { Pie } from 'vue-chartjs/legacy';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: 'PieChart',
  components: {
    Pie,
  },
  methods: {
    async getFeedbackData() {
      const { data } = await axios({
        url: '/feedbackdata',
        method: 'GET',
      });
      data[2].forEach((el) =>
        el.erneute_teilnahme == false
          ? (this.chartData.datasets[0].data[0] = el.erneute_teilnahme_count)
          : (this.chartData.datasets[0].data[1] = el.erneute_teilnahme_count),
      );
    },
  },
  async created() {
    await this.getFeedbackData();

    // Ansonsten lädt die Chart nicht. Man müsste dann immer auf die Chart drücken oder das Fenster kleiner machen, um es sich anzuzeigen.
    this.loaded = true;
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Ja', 'Nein'],
        datasets: [
          {
            backgroundColor: ['#00C853', '#B71C1C'],
            data: [0, 0],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      erneuteTeilnahmeFeedbackData: [],
    };
  },
};
</script>
