<template>
  <v-container fluid>
    <div class=" red darken-4 white--text text-center ma-10">
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
                :disabled="selected.length == 0"
              >
                <v-icon color="white" x-large>mdi-email-plus</v-icon>
              </v-btn>
            </template>
            <SendEmail
              :selectedEmails="selected"
              @closeDialog="closeDialog()"
              @deSelectFirma="deSelectFirma"
            />
          </v-dialog>
        </v-col>
      </v-row>
    </div>
    <v-card class="ma-10 center" min-height="500" v-if="getanträge.length == 0">
      <div>
        <p><i>No data available</i></p>
      </div>
    </v-card>
    <v-card class="ma-10" min-height="500" v-else>
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
              <th class="text-center">
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
            <template v-for="item in getanträge">
              <tr :key="item.firmen_id">
                <td>
                  <v-checkbox
                    v-model="selected"
                    :value="item"
                    @click="allSelected = false"
                  ></v-checkbox>
                </td>
                <td>{{ item.firmen_name }}</td>
                <td>{{ item.firmen_mail }}</td>
                <td>{{ item.anfrage_zeitpunkt }}</td>
                <td v-if="item.status == 'Anfrage'">
                  <v-chip color="primary" dark small>{{ item.status }}</v-chip>
                </td>
                <td v-if="item.status == 'Abgelehnt'">
                  <v-chip color="error" small>{{ item.status }}</v-chip>
                </td>
                <td v-if="item.status == 'Teilnehmer'">
                  <v-chip color="success" small>{{ item.status }}</v-chip>
                </td>
                <td class="px-5">
                  <div v-if="item.status == 'Teilnehmer'">
                    <v-btn
                      icon
                      @click="
                        showDetails = !showDetails;
                        toggle(item.firmen_id);
                      "
                      :class="{ opened: opened.includes(item.firmen_id) }"
                    >
                      <v-icon>{{
                        showDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'
                      }}</v-icon>
                    </v-btn>
                  </div>
                  <div
                    v-if="
                      item.status != 'Abgelehnt' && item.status != 'Teilnehmer'
                    "
                  >
                    <v-btn icon>
                      <v-icon color="red darken-4" small
                        >mdi-archive-remove-outline</v-icon
                      ></v-btn
                    >
                    <v-btn icon
                      ><v-icon color="primary" dark small
                        >mdi-email-check-outline</v-icon
                      ></v-btn
                    >
                  </div>
                </td>
              </tr>
              <tr
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
              </tr>
            </template>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import SendEmail from '@/components/SendEmail.vue';
export default {
  components: {
    SendEmail,
  },
  data() {
    return {
      search: '',
      selected: [],
      calories: '',
      status: [],
      opened: [],
      anträge: [],
      statuse: ['Anfrage', 'Abgelehnt', 'Teilnehmer'],
      dialog: false,
      allSelected: false,
      showDetails: false,
    };
  },
  computed: {
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

    getanträge() {
      if (this.status.length > 0) {
        return this.anträge.filter(
          (el) =>
            el.firmen_name.toLowerCase().includes(this.search.toLowerCase()) &&
            this.status.includes(el.status),
        );
      } else {
        return this.anträge.filter((el) =>
          el.firmen_name.toLowerCase().includes(this.search.toLowerCase()),
        );
      }
    },
  },
  created() {
    this.getAnträge();
  },
  methods: {
    toggle(id) {
      const index = this.opened.indexOf(id);
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
        this.opened.push(id);
      }
    },
    SelectAll() {
      this.selected = [];
      if (this.allSelected) {
        for (const item of this.getanträge) {
          if (this.selected.find((el) => el == item) == null) {
            this.selected.push(item);
          }
        }
      }
    },
    deSelectFirma(item) {
      this.selected = this.selected.filter((el) => el != item);
    },
    closeDialog() {
      this.dialog = false;
      this.allSelected = false;
      this.selected = [];
    },
    async getAnträge() {
      const { data } = await axios({
        url: '/antraege',
        method: 'GET',
      });
      this.anträge = data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
