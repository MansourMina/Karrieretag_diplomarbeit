<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="3">
        <v-card>
          <v-row align="center">
            <v-col cols="3" class="text-center pl-8">
              <v-icon large>mdi-information</v-icon>
            </v-col>
            <v-col cols="8">
              <v-card-subtitle class=" py-0">
                Anträge angenommen
              </v-card-subtitle>
              <v-row class="py-0 my-0">
                <v-col cols="12" md="8" class="py-0 my-0">
                  <v-card-title class=" py-0">
                    22/50
                  </v-card-title>
                </v-col>
                <v-col cols="12" md="4" class="py-0 pt-1">
                  <v-icon medium>
                    mdi-unfold-more-vertical
                  </v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card>
          <v-row align="center">
            <v-col cols="4" class="text-center">
              <v-icon large>mdi-checkbox-blank-badge</v-icon>
            </v-col>
            <v-col cols="8">
              <v-card-subtitle class=" py-0">
                Anträge angenommen
              </v-card-subtitle>
              <v-row class="py-0 my-0">
                <v-col cols="8" class="py-0 my-0">
                  <v-card-title class=" py-0">
                    22/50
                  </v-card-title>
                </v-col>
                <v-col cols="4" class="py-0 pt-1">
                  <v-icon medium>
                    mdi-unfold-more-vertical
                  </v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card>
          <v-row align="center">
            <v-col cols="4" class="text-center">
              <v-icon large>mdi-login</v-icon>
            </v-col>
            <v-col cols="8">
              <v-card-subtitle class=" py-0">
                Anträge angenommen
              </v-card-subtitle>
              <v-row class="py-0 my-0">
                <v-col cols="8" class="py-0 my-0">
                  <v-card-title class=" py-0">
                    22/50
                  </v-card-title>
                </v-col>
                <v-col cols="4" class="py-0 pt-1">
                  <v-icon medium>
                    mdi-unfold-more-vertical
                  </v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card>
          <v-row align="center">
            <v-col cols="4" class="text-center">
              <v-icon large>mdi-application</v-icon>
            </v-col>
            <v-col cols="8">
              <v-card-subtitle class=" py-0">
                Anträge angenommen
              </v-card-subtitle>
              <v-row class="py-0 my-0">
                <v-col cols="8" class="py-0 my-0">
                  <v-card-title class=" py-0">
                    22/50
                  </v-card-title>
                </v-col>
                <v-col cols="4" class="py-0 pt-1">
                  <v-icon medium>
                    mdi-unfold-more-vertical
                  </v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mt-16 mx-auto" max-width="1000">
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="labels"
              :value="values"
              color="white"
              line-width="2"
              padding="16"
              class="pa-10"
            ></v-sparkline>
          </v-sheet>

          <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light mb-2">
              User Registrations
            </div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small>
              mdi-clock
            </v-icon>
            <span class="text-caption grey--text font-weight-light"
              >last registration 26 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mt-16 mx-auto" max-width="1000">
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="labels"
              :value="values"
              color="red darken-4"
              line-width="2"
              padding="16"
              class="pa-10"
            ></v-sparkline>
          </v-sheet>

          <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light mb-2">
              User Registrations
            </div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small>
              mdi-clock
            </v-icon>
            <span class="text-caption grey--text font-weight-light"
              >last registration 26 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    values: [],
    labels: [],
  }),
  created() {
    this.getAnfragen();
  },
  methods: {
    async getAnfragen() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/anzahlbydatum',
        method: 'GET',
      });

      this.values = data.map((el) => Number(el.anzahl));
      this.labels = data.map((el) => el.datum.substring(5, 10));
    },
  },
};
</script>

<style lang="scss" scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
