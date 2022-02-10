<template>
  <v-container fluid>
    <div class=" primary white--text text-center ma-10">
      <v-row class="mt-2 pa-5 pb" align="center" text-center>
        <v-col cols="12" md="3">
          <span
            style="font-size: 1.25rem;font-weight: 500;letter-spacing: 0.0125em;"
          >
            FIRMEN AKTIVITÄTEN
          </span></v-col
        >
        <v-col cols="12" md="5">
          <v-text-field
            v-model="search"
            hide-details
            label="Nach Firma suchen..."
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-autocomplete
            v-model="status"
            :items="statuse"
            hide-details
            chips
            small-chips
            label="Status filtern"
            multiple
            solo
          ></v-autocomplete>
        </v-col>
      </v-row>
    </div>
    <v-card class="ma-10">
      <v-list v-for="(file, index) in files" :key="file.title" class="pa-0">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon :class="file.color" dark v-text="file.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="file.title"></v-list-item-title>

            <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-subtitle v-text="file.date"></v-list-item-subtitle>
            <v-btn class="mt-1 mr-0 pr-0 " text>Details</v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider
          v-if="index < files.length - 1"
          inset
          class="my-0"
        ></v-divider>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    files: [
      {
        color: 'blue',
        icon: 'mdi-clipboard-text',
        subtitle: 'Formualar ausgefüllt',
        date: '12 hr',
        title: 'HTL GmbH',
      },
      {
        color: 'red darken-4',
        icon: 'mdi-gesture-tap-button',
        subtitle: 'Angemeldet',
        date: '6 hr',
        title: 'Wojtasik GmbH',
      },
      {
        color: 'red darken-4',
        icon: 'mdi-gesture-tap-button',
        subtitle: 'Angemeldet',
        date: '6 hr',
        title: 'Wojtasik GmbH',
      },
      {
        color: 'blue',
        icon: 'mdi-clipboard-text',
        subtitle: 'Formualar ausgefüllt',
        date: '12 hr',
        title: 'HTL GmbH',
      },
      {
        color: 'blue',
        icon: 'mdi-clipboard-text',
        subtitle: 'Formualar ausgefüllt',
        date: '12 hr',
        title: 'HTL GmbH',
      },
      {
        color: 'blue',
        icon: 'mdi-clipboard-text',
        subtitle: 'Formualar ausgefüllt',
        date: '12 hr',
        title: 'HTL GmbH',
      },
      {
        color: 'red darken-4',
        icon: 'mdi-gesture-tap-button',
        subtitle: 'Angemeldet',
        date: '6 hr',
        title: 'Wojtasik GmbH',
      },
      {
        color: 'red darken-4',
        icon: 'mdi-gesture-tap-button',
        subtitle: 'Angemeldet',
        date: '6 hr',
        title: 'Wojtasik GmbH',
      },
    ],
    search: '',
    statuse: ['Formular ausgefüllt', 'Angemeldet'],
    status: '',
  }),
};
</script>

<style lang="scss" scoped></style>
