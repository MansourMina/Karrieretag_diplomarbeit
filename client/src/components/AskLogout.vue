<template>
  <v-row justify="center">
    <v-dialog v-model="showDialog" max-width="290" persistent >
      <v-card>
        <v-card-title>
          Abmelden
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="Askdialog()">
            Nein
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="
              dialog = true;

              Askdialog();
            "
          >
            Ja
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    showDialog: {
      type: Boolean,
    },
  },
  methods: {
    Askdialog() {
      this.$emit('Askdialog', this.dialog);
    },
  },
};
</script>

<style lang="scss" scoped></style>
