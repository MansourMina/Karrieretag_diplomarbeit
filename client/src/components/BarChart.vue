<template>
  <div v-if="loaded">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
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
      loaded: false,
      teilnahmeProzessFeedback: [],
      kommunikationFeedback: [],
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
            label: 'Kommunikation mit Organsiator ',
            backgroundColor: '#B71C1C',
            data: [0, 0, 0, 0, 0],
          },
          {
            label: 'Teilnahme Prozess ',
            backgroundColor: '#0D47A1',
            data: [0, 0, 0, 0, 0],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },

  async created() {
    await this.getFeedbackData();
    await this.setData();

    // Ansonsten lädt die Chart nicht. Man müsste dann immer auf die Chart drücken oder das Fenster kleiner machen, um es sich anzuzeigen.
    this.loaded = true;
  },
  methods: {
    setData() {
      const kommunikation = this.chartData.datasets
        .filter((el) => el.label.includes('Kommunikation'))
        .map((el) => el.data)[0];
      const teilnahmeProzess = this.chartData.datasets
        .filter((el) => el.label.includes('Teilnahme'))
        .map((el) => el.data)[0];

      this.kommunikationFeedback.forEach((el) => {
        kommunikation[Number(el.kommunikation) - 1] = Number(
          el.kommunikation_count,
        );
      });
      this.teilnahmeProzessFeedback.forEach((el) => {
        teilnahmeProzess[Number(el.teilnahme_prozess) - 1] = Number(
          el.teilnahme_prozess_count,
        );
      });
    },
    async getFeedbackData() {
      const { data } = await axios({
        url: '/feedbackdata',
        method: 'GET',
      });
      this.kommunikationFeedback = data[0];
      this.teilnahmeProzessFeedback = data[1];
    },
  },
};
</script>
