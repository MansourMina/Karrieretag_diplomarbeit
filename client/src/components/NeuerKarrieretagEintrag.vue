<template>
  <v-container>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="blue-grey darken-2 white--text ">
          <span class="text-h5">Neuer Karrieretag Eintrag</span>
        </v-card-title>

        <v-card-text>
          <v-container class="d-flex justify-content-center">
            <v-date-picker
              v-model="picker"
              show-adjacent-months
              full-width
              height="100"
            ></v-date-picker>
          </v-container>
          <div class="my-3">
            <v-btn class="error" @click="dialogDatenLöschen = true"
              >Vorherige Daten löschen</v-btn
            >
          </div>

          <p>
            *Biite beachten Sie, dass die Daten unwiderruflich von der Datenbank
            gelöscht werden
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="closeDialog">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDatenLöschen" persistent max-width="300px">
      <v-card>
        <v-banner two-line class="text-center">
          <v-avatar slot="icon" color="deep-purple accent-4" size="40">
            <v-icon icon="mdi-lock" color="white">
              mdi-lock
            </v-icon>
          </v-avatar>

          Die Daten werden unwiderruflich gelöscht!
          <p>Schreiben Sie "delete data" um zu bestätigen</p>
          <v-text-field placeholder="Bestätigen" outlined dense ></v-text-field>
        </v-banner>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="deep-purple accent-4">
            Abbrechen
          </v-btn>
          <v-btn text color="deep-purple accent-4">
            Löschen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
    },
  },
  data() {
    return {
      picker: null,
      dialogDatenLöschen: false,
    };
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
    },
  },
};
</script>

<style lang="scss" scoped></style>
