<template>
  <v-col cols="12" class="pa-0">
    <v-card>
      <v-card-title class="red darken-4">
        <span class="text-h5 white--text">{{ user.firmen_name }}</span>

        <v-spacer></v-spacer>

        <v-btn dark icon text @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-list class="my-0 py-0">
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account-tie-outline</v-icon>
          </v-list-item-action>

          <v-list-item-content class="py-0">
            <v-subheader class="ml-0 pl-0">
              Name wie Homepage
            </v-subheader>
            <v-list-item-title>{{
              user.ausstellung_wie_homepage
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>

          <v-list-item-content class="py-0">
            <v-subheader class="ml-0 pl-0">
              E-mail
            </v-subheader>
            <v-list-item-title>{{ user.firmen_mail }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-sign-direction</v-icon>
          </v-list-item-action>

          <v-list-item-content class="py-0">
            <v-subheader class="ml-0 pl-0">
              Fachrichtung/en
            </v-subheader>
            <v-list-item-title>{{
              user.fachrichtung.replaceAll(',', '-')
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-bag-suitcase</v-icon>
          </v-list-item-action>

          <v-list-item-content class="py-0">
            <v-subheader class="ml-0 pl-0">
              Platz
            </v-subheader>
            <v-list-item-title>Am {{ user.platz }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-cash-refund</v-icon>
          </v-list-item-action>

          <v-list-item-content class="py-0">
            <v-subheader class="ml-0 pl-0">
              Rechnungsanschrift
            </v-subheader>
            <v-list-item-title>{{ user.rechnungsadresse }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item class="pb-5">
          <v-list-item-action>
            <v-icon>mdi-web</v-icon>
          </v-list-item-action>

          <v-list-item-content class="py-0">
            <v-subheader class="ml-0 pl-0">
              URL
            </v-subheader>
            <v-list-item-title
              ><a
                :href="
                  user.url.includes('https://') || user.url.includes('http://')
                    ? user.url
                    : `http://${user.url}`
                "
                target="_blank"
                >{{ user.url }}</a
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="pb-5">
          <v-list-item-action>
            <v-icon>mdi-comment</v-icon>
          </v-list-item-action>

          <v-list-item-content class="py-0">
            <v-subheader class="ml-0 pl-0">
              Kommentar
            </v-subheader>
            <v-list-item-title>{{ user.firmen_kommentar }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style></style>
