<template>
  <v-container fluid>
    <div class=" red darken-4 white--text text-center mx-0 my-5 ma-lg-10">
      <v-row class="mt-2 pa-5 pb" align="center" text-center>
        <v-col cols="12" md="3">
          <span
            style="font-size: 1.25rem;font-weight: 500;letter-spacing: 0.0125em;"
          >
            FIRMEN ANTRÄGE
          </span></v-col
        >
        <v-col cols="12" md="4">
          <v-text-field
            v-model="search"
            hide-details
            label="Nach Firma suchen..."
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
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
        <v-col>
          <v-dialog v-model="dialog" max-width="1000">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                icon
                @click="passData()"
                :disabled="selected.length == 0"
              >
                <v-icon color="white" x-large>mdi-email-plus</v-icon>
              </v-btn>
            </template>
            <SendEmail
              :selectedEmails="selectedEmails"
              @closeDialog="closeDialog()"
            />
            <!-- @deSelectFirma="deSelectFirma" -->
          </v-dialog>
        </v-col>
      </v-row>
    </div>

    <v-card
      class="mx-0 my-5 ma-lg-10 "
      min-height="500"
      v-if="!loaded"
      elevation="0"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="table-tbody"
        :loading="loading"
        transition="fade-transition"
        v-for="i in 2"
        :key="i"
      ></v-skeleton-loader>
    </v-card>
    <div v-else>
      <v-card
        class="mx-0 my-5 ma-lg-10 center"
        min-height="500"
        v-if="filterAnträge.length == 0"
      >
        <div>
          <p><i>No data available</i></p>
        </div>
      </v-card>
      <v-card class="mx-0 my-5 ma-lg-10" min-height="500" v-else elevation="0" max>
        <v-simple-table class="ma-5 ">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  <v-checkbox
                    @click="SelectAll()"
                    v-model="allSelected"
                  ></v-checkbox>
                </th>
                <th align="left">
                  Name
                </th>
                <th class="text-center">
                  Email
                </th>
                <th class="text-center">
                  Datum
                </th>
                <th class="text-center">
                  Status
                </th>
                <th class="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <template v-for="item in filterAnträge">
                <tr :key="item.firmen_id">
                  <td>
                    <v-checkbox
                      v-model="selected"
                      :value="item.firmen_id"
                      @click="allSelected = false"
                    ></v-checkbox>
                  </td>
                  <td align="left">{{ item.firmen_name }}</td>
                  <td>{{ item.firmen_mail }}</td>
                  <td>{{ new Date(item.anfrage_zeitpunkt.substring(0, 10)).toLocaleDateString() }}</td>
                  <td v-if="item.status == 'Anfrage'">
                    <v-chip color="primary" dark small>{{
                      item.status
                    }}</v-chip>
                  </td>
                  <td v-if="item.status == 'Abgelehnt'">
                    <v-chip color="error" small>{{ item.status }}</v-chip>
                  </td>
                  <td v-if="item.status == 'Teilnehmer'">
                    <v-chip color="success" small>{{ item.status }}</v-chip>
                  </td>
                  <td v-if="item.status == 'Daten erhalten'">
                    <v-chip color="blue-grey" class="white--text" small>{{
                      item.status
                    }}</v-chip>
                  </td>
                  <td class="px-5">
                    <div v-if="item.status == 'Teilnehmer'">
                      <v-btn
                        icon
                        @click="
                          dialogData = true;
                          selectedItem = item;
                        "
                      >
                        <v-icon> mdi-menu</v-icon>
                      </v-btn>
                    </div>
                    <div
                      v-if="
                        item.status != 'Abgelehnt' &&
                          item.status != 'Teilnehmer' &&
                          item.status != 'Daten erhalten'
                      "
                    >
                      <v-btn icon @click="seen(item)" v-if="!item.gesehen"
                        ><v-icon color="black" dark small
                          >mdi-eye</v-icon
                        ></v-btn
                      >
                      <v-btn icon @click="changeStatus('Abgelehnt', item)">
                        <v-icon color="red darken-4" small
                          >mdi-archive-remove-outline</v-icon
                        ></v-btn
                      >
                      <v-btn icon @click="changeStatus('Daten erhalten', item)"
                        ><v-icon color="primary" dark small
                          >mdi-email-check-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </td>
                </tr>
                <!-- <tr
                  v-if="opened.includes(item.firmen_id)"
                  :key="item.firmen_id"
                  class="pa-10"
                >
                  <td>Lorem Ipsum</td>
                  <td>Lorem Ipsum!</td>
                  <td>Lorem Ipsum!</td>
                  <td>Lorem Ipsum!</td>
                  <td>Lorem Ipsum!</td>
                  <td>Lorem Ipsum!</td>
                  <v-divider dark></v-divider>
                </tr> -->
              </template>
            </tbody>
          </template>
        </v-simple-table>

        <v-dialog v-model="dialogData" max-width="600px">
          <ShowData @close="dialogData = false" :user="selectedItem" />
        </v-dialog>
      </v-card>
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarcolor">
      <span :class="`${color}--text`">{{ message }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn :color="color" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { bus } from '../main';
import axios from 'axios';
import SendEmail from '@/components/SendEmail.vue';
import ShowData from '@/components/ShowData.vue';
export default {
  components: {
    SendEmail,
    ShowData,
  },
  props: {
    antraege: {
      type: Array,
    },
  },
  data() {
    return {
      search: '',
      message: '',
      snackbar: false,
      timeout: 5000,
      selected: [],
      calories: '',
      color: '',
      status: [],
      snackbarcolor: 'none',
      statuse: ['Anfrage', 'Abgelehnt', 'Teilnehmer', 'Daten erhalten'],
      dialog: false,
      allSelected: false,
      dialogData: false,
      selectedItem: {},
      loaded: false,
      loading: true,
    };
  },

  computed: {
    selectedEmails() {
      return this.antraege.filter((el) => this.selected.includes(el.firmen_id));
    },
    headers() {
      return [
        {
          text: 'Name',
        },
        {
          text: 'Email',
        },
        { text: 'Anfrage Datum' },
        { text: 'Status' },
      ];
    },

    filterAnträge() {
      if (this.status.length > 0) {
        return this.antraege.filter(
          (el) =>
            el.firmen_name.toLowerCase().includes(this.search.toLowerCase()) &&
            this.status.includes(el.status),
        );
      } else {
        return this.antraege.filter((el) =>
          el.firmen_name.toLowerCase().includes(this.search.toLowerCase()),
        );
      }
    },
  },
  async created() {
    const readyHandler = () => {
      if (document.readyState == 'complete') {
        this.loading = false;
        this.loaded = true;
        document.removeEventListener('readystatechange', readyHandler);
      }
    };

    document.addEventListener('readystatechange', readyHandler);

    readyHandler();
  },

  methods: {
    passData() {
      bus.$emit('changeIt', this.selectedEmails);
    },
    async seen(item) {
      await axios({
        url: '/status/' + item.firmen_id,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          status: 'gesehen',
        },
      });
      this.message = 'Anfrage bestätigt!';
      this.snackbarcolor = 'grey lighten-4';
      this.color = 'black';
      this.snackbar = true;
      this.$emit('refreshAntraege');
      this.$emit('sendmail', {
        firmen_name: item.firmen_name,
        email: item.firmen_mail,
        type: 'gesehen',
      });
    },
    async changeStatus(status, item) {
      await axios({
        url: '/status/' + item.firmen_id,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          status: status,
        },
      });
      this.$emit('refreshAntraege');

      switch (status) {
        case 'Abgelehnt':
          this.$emit('sendmail', {
            firmen_name: item.firmen_name,
            email: item.firmen_mail,
            type: 'abgelehnt',
          });
          this.message = 'Antrag abgelehnt!';
          this.snackbarcolor = 'red darken-4';
          this.color = 'white';

          break;
        case 'Daten erhalten':
          const { data } = await axios({
            url: '/setanmeldedaten',
            method: 'POST',
            contentType: 'application/json',
            data: {
              firmen_id: item.firmen_id,
            },
          });
          this.message = 'Antrag angenommen!';
          this.snackbarcolor = 'success';
          this.color = 'white';
          this.$emit('sendmail', {
            firmen_name: item.firmen_name,
            email: item.firmen_mail,
            type: 'daten',
            user_id: data.user_id,
            passwort: data.passwort,
          });

          break;
        default:
          this.message = 'Fehler';
          this.snackbarcolor = 'red';
          this.color = 'white';
      }
      this.snackbar = true;
    },

    SelectAll() {
      this.selected = [];
      if (this.allSelected) {
        for (const item of this.filterAnträge) {
          if (this.selected.find((el) => el == item) == null) {
            this.selected.push(item.firmen_id);
          }
        }
      }
    },

    closeDialog() {
      this.dialog = false;
      this.allSelected = false;
      this.selected = [];
    },
  },
};
</script>

<style lang="scss" scoped></style>
