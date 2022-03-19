<template>
  <v-container>
    <header class="text-center py-4 ">
      <h2 class="text-center text-uppercase font-weight-light ">
        Tragen Sie einen Vortrag ein
      </h2>
    </header>
    <v-form>
      <div class="container">
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              label="Firmen auswahl"
              :items="Firmen.map((el) => el.firmen_name)"
              v-model="firma"
              required
              prepend-inner-icon="mdi-domain"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="vortragender"
              label="Name des Vortragenden"
              prepend-inner-icon="mdi-account-tie-voice"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="Fachrichtung"
              :items="[
                Firmen.filter((el) => el.firmen_name == firma)[0].fachrichtung,
              ]"
              v-model="fachrichtung"
              required
              prepend-inner-icon="mdi-lan"
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-if="fachrichtung != 'Maschinenbau'"
              v-model="uhrzeit"
              :items="uhrzeitAuswahlITE"
              label="Uhrzeit"
              prepend-inner-icon="mdi-alarm"
            ></v-select>
            <v-select
              v-if="fachrichtung == 'Maschinenbau'"
              v-model="uhrzeit"
              :items="uhrzeitAuswahlM"
              label="Uhrzeit"
              prepend-inner-icon="mdi-alarm"
            ></v-select>
          </v-col>
        </v-row>
        <v-btn @click="postVortrag()" outlined>Eintragen</v-btn>
      </div>
    </v-form>
    <div class="text-center">
      <v-row class="fill-height">
        <v-col>
          <v-sheet>
            <v-calendar
              ref="calendar"
              first-interval="23"
              interval-count="20"
              interval-minutes="20"
              v-model="value"
              :events="events"
              :value="today"
              :event-color="getEventColor"
              color="warning"
              type="day"
            >
            </v-calendar>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    value: '',
    firma: 'Topicblab',
    dieFachrichtung: [],
    alleVortraege: [],
    vortragender: '',
    today: new Date().toISOString().slice(0, 10),
    anfang: '08:00',
    ende: '',
    uhrzeit: '08:00 - 08:10',
    uhrzeitAuswahlITE: [
      '08:00 - 08:10',
      '08:10 - 08:20',
      '08:20 - 08:30',
      '08:30 - 08:40',
      '08:40 - 08:50',
      '08:50 - 09:00',
      '09:00 - 09:10',
      '09:10 - 09:20',
      '09:30 - 09:40',
      '09:50 - 10:00',
      '10:00 - 10:10',
      '10:20 - 10:30',
      '10:30 - 10:40',
      '10:40 - 10:50',
      '10:50 - 11:00',
      '11:00 - 11:10',
      '11:20 - 11:30',
      '11:30 - 11:40',
      '11:40 - 11:50',
      '11:50 - 12:00',
      '12:00 - 12:10',
      '12:20 - 12:30',
      '12:30 - 12:40',
      '12:40 - 12:50',
      '12:50 - 13:00',
      '13:00 - 13:10',
      '13:20 - 13:30',
      '13:30 - 13:40',
      '13:40 - 13:50',
      '13:50 - 14:00',
    ],
    uhrzeitAuswahlM: [
      '08:00 - 08:15',
      '08:15 - 08:30',
      '08:30 - 08:45',
      '08:45 - 09:00',
      '09:00 - 09:15',
      '09:15 - 09:30',
      '09:30 - 09:45',
      '10:00 - 10:15',
      '10:15 - 10:30',
      '10:30 - 10:45',
      '10:45 - 11:00',
      '11:00 - 11:15',
      '11:15 - 11:30',
      '11:30 - 11:45',
      '11:45 - 12:00',
      '12:00 - 12:15',
      '12:15 - 12:30',
      '12:30 - 12:45',
      '12:45 - 12:00',
      '13:00 - 13:15',
      '13:15 - 13:30',
      '13:30 - 13:45',
      '13:45 - 14:00',
    ],
    events: [],
    fachrichtung: '',
    Firmen: [],
    alleVorträge: [],
  }),
  async created() {
    await this.fetchData();
    await this.getFirmenNamen();
    console.log('CREATED', this.events);
  },

  methods: {
    toTimestamp(strDate) {
      var datum = Date.parse(strDate);
      return datum / 1000;
    },

    getEventColor(event) {
      switch (event.fachrichtung) {
        case 'Informationstechnologie':
          return 'red';
        case 'Elektrotechnik':
          return 'indigo darken-1';
        case 'Maschinenbau':
          return 'teal';
        default:
          break;
      }
    },

    async getFirmenNamen() {
      const { data } = await axios({
        url: '/firma',
        method: 'GET',
      });
      this.firma = data[0].firmen_name;

      this.Firmen = data;
    },

    async fetchData() {
      const { data } = await axios({
        url: '/vortrag',
        method: 'GET',
      });
      data.forEach((el) =>
        this.alleVorträge.push({
          uhrzeit: `${el.anfangvortrag.substring(
            0,
            5,
          )} - ${el.endevortrag.substring(0, 5)}`,
          vortragender: el.vortragender,
          fachrichtung: el.fachrichtung,
          firma: el.firmen_id,
          vortrag_id: el.vortrag_id,
        }),
      );

      data.forEach((el) =>
        this.events.push({
          name:
            'Firmen Name: ' +
            el.firmen_id +
            ' Fachrichtung: ' +
            el.fachrichtung +
            ' ein Vortrag von: ' +
            el.vortragender,
          fachrichtung: el.fachrichtung,
          start: `${this.today} ${el.anfangvortrag}`,
          end: `${this.today} ${el.endevortrag}`,
        }),
      );

      console.log(this.events);

      this.uhrzeitAuswahlITE = this.uhrzeitAuswahlITE.filter(
        (el) => !this.alleVorträge.map((el) => el.uhrzeit).includes(el),
      );

      this.uhrzeitAuswahlM = this.uhrzeitAuswahlM.filter(
        (el) => !this.alleVorträge.map((el) => el.uhrzeit).includes(el),
      );
    },

    async postVortrag() {
      this.anfang = this.uhrzeit.substr(0, 5);
      this.ende = this.uhrzeit.substr(8, 10);
      const firmen_id = this.Firmen.filter(
        (el) => (el.firmen_name = this.firma),
      )[0].firmen_id;
      await axios({
        url: '/vortrag',
        method: 'POST',
        data: {
          anfangvortrag: this.anfang,
          vortragender: this.vortragender,
          firmen_id: firmen_id,
          fachrichtung: this.fachrichtung,
          endevortrag: this.ende,
        },
      });

      (this.anfang = ''),
        (this.vortragender = ''),
        (this.fachrichtung = ''),
        (this.ende = ''),
        (this.uhrzeit = '');
      this.fetchData();
    },
  },
};
</script>

//
<style lang="scss" scoped>
.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
  -webkit-user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: '';
  }

  &:hover::after {
    display: block;
  }
}
</style>
