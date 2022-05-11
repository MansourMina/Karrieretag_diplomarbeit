<template>
  <v-container class="pa-15 mt-5" fluid>
    <v-card elevation="0">
      <v-card class="grey lighten-3 "
        ><v-card-title class="text-uppercase justify-center font-weight-bold ">
          Karrieretag Feedback
        </v-card-title>
      </v-card>
      <v-card-text class="d-flex justify-content-center mt-5">
        <v-chip-group
          active-class="red darken-4 white--text"
          v-model="selectedType"
        >
          <v-chip class="mr-2" value="alle">
            <v-icon left>
              mdi-all-inclusive
            </v-icon>
            Alles
          </v-chip>
          <v-chip class="mr-2" value="diagramme">
            <v-icon left>
              mdi-chart-bar
            </v-icon>
            Diagramme
          </v-chip>
          <v-chip value="firmen-feedback">
            <v-icon left>
              mdi-thumbs-up-down-outline
            </v-icon>
            Firmen Feedback
          </v-chip>
        </v-chip-group>
      </v-card-text>
      <!-- Diagramme -->
      <div v-if="selectedType == 'alle' || selectedType == 'diagramme'">
        <v-card-title class=" ml-0 pl-0 pt-0">
          <v-row class="mb-0">
            <v-col cols="1">
              <v-icon large color="black">
                mdi-chart-bar
              </v-icon>
            </v-col>
            <v-col cols="11">
              <v-divider class="mx-4"></v-divider>
            </v-col>
          </v-row>
        </v-card-title>
        <v-row class="mt-5">
          <v-col cols="12" md="8"
            ><p class="text-body-1">Kommunikation mit dem Organisator</p>
            <KommunikationChart
          /></v-col>
          <v-col cols="12" md="4"
            ><p class="text-body-1">Teilnahme Prozess der Veranstaltung</p>
            <Chart :def="pie" :data="teilnahmeProzessFeedbackData"></Chart
          ></v-col>
        </v-row>
      </div>

      <!-- Jede Firma -->
      <div
        v-if="selectedType == 'firmen-feedback' || selectedType == 'alle'"
        class="mt-16"
      >
        <v-card-title class="ml-0 pl-0">
          <span class="text-h5">Firmen Feedbacks</span>
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <div v-if="filterFeedbacks.length != 0">
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="f of filterFeedbacks"
              :key="f.feedback_id"
              class="ma-2"
            >
              <v-expansion-panel-header>
                <v-row no-gutters>
                  <v-col cols="4">
                    {{ f.firmen_name }}
                  </v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <v-row no-gutters style="width: 100%">
                        <v-col cols="6">
                          Datum: {{ f.feedback_zeitpunkt.substring(0, 10) }}
                        </v-col>
                        <v-col cols="6">
                          {{ f.gesamt_zufriedenheit }}
                        </v-col>
                      </v-row>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-subheader class="pl-0 ml-0">
                      Was hat Ihnen am Karrieretag gefallen?
                    </v-subheader>
                    {{ f.gefallen }}
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-subheader class="pl-0 ml-0">
                      Was hat Ihnen am Karrieretag nicht gefallen?
                    </v-subheader>
                    {{ f.nicht_gefallen }}
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-divider></v-divider>

                    <v-subheader class="pl-0 ml-0">
                      Wie fanden Sie die Organisation der Veranstaltung?
                    </v-subheader>
                    {{ f.organisiert }}
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-divider></v-divider>

                    <v-subheader class="pl-0 ml-0">
                      Wie fanden Sie die Kommunikation mit dem Organisator?
                    </v-subheader>
                    {{
                      !f.kommunikation || getSchulnotenInText(f.kommunikation)
                    }}
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-divider></v-divider>

                    <v-subheader class="pl-0 ml-0">
                      Wie fanden sie den Teilnahme Prozess der Veranstaltung?
                    </v-subheader>
                    {{
                      !f.teilnahme_prozess ||
                        getSchulnotenInText(f.teilnahme_prozess)
                    }}
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-divider></v-divider>

                    <v-subheader class="pl-0 ml-0">
                      War die Dauer der Veranstaltung zu lang, zu kurz oder
                      ungefähr richtig?
                    </v-subheader>

                    {{ f.dauer }}
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-divider></v-divider>

                    <v-subheader class="pl-0 ml-0">
                      Würden Sie erneut an dem Karrieretag teilnehmen?
                    </v-subheader>
                    {{ f.erneute_teilnahme ? 'Ja' : 'Nein' }}
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-divider></v-divider>

                    <v-subheader class="pl-0 ml-0">
                      Hat Ihnen etwas gefehlt?
                    </v-subheader>
                    <span
                      :class="f.kommentar ? '' : 'text--secondary font-italic'"
                      >{{ f.kommentar || 'Wurde nicht ausgefüllt' }}</span
                    >
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div v-else class="mx-0 my-5 ma-lg-10 center">
          <p><i>No data available</i></p>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import Chart from 'vue-chartless';
import KommunikationChart from '@/components/KommunikationChart.vue';
export default {
  components: {
    Chart,
    KommunikationChart,
  },
  methods: {
    async getFeedbacks() {
      const { data } = await axios({
        url: '/feedbacks',
        method: 'GET',
      });
      this.feedbacks = data;
    },
    getSchulnotenInText(nummer) {
      const notenInText = [
        'Sehr gut',
        'Gut',
        'Zufriedenstellend',
        'Nicht gut',
        'Gar nicht gut',
      ];
      return notenInText[nummer - 1];
    },
    async getFeedbackData() {
      const { data } = await axios({
        url: '/feedbackdata',
        method: 'GET',
      });
      data[1].forEach((el) =>
        this.teilnahmeProzessFeedbackData.push({
          label: this.getSchulnotenInText(el.teilnahme_prozess),
          value: el.teilnahme_prozess_count,
        }),
      );

      console.log();
    },
  },
  created() {
    this.getFeedbacks();
    this.getFeedbackData();
  },
  computed: {
    filterFeedbacks() {
      return this.feedbacks.filter((el) =>
        el.firmen_name.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  data: () => ({
    selectedType: 'alle',
    feedbacks: [],
    bar: {
      type: 'bar',
    },
    pie: {
      type: 'pie',
    },

    teilnahmeProzessFeedbackData: [],
    search: '',
  }),
};
</script>
