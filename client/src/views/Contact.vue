<template>
  <v-container class="mt-2 py-5">
    <h1 class=" text-center text-uppercase display-1 font-weight-light">Möchten Sie uns kontaktieren ?</h1>
    <v-row>
      <v-col cols="6">
        <v-col>
          <h6 class="font-weight-light " style="font-size: 20px">
            Die HTL Wien West (ehem. HTL Ottakring) ist eine berufsbildende
            höhere Schule (Höhere Technische Lehranstalt) im 16. Wiener
            Gemeindebezirk Ottakring.
          </h6>
        </v-col>

        <v-row>
          <v-col cols="3">
            <v-icon x-large color="red" style="font-size: 70px" > 
              mdi-map-marker
            </v-icon>
          </v-col>
          <v-col cols="3">
            <h6>Adresse</h6>
            <p>Thaliastraße 125, 1160 Wien</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <v-icon x-large color="red" style="font-size: 50px" class="ml-3">
              mdi-phone-classic
            </v-icon>
          </v-col>
          <v-col cols="3">
            <h6>Tel.</h6>
            <p>01 49111 113</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-icon x-large color="red" style="font-size: 50px" class="ml-3">
              mdi-email
            </v-icon>
          </v-col>
          <v-col cols="3">
            <h6>Email</h6>
            <p>direktion@htlwienwest.at</p>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6">
        <h2 class="mb-4 display-6 font-weight-light">MAP</h2>
        <div style="width: 100%">
          <iframe
            width="100%"
            height="450"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=HTL%20Wien%20West+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </v-col>
    </v-row>
    <Footer></Footer>
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
