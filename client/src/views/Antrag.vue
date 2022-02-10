<template>
  <v-container>
    <v-form class="mt-2 py-5" ref="form" v-model="valid" lazy-validation>
      <header class="text-center py-4 ">
        <h2 class="text-center text-uppercase font-weight-light ">
          Stellen Sie einen Antrag
        </h2>
      </header>
      <v-row>
        <v-col cols="12">
          <v-text-field
            color="red"
            v-model="company"
            :rules="companyRules"
            :counter="10"
            required
            label="Company Name"
            solo-inverted
            prepend-inner-icon="mdi-domain"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            color="red"
            :rules="nameRules"
            :counter="10"
            required
            label="First Name"
            v-model="firstname"
            solo-inverted
            prepend-inner-icon="mdi-account"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            color="red"
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            required
            label="Last Name"
            solo-inverted
            prepend-inner-icon="mdi-account"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            :rules="emailRules"
            label="E-mail"
            required
            color="red"
            v-model="email"
            solo-inverted
            prepend-inner-icon="mdi-email"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            :rules="phoneRules"
            required
            color="red"
            v-model="phone"
            label="Phone Number"
            solo-inverted
            prepend-inner-icon="mdi-phone"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="checkbox"
            required="required"
            :rules="checkRules"
          >
            <template v-slot:label>
              <div>
                Ich bestätige und bin damit einverstanden, dass meine
                <span
                  ><span class="red--text" @click="goToImpressum('datenschutz')"
                    >persönlichen Daten</span
                  ></span
                >
                verarbeitet werden
              </div>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
      <v-container class=" my-0 py-0" text-center justify-center>
        <h5 class="text--secondary mb-7"><span @click="goToImpressum('datenschutz')">Datenschutz</span></h5>
        <v-btn
          rounded
          class="ma-5 pa-6 red darken-4 white--text"
          @click="validate"
          >Antrag stellen</v-btn
        >
      </v-container>
    </v-form>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      Antrag erfolgreich eingereicht!

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>

export default {

  data: () => ({
    snackbar: false,
    checkbox: false,
    timeout: 5000,
    valid: false,
    firstname: '',
    lastname: '',
    phone: '',
    companyRules: [
      (v) => !!v || 'Company name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    checkRules: [(v) => !!v || 'You have to agree!'],
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    phoneRules: [
      (v) => !!v || 'Phone number is required',
      (v) => v.length == 13 || 'Phone number must have 13 digits',
    ],
    company: '',
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$refs.form.reset();
      }
    },
    goToImpressum(id) {
      this.$emit('focusId', id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
