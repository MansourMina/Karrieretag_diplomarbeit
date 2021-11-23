<template>
  <v-container fluid class="mx-0 p-0 ">
    <v-container fluid lighten-2 class="black--text mt-16" text-center>
      <h1 class="display-1 font-weight-light text-uppercase ">
        BIS ZUM KARRIERETAG <b>2022</b> der
        <span class="red--text text--darken-4 font-weight-bold">
          HTL Wien West
        </span>
      </h1>
      <v-divider dark></v-divider>
      <!-- <flip-countdown deadline="2022-03-22 " :showSeconds="false"></flip-countdown> -->
      <v-row class="display-1" style="font-size: 100px"><Countdown deadline="March 9, 2022" class="p-0 m-0"></Countdown></v-row>
      <!-- <Countdown date="August 15, 2016"></Countdown> -->
    </v-container>
    <!-- <header class="masthead" id="home">
      <v-container fluid lighten-2 class="white--text ">
        <div class="blackContainer">
          <v-row class="align-items-start mt-16">
            <div class="text-center my-16 ">
              <h1 class="display-2 font-weight-light text-uppercase text-white">
                Karrieretag - HTL Wien West
              </h1>

              <h3>
                <span
                  class=" font-weight-light text-uppercase"
                  style="color:red;"
                  >Entscheide deine Zukunft</span
                >
              </h3>
            </div>
          </v-row>
        </div>
      </v-container>
    </header> -->
    <v-container justify-center text-center>
      <v-row>
        <v-col cols="4">
          <v-btn
            class="mx-2"
            fab
            dark
            x-large
            color="black"
            to="/infos"
            name="Informationen"
            alt="Informationen"
            title="Informationen"
          >
            <v-icon dark>
              mdi-information
            </v-icon>
          </v-btn>
          <p class=" mt-4" style="font-size:20px">Informationen</p>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="mx-2"
            fab
            dark
            x-large
            color="red"
            to="/antrag"
            name="Antrag stellen"
            alt="Antrag"
            title="Antrag stellen"
          >
            <v-icon dark>
              mdi-android-messages
            </v-icon>
          </v-btn>
          <p class=" mt-4" style="font-size:20px">Antrag</p>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="mx-2"
            fab
            dark
            x-large
            color="black"
            to="/login"
            name="Login"
            alt="Login"
            title="Login"
          >
            <v-icon dark>
              mdi-login
            </v-icon>
          </v-btn>
          <p class="mt-4" style="font-size:20px">Anmelden</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class=" mt-10" id="arrowFirst">
      <v-row class="mb-16 pb-5">
        <v-col cols="12" md="6" class="pr-10">
          <div>
            <p style="font-size:26px">
              Karrieretag 2022
            </p>
            <p>
              Die HTL Wien West veranstaltet einmal im Jahr einen Karrieretag
              für die Schülerinnen und Schüler der Ausbildungsrichtungen
              Elektrotechnik, Elektronik, Informationstechnologie, Maschinenbau
              und Mechatronik.
            </p>
          </div>
          <div class="my-10">
            <v-btn
              x-large
              color="red darken-4"
              dark
              @click="tellParentChangeColor('karrieretag')"
              name="Mehr über den Karrieretag"
              title="Mehr über den Karrieretag"
            >
              More
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-carousel
            hide-delimiters
            next-icon
            prev-icon
            cycle
            interval="4000"
            height="350"
          >
            <v-carousel-item
              v-for="i of c1"
              :key="i.id"
              :src="i.image"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider dark class="hidden-lg-and-up"></v-divider>
      <v-row class="my-16 py-16">
        <v-col cols="12" md="6">
          <v-carousel
            hide-delimiters
            next-icon
            prev-icon
            cycle
            interval="4000"
            height="350"
          >
            <v-carousel-item
              v-for="i of c2"
              :key="i.id"
              :src="i.image"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <div class="mb-10">
            <p style="font-size:26px">
              Über uns
            </p>
            <p>
              Um die Schülerinnen und Schüler für die Herausforderungen unserer
              Zeit gut vorzubereiten, widmet sich die HTL Wien West in allen
              ihren technischen Ausbildungsrichtungen noch stärker als bisher
              den Themen Digitalisierung und Umwelt.
            </p>
          </div>
          <div>
            <v-btn
              x-large
              color="red darken-4"
              dark
              @click="tellParentChangeColor('ueberuns')"
              name="Mehr über uns"
              title="Mehr über uns"
            >
              More
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider dark class="hidden-md-and-up"></v-divider>

      <v-row class="my-16 pb-5">
        <v-col cols="12" md="6" class="pr-10">
          <div>
            <p style="font-size:26px">
              2020 Rekord
            </p>
            <p>
              55 Unternehmen/Ausbildungseinrichtungen nutzten die Gelegenheit
              und kamen an unsere Schule, um sich zu präsentieren. Das ist neuer
              Rekord!
            </p>
          </div>
          <div class="my-10">
            <v-btn
              x-large
              color="red darken-4"
              dark
              @click="tellParentChangeColor('rekord')"
              name="Mehr über Rekord"
              title="Mehr über Rekord"
            >
              More
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-carousel
            hide-delimiters
            next-icon
            prev-icon
            cycle
            interval="4000"
            height="350"
          >
            <v-carousel-item
              v-for="i of c3"
              :key="i.id"
              :src="i.image"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <Footer />
    </v-container>
  </v-container>
</template>

<script>
// import FlipCountdown from 'vue2-flip-countdown';
import Countdown from 'vuejs-countdown';
import Footer from '@/components/Footer.vue';
// import Countdown from '@/components/Countdown.vue';

export default {
  props: {
    changeColor: {
      type: Function,
    },
  },
  data: () => ({
    c1: [
      {
        image: 'images/KT2020-0.jpg',
        id: 1,
      },
      {
        image: 'images/KT2020-1.jpg',
        id: 2,
      },
      {
        image: 'images/KT2020-2.jpg',
        id: 3,
      },
      {
        image: 'images/KT2020-3.jpg',
        id: 4,
      },
    ],
    c2: [
      {
        image: 'images/KT2020-4.jpg',
        id: 5,
      },
      {
        image: 'images/KT2020-5.jpg',
        id: 6,
      },
      {
        image: 'images/KT2020-6.jpg',
        id: 7,
      },
      {
        image: 'images/KT2020-7.jpg',
        id: 8,
      },
    ],
    c3: [
      {
        image: 'images/KT2020-8.jpg',
        id: 9,
      },
      {
        image: 'images/KT2020-9.jpg',
        id: 10,
      },
      {
        image: 'images/KT2020-10.jpg',
        id: 11,
      },
      {
        image: 'images/KT2020-11.jpg',
        id: 12,
      },
    ],
  }),
  methods: {
    tellParentChangeColor(id) {
      this.$emit('changeColor', id);
    },
  },

  components: { Countdown, Footer },
};
</script>

<style>
.row {
  margin-top: 3%;
  margin-bottom: 3%;
}

/* .masthead {
  height: 60vh;
  min-height: 500px;
  background-image: url('../assets/HTL.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
/* .blackContainer {
  background: rgba(0, 0, 0, 0.555);
} */
</style>
