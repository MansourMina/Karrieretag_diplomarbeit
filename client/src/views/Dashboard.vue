<template>
  <v-container>
    <v-row>
      <v-col cols="6" sm="6" md="3" class="pa-0">
        <v-card class="pa-5 ma-3">
          <v-list-item-content>
            <v-list-item-title
              ><b>Anträge</b
              ><v-icon class="ml-2" small
                >mdi-application-import</v-icon
              ></v-list-item-title
            >
            <h4 class="mt-5 mb-2 font-weight-bold">
              {{ antraege.length }}
            </h4>
            <v-list-item-subtitle class="grey--text"
              ><b>Anzahl</b></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6" md="3" class="pa-0">
        <v-card class="pa-5 ma-3">
          <v-list-item-content>
            <v-list-item-title
              ><b>Formular ausgefüllt</b
              ><v-icon class="ml-2" small color="green darken-4"
                >mdi-cloud-check</v-icon
              ></v-list-item-title
            >
            <h4 class="mt-5 mb-2  font-weight-bold">
              {{ antraege.filter((el) => el.status == 'Teilnehmer').length }}/{{
                antraege.filter(
                  (el) => el.status == 'Teilnehmer' && el.formular == true,
                ).length
              }}
            </h4>
            <v-list-item-subtitle class="grey--text"
              ><b>Anzahl</b></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6" md="3" class="pa-0">
        <v-card class="pa-5 ma-3">
          <v-list-item-content>
            <v-list-item-title
              ><b>Antrag offen </b
              ><v-icon class="ml-2" small color="blue darken-4"
                >mdi-folder-open-outline</v-icon
              ></v-list-item-title
            >
            <h4 class="mt-5 mb-2 font-weight-bold">
              {{ antraege.filter((el) => el.status == 'Anfrage').length }}/{{
                antraege.length
              }}
            </h4>
            <v-list-item-subtitle class="grey--text"
              ><b>Anzahl</b></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6" md="3" class="pa-0">
        <v-card class="pa-5 ma-3">
          <v-list-item-content>
            <v-list-item-title
              ><b>Abgelehnt</b
              ><v-icon class="ml-2" small color="red darken-4"
                >mdi-minus-circle</v-icon
              ></v-list-item-title
            >
            <h4 class="mt-5 mb-2 font-weight-bold">
              {{ antraege.filter((el) => el.status == 'Abgelehnt').length }}/{{
                antraege.length
              }}
            </h4>
            <v-list-item-subtitle class="grey--text"
              ><b>Anzahl</b></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col>
        <UebersichtVerlauf :activities="activities" />
      </v-col>
      <v-col>
        <UebersichtAntrag :antraege="antraege" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UebersichtAntrag from '../components/UebersichtAntrag.vue';
import UebersichtVerlauf from '../components/UebersichtVerlauf.vue';
// import axios from 'axios';
export default {
  components: { UebersichtAntrag, UebersichtVerlauf },
  data: () => ({}),
  props: {
    antraege: {
      type: Array,
    },
    activities: {
      type: Array,
    },
  },
  created() {
    // this.getAnfragen();
  },
  methods: {
    // async getAnfragen() {
    //   const { data } = await axios({
    //     url: 'http://127.0.0.1:3000/anzahlbydatum',
    //     method: 'GET',
    //   });
    //   this.values = data.map((el) => Number(el.anzahl));
    //   this.labels = data.map((el) => el.datum.substring(5, 10));
    // },
  },
};
</script>

<style lang="scss" scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
