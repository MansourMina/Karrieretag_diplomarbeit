<template>
  <div>
    <v-container
      v-if="Date.now() > new Date(karrieretagDaten.datum) == false"
      style="height: 80vh; width: 100vw; display:flex; justify-content:center; align-items:center"
    >
      Hallo Test
    </v-container>
    <v-container class="pa-md-15 pt-0" fluid v-else>
      <v-card elevation="0">
        <v-card-text class="d-flex justify-content-center mt-5">
          <v-chip-group
            active-class="red darken-4 white--text"
            v-model="selectedType"
          >
            <v-chip class="mr-2" value="alle">
              <v-icon left color="blue-grey lighten-2">
                mdi-all-inclusive
              </v-icon>
              Alles
            </v-chip>
            <v-chip class="mr-2" value="diagramme">
              <v-icon left color="blue-grey lighten-2">
                mdi-chart-bar
              </v-icon>
              Diagramme
            </v-chip>
            <v-chip value="firmen-feedback">
              <v-icon left color="blue-grey lighten-2">
                mdi-thumbs-up-down-outline
              </v-icon>
              Firmen Feedback
            </v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-text class="text-center pb-0 mb-0">
          <h3>
            <b
              >{{ feedbacks.length }}
              {{ feedbacks.length == 1 ? 'Feedback' : 'Feedbacks' }}</b
            >
          </h3>
        </v-card-text>
        <!-- Diagramme -->
        <div v-show="selectedType == 'alle' || selectedType == 'diagramme'" >
          <v-card-title class=" ml-0 pl-0 pt-0 ">
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
          <v-row class="pt-0 mt-5 justify-content-center text-center ma-md-10 ">
            <v-row class="pt-0 mt-0">
              <v-card class="d-flex flex-wrap pa-5 ">
                <v-col cols="12" sm="6" md="3" class="pa-0">
                  <v-sheet
                    class="v-sheet--offset mx-auto"
                    color="red darken-4"
                    elevation="12"
                    max-width="calc(100% - 32px)"
                  >
                    <v-sparkline
                      :labels="labels"
                      :value="value"
                      color="white"
                      line-width="2"
                      padding="16"
                    ></v-sparkline>
                  </v-sheet>

                  <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2">
                      User Registrations
                    </div>
                    <div class="subheading font-weight-light grey--text">
                      Last Campaign Performance
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>
                      mdi-clock
                    </v-icon>
                    <span class="text-caption grey--text font-weight-light"
                      >last registration 26 minutes ago</span
                    >
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" md="3" class="pa-0">
                  <v-sheet
                    class="v-sheet--offset mx-auto"
                    color="red darken-4"
                    elevation="12"
                    max-width="calc(100% - 32px)"
                  >
                    <v-sparkline
                      :labels="labels"
                      :value="value"
                      color="white"
                      line-width="2"
                      padding="16"
                    ></v-sparkline>
                  </v-sheet>

                  <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2">
                      User Registrations
                    </div>
                    <div class="subheading font-weight-light grey--text">
                      Last Campaign Performance
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>
                      mdi-clock
                    </v-icon>
                    <span class="text-caption grey--text font-weight-light"
                      >last registration 26 minutes ago</span
                    >
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" md="3" class="pa-0">
                  <v-sheet
                    class="v-sheet--offset mx-auto"
                    color="red darken-4"
                    elevation="12"
                    max-width="calc(100% - 32px)"
                  >
                    <v-sparkline
                      :labels="labels"
                      :value="value"
                      color="white"
                      line-width="2"
                      padding="16"
                    ></v-sparkline>
                  </v-sheet>

                  <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2">
                      User Registrations
                    </div>
                    <div class="subheading font-weight-light grey--text">
                      Last Campaign Performance
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>
                      mdi-clock
                    </v-icon>
                    <span class="text-caption grey--text font-weight-light"
                      >last registration 26 minutes ago</span
                    >
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" md="3" class="pa-0">
                  <v-sheet
                    class="v-sheet--offset mx-auto"
                    color="red darken-4"
                    elevation="12"
                    max-width="calc(100% - 32px)"
                  >
                    <v-sparkline
                      :labels="labels"
                      :value="value"
                      color="white"
                      line-width="2"
                      padding="16"
                    ></v-sparkline>
                  </v-sheet>

                  <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2">
                      User Registrations
                    </div>
                    <div class="subheading font-weight-light grey--text">
                      Last Campaign Performance
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>
                      mdi-clock
                    </v-icon>
                    <span class="text-caption grey--text font-weight-light"
                      >last registration 26 minutes ago</span
                    >
                  </v-card-text>
                </v-col>
              </v-card>
            </v-row>
            <v-col cols="12" md="7"
              ><v-card
                class="pa-md-10 pa-5  "
                min-height="510"
                max-height="510"
              >
                <p class="text-body-1">
                  Teilnahme Prozess der Veranstaltung
                  <b>({{ getYear }} Feedback)</b>
                </p>
                <BarChart /> </v-card
            ></v-col>
            <v-col cols="12" md="5"
              ><v-card class="pa-md-10 pa-5" min-height="510" max-height="510">
                <p class="text-body-1">
                  Erneute Teilnahme <b>({{ getYear }} Feedback)</b>
                </p>

                <v-container class="d-flex justify-content-center">
                  <PieChart /> </v-container></v-card
            ></v-col>
            <v-col cols="12" md="6"
              ><v-card class="pa-md-10 pa-5" min-height="510" max-height="510">
                <p class="text-body-1">
                  Dauer der Veranstaltung <b>({{ getYear }} Feedback)</b>
                </p>

                <v-container class="d-flex justify-content-center">
                  <DonutChart /> </v-container></v-card
            ></v-col>
            <v-col cols="12" md="6"
              ><v-card class="pa-md-10 pa-5" min-height="510" max-height="510">
                <p class="text-body-1">
                  Organisation der Veranstaltung
                  <b>({{ getYear }} Feedback)</b>
                </p>
                <LineChart /> </v-card
            ></v-col>
          </v-row>
        </div>

        <!-- Jede Firma -->
        <div
          v-show="selectedType == 'firmen-feedback' || selectedType == 'alle'"
          class="mt-16"
        >
          <v-card-title class="ml-0 pl-0">
            <span class="text-h5"
              >Firmen Feedbacks <b>{{ getYear }}</b></span
            >
            <v-spacer></v-spacer>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <div v-if="filterFeedbacks.length != 0" class="pa-md-10 ">
            <v-expansion-panels focusable popout>
              <v-expansion-panel
                v-for="f of filterFeedbacks"
                :key="f.feedback_id"
                class="ma-2 "
              >
                <v-expansion-panel-header
                  expand-icon="mdi-thumbs-up-down-outline"
                >
                  <v-row no-gutters>
                    <v-col cols="4">
                      {{ f.firmen_name }}
                    </v-col>
                    <v-col cols="8" class="text--secondary">
                      <v-fade-transition leave-absolute>
                        <v-row no-gutters style="width: 100%">
                          <v-col cols="6">
                            Datum:
                            {{
                              new Date(
                                f.feedback_zeitpunkt.substring(0, 10),
                              ).toLocaleDateString()
                            }}
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
                        :class="
                          f.kommentar ? '' : 'text--secondary font-italic'
                        "
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
  </div>
</template>

<script>
import axios from 'axios';
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
import DonutChart from '@/components/DonutChart.vue';
import LineChart from '@/components/LineChart.vue';
export default {
  components: {
    BarChart,
    PieChart,
    DonutChart,
    LineChart,
  },
  props: {
    karrieretagDaten: {
      type: Object,
    },
  },
  methods: {
    checkDate() {
      return;
    },
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
  },
  created() {
    this.getFeedbacks();
  },
  computed: {
    filterFeedbacks() {
      return this.feedbacks.filter((el) =>
        el.firmen_name.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
    getYear() {
      const date = new Date(this.karrieretagDaten.datum);
      return date.getFullYear();
    },
  },
  data: () => ({
    selectedType: 'alle',
    feedbacks: [],
    search: '',
    labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
};
</script>

<style>
.v-sheet--offset {
  top: -40px;
  position: relative;
}
</style>
