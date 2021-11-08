<template>
  <v-container fluid class="mx-0 p-0 ">
    <header class="masthead" id="home">
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

        <v-row class="align-items-start mt-16">
          <div class="d-block text-center">
            <v-btn
              class=" text-center"
              fab
              dark
              x-large
              color="transparent"
              href="#arrowFirst"
            >
              <v-icon dark style="font-size: 70px">
                mdi-arrow-down-drop-circle
              </v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-container>
    </header>
    <v-container justify-center text-center>
      <v-row>
        <v-col cols="4">
          <v-btn class="mx-2" fab dark x-large color="black" to="/infos">
            <v-icon dark>
              mdi-information
            </v-icon>
          </v-btn>
          <h5 class="mt-4">Informationen entnehmen</h5>
        </v-col>
        <v-col cols="4">
          <v-btn class="mx-2" fab dark x-large color="red" to="/antrag">
            <v-icon dark>
              mdi-android-messages
            </v-icon>
          </v-btn>
          <h5 class="mt-4">Antrag stellen</h5>
        </v-col>
        <v-col cols="4">
          <v-btn class="mx-2" fab dark x-large color="black" to="/login">
            <v-icon dark>
              mdi-login
            </v-icon>
          </v-btn>
          <h5 class="mt-4">Anmelden</h5>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid lighten-2 class="black--text mt-16">
      <h1 class="display-1 font-weight-light text-uppercase text-center">
        BIS ZUM KARRIERETAG <b>2022</b>
      </h1>
      <v-divider dark></v-divider>
      <v-row class=" display-2 text-center" style="font-size: 100px">
        <!-- <flip-countdown deadline="2022-03-22 00:00:00" :showSeconds="false"></flip-countdown> -->
        <Countdown deadline="March 22, 2022"></Countdown>
        <!-- <Countdown date="August 15, 2016"></Countdown> -->
      </v-row>
    </v-container>

    <div class="contaner section mt-10" id="arrowFirst">
      <div class="row d-flex flex-wrap">
        <div class="col-md-6">
          <h3>
            Karrieretag 2022
          </h3>
          <p>
            Die HTL Wien West veranstaltet einmal im Jahr einen Karrieretag für
            die Schülerinnen und Schüler der Ausbildungsrichtungen
            Elektrotechnik, Elektronik, Informationstechnologie, Maschinenbau
            und Mechatronik.
          </p>
          <div class="my-10">
            <v-btn
              x-large
              color="red"
              dark
              @click="tellParentChangeColor('karrieretag')"
            >
              More
            </v-btn>
          </div>
        </div>
        <div class="col-md-6">
          <v-carousel
            hide-delimiters
            next-icon
            prev-icon
            cycle
            interval="4000"
            height="300"
          >
            <v-carousel-item
              v-for="i of c1"
              :key="i.id"
              :src="i.image"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
      <div class="row mt-16">
        <div class="col-md-6">
          <v-carousel
            hide-delimiters
            next-icon
            prev-icon
            cycle
            interval="4000"
            height="300"
          >
            <v-carousel-item
              v-for="i of c2"
              :key="i.id"
              :src="i.image"
            ></v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-6">
          <h3>
            Über uns
          </h3>
          <p>
            Um die Schülerinnen und Schüler für die Herausforderungen unserer
            Zeit gut vorzubereiten, widmet sich die HTL Wien West in allen ihren
            technischen Ausbildungsrichtungen noch stärker als bisher den Themen
            Digitalisierung und Umwelt.
          </p>
          <div class="my-10">
            <v-btn x-large color="black" dark @click="tellParentChangeColor('karrieretag')">
              More
            </v-btn>
          </div>
        </div>
      </div>

      <div class="row mt-16">
        <div class="col-md-6">
          <h3>
            2020 Rekord
          </h3>
          <p>
            55 Unternehmen/Ausbildungseinrichtungen nutzten die Gelegenheit und
            kamen an unsere Schule, um sich zu präsentieren. Das ist neuer
            Rekord!
          </p>
          <div class="my-10">
            <v-btn x-large color="red" dark @click="tellParentChangeColor('karrieretag')">
              More
            </v-btn>
          </div>
        </div>
        <div class="col-md-6">
          <v-carousel
            hide-delimiters
            next-icon
            prev-icon
            cycle
            interval="4000"
            height="300"
          >
            <v-carousel-item
              v-for="i of c3"
              :key="i.id"
              :src="i.image"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
      <Footer />
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;900&display=swap');

body {
  font-family: 'Titillium Web', sans-serif;
}

.row {
  margin-top: 3%;
  margin-bottom: 3%;
}
.section .row .col-md-6 {
  margin-right: -2%;
  padding: 5%;
  /* style="background: #f5f5f5;" */
}
.section h3 {
  color: #004085;
}
.section p {
  color: #545b62;
}
.section img {
  width: 100%;
}

.masthead {
  height: 60vh;
  min-height: 500px;
  background-image: url('../assets/HTL.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.blackContainer {
  background: rgba(0, 0, 0, 0.555);
}
</style>
