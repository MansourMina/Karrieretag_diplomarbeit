<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card class="mx-auto" max-width="750" elevation="0">
          <v-img
            class="white--text align-end"
            height="300px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-title class="pb-0">
            Number 10
          </v-card-title>

          <v-card-text class="text--primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ea
            tempora quisquam aut sed in possimus quas molestias reprehenderit
            reiciendis enim, ullam, iste consequatur eum assumenda dolore ipsum,
            error facere?Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ducimus ea tempora quisquam aut sed in possimus quas molestias
            reprehenderit reiciendis enim, ullam, iste consequatur eum assumenda
            dolore ipsum, error facere?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ducimus ea tempora quisquam aut sed in possimus
            quas molestias reprehenderit reiciendis enim, ullam, iste
            consequatur eum assumenda dolore ipsum, error facere?
          </v-card-text>

          <v-card-actions>
            <v-btn color="red" text>
              Antrag stellen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-col cols="12">
          <v-card elevation="0">
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card elevation="0">
            <v-card-title>
              Kategorien
            </v-card-title>
            <v-container class="d-flex flex-column">
              <v-btn v-for="k of kategorien" :key="k.name" text class="ma-3">{{
                k.name
              }}</v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
    <v-card elevation="0">
      <v-card-title
        >Unternehmen und Bildungseinrichtungen die 2018 - 2020 am Karrieretag
        teilgenommen haben:</v-card-title
      >
      <v-row>
        <v-col cols="4">
          <v-card-text v-for="k of firmenList1" :key="k.name" class=" pa-0">{{
            k.name
          }}</v-card-text>
        </v-col>
        <v-col cols="4">
          <v-card-text v-for="k of firmenList2" :key="k.name" class=" pa-0">{{
            k.name
          }}</v-card-text>
        </v-col>
        <v-col cols="4">
          <v-card-text v-for="k of firmenList3" :key="k.name" class=" pa-0">{{
            k.name
          }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      kategorien: [
        {
          name: 'Diesjähriger',
        },
        {
          name: 'Bilder und Videos',
        },
        {
          name: 'Wann und Wo',
        },
        {
          name: 'Wohin',
        },
        {
          name: 'Kontakrieren',
        },
      ],
      firmenList1: [
        {
          name: 'A1 Telekom Austria AG',
        },
        { name: 'ABB AG' },
        { name: 'Absolventenverband' },
        { name: 'Accenture' },
        { name: 'ACTIVE SOLUTION Ingenieurbüro AG' },
        { name: 'ARZ Allgemeines Rechenzentrum GmbH' },
        { name: 'Atos IT Solutions an Services GmbH' },
        { name: 'Banet GmbH' },
        { name: 'Bechtle IT-Systemhaus Österreich' },
        { name: 'BEKO' },
        { name: 'Bitmovin' },
        { name: 'BMD Systemhaus GesmbH' },
        { name: 'Braintrust GesmbH' },
        { name: 'Bundesheer Cyberdefence Unit' },
        { name: 'Bundesrechenzentrum' },
        { name: 'cargo-partner GmbH' },
        { name: 'Catalysts' },
        { name: 'Coca Cola HBC Austria GmbH' },
        { name: 'DBConcepts' },
        { name: 'Diamir Holding – Tailored Apps' },
        { name: 'Docolution GmbH' },
        { name: 'Elin' },
        { name: 'epunkt GmbH' },
        { name: 'Faktor Zehn' },
      ],
      firmenList2: [
        { name: 'FERCHAU Austria GmbH' },
        { name: 'FH Burgenland' },
        { name: 'FH Campus Wien' },
        { name: 'FH St. Pölten' },
        { name: 'FH Technikum Wien' },
        { name: 'FH Wien der WKW' },
        { name: 'FH Wiener Neustadt' },
        { name: 'Flughafen Wien AG' },
        { name: 'Gebauer & Griller Kabelwerke GesmbH' },
        { name: 'Herold Business Data' },
        { name: 'Hokify' },
        { name: 'HR Consulting Alexander Wozak' },
        { name: 'it-tects' },
        { name: 'IVM Technical Consultants Wien GmbH' },
        { name: 'Jaggaer Austria' },
        { name: 'Johannes Kepler Universität' },
        { name: 'KSV1870 Holding AG' },
        { name: 'maihiro GmbH' },
        { name: 'Montanuniversität Leoben' },
        { name: 'New Design University' },
        { name: 'NOUS Wissensmanagement GmbH' },
        { name: 'ÖBB' },
        { name: 'Österreichische Hochschülerschaft' },
        { name: 'Otto Bock Health Care Product' },
      ],
      firmenList3: [
        { name: 'paysafecard Wertkarten GmbH' },
        { name: 'Personal Zellner' },
        { name: 'PORR AG' },
        { name: 'ppedv AG' },
        { name: 'Raiffeisen Software' },
        { name: 'Robert Bosch AG' },
        { name: 'Rubicon IT GmbH' },
        { name: 'Schindler Aufzüge und Fahrtreppen GmbH' },
        { name: 'Schulmeister Management Consulting GmbH' },
        { name: 'SEC Consult' },
        { name: 'SEQIS GmbH' },
        { name: 'Siemens Personaldienstleistungen GmbH' },
        { name: 'softwareXperts' },
        { name: 'STEINER-HITECH GmbH' },
        { name: 'StepStone Österreich GmbH' },
        { name: 'TECHSEARCH' },
        { name: 'TODAY' },
        { name: 'Trenkwalder Personaldienste GmbH' },
        { name: 'Werbeakademie des WIFI Wien' },
        { name: 'Westsächsische Hochschule Zwickau' },
        { name: 'Wien Energie GmbH' },
        { name: 'Wirtschaftsuniversität Wien' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
