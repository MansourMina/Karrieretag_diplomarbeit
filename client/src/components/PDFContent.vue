<template>
  <!-- eslint-disable -->
  <v-container>
    <section slot="pdf-content">
      <section class="pdf-item">
        <v-row class="mb-15 pb-16">
          <v-col cols="7">
            <v-toolbar-title>
              <img
                src="@/assets/logo.jpg"
                height="120"
                name="Logo HTL Wien West"
                alt="Logo"
                title="HTL Wien West Logo"
              />
            </v-toolbar-title>
          </v-col>
          <v-col cols="5" class="grey--text text--darken-2">
            HTL Wien West<br />
            Thaliastraße 125, 1160 Wien <br />
            karrieretag@htlwienwest.at <br />
            www.htlwienwest.at<br />
          </v-col>
        </v-row>
        <v-row class="mt-16" style="margin-top:100px">
          <v-col cols="7">
            <h3 class="font-weight-bold">Karrieretag 2022</h3>
            <h5>HTL Wien West</h5>
          </v-col>
          <v-col cols="5">
            <h6>
              Report erstellt<span style="margin-left: 10px ">
                <b>{{ new Date().toString().substring(3, 15) }}</b></span
              >
            </h6>
          </v-col>
        </v-row>
        <v-row>
          <v-data-table
            calculate-widths
            :headers="headers"
            :items="nurTeilnehmer"
            hide-default-footer
            class="elevation-0 stripe my-10"
          >
            <template v-slot:item.aufbauhilfe="{ item }">
              {{ booleanInString(item.aufbauhilfe) }}
            </template>
            <template v-slot:item.vortrag_auswahl="{ item }">
              <span v-if="item.vortrag_auswahl != null"
                ><b>{{
                  item.vortrag_auswahl
                    .replaceAll(',', '-')
                    .replace('Maschinenbau', 'M')
                }}</b>
              </span>
              <span v-else>Nein</span>
            </template>
            <template v-slot:item.platz="{ item }">
              {{ item.platz == 'Gang' ? 'G' : 'K' }}
            </template>
          </v-data-table>
        </v-row>
        <v-row style="margin-top: 50px; ">
          <v-col style="text-align:right; padding-bottom: 0" cols="12"
            >Teilnehmende Firmen:
            <span class="ml-10" style="margin-left: 10px">{{
              nurTeilnehmer.length
            }}</span
            ><br
          /></v-col>
          <v-col style="text-align:right; padding-bottom: 0" cols="12"
            >Abgelehnte Firmen:
            <span class="ml-10" style="margin-left: 10px">{{
              nurAbgelehnt.length
            }}</span
            ><br
          /></v-col>
          <v-col style="text-align:right;" cols="12"
            >Noch offen:
            <span class="ml-10" style="margin-left: 10px">{{
              nurOffen.length
            }}</span
            ><br
          /></v-col>
          <v-divider dark></v-divider>
          <v-col style="text-align:right; padding-top: 1px" cols="12"
            ><b>Anfragen Gesamt:</b>
            <span class="ml-10" style="margin-left: 10px">{{
              antraege.length
            }}</span
            ><br
          /></v-col>
        </v-row>
      </section>
    </section>
  </v-container>
</template>

<script>
export default {
  props: {
    antraege: {
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Firmen Name',
          align: 'start',
          value: 'firmen_name',
        },
        { text: 'Aufbauhilfe', value: 'aufbauhilfe' },
        { text: 'Vortrag?', value: 'vortrag_auswahl' },
        { text: 'Ansprechpartner', value: 'ansprechpartner_teilnahme_tel' },
        { text: 'Platz', value: 'platz' },
      ],
    };
  },
  computed: {
    nurTeilnehmer() {
      return this.antraege.filter(
        (el) => el.status == 'Teilnehmer' || el.status == 'teilnehmer',
      );
    },
    nurAbgelehnt() {
      return this.antraege.filter(
        (el) => el.status == 'Abgelehnt' || el.status == 'abgelehnt',
      );
    },
    nurOffen() {
      return this.antraege.filter(
        (el) => el.status == 'Anfrage' || el.status == 'anfrage',
      );
    },
  },
  methods: {
    booleanInString(boolean) {
      switch (boolean) {
        case true:
          return 'Ja';
        case false:
          return 'Nein';
        default:
          return 'ungültig';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
tr:nth-of-type(4n + 3) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
