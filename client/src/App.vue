<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="white" elevate-on-scroll fixed height="70">
      <v-app-bar-nav-icon
        v-if="$router.history.current['path'] != '/admin'"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/"
          ><img src="@/assets/logo.png" class="mt-3 mb-2" height="50"
        /></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        text
        class="mr-10"
        active-class="red darken-4 white--text"
        to="/login"
        v-if="!logged"
      >
        Login
      </v-btn>
      <v-btn
        text
        class="mr-10"
        href="https://www.htlwienwest.at/ueberuns/impressum.html"
        target="_blank"
      >
        Impressum
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      color="white"
      v-model="drawer"
      statless
      app
      v-if="$router.history.current['path'] != '/admin'"
    >
      <v-list nav>
        <v-list-item>
          <v-list-item-content v-if="logged">
            <v-list-item-title class="text-h6">
              Max Mustermann
            </v-list-item-title>
            <v-list-item-subtitle>Siemens@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-list-item-title class="text-h6">
              Startseite
            </v-list-item-title>
            <v-list-item-subtitle>HTL Wien West</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div>
        <v-divider dark></v-divider>
        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            active-class="black white--text"
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            link
            active-class="black white--text"
            to="/antrag"
            v-if="!logged"
          >
            <v-list-item-icon>
              <v-icon>mdi-newspaper-variant-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Antrag stellen</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div v-if="logged">
        <v-row class="my-0">
          <v-col cols="4">
            <p class="ml-2 mt-1">Extras</p>
          </v-col>
          <v-col cols="8">
            <v-divider dark></v-divider>
          </v-col>
        </v-row>
        <v-list dense nav>
          <v-list-item
            link
            active-class="black white--text"
            :loading="dialog"
            @click.stop="showDialog = true"
          >
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-remove</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Abmelden</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            link
            active-class="black white--text"
            :to="l.route"
            v-for="l of extraItems"
            :key="l.title"
          >
            <v-list-item-icon>
              <v-icon>{{ l.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ l.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <AskLogout :showDialog="showDialog" @Askdialog="showLoading" />
    </v-navigation-drawer>
    <!-- Navbar -->

    <div class="text-center">
      <v-dialog v-model="dialog" persistent width="300">
        <v-card color="red" dark>
          <v-card-text>
            Bitte warten...
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <v-main hide-overlay>
      <router-view :logged="logged" @changeColor="changeColor" />
    </v-main>
  </v-app>
</template>

<script>
import AskLogout from '@/components/AskLogout.vue';
export default {
  name: 'App',
  components: {
    AskLogout,
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(
        () => (
          (this.dialog = false), (this.logged = false), this.$router.push('/')
        ),
        2000,
      );
    },
  },

  data: () => ({
    value: 0,
    query: false,
    show: true,
    interval: 0,

    drawer: false,
    logged: true,
    dialog: false,
    showDialog: false,
    mounted() {
      this.queryAndIndeterminate();
    },

    beforeDestroy() {
      clearInterval(this.interval);
    },

    extraItems: [
      {
        name: 'Ihre Daten',
        icon: 'mdi-face-man-profile',
        route: '/daten',
      },
      {
        name: 'Vorträge',
        icon: 'mdi-human-male-board',
        route: '/vortrag',
      },
    ],

    items: [
      { title: 'Home', icon: 'mdi-view-dashboard', route: '/' },
      { title: 'Informationen', icon: 'mdi-information', route: '/infos' },
      { title: 'Contact', icon: 'mdi-account-supervisor', route: '/contact' },
    ],
    idOfkategorien: [
      {
        id: 'ueberuns',
      },
      {
        id: 'record',
      },

      {
        id: 'unternehmen',
      },
      {
        id: 'karrieretag',
      },
    ],
    right: null,
  }),
  methods: {
    changeColor(id) {
      console.log(id);
      // this.kategorien
      //   .filter((el) => el.id != id)
      //   .forEach(
      //     (el) =>
      //       (document.getElementById(`${el.id}`).style.background = 'none'),
      //   );
      // document.getElementById(`${id}`).style.background = 'yellow';
    },
    logout() {
      this.logged = false;
    },
    showLoading(dialog) {
      this.showDialog = false;
      this.dialog = dialog;
    },
    queryAndIndeterminate() {
      this.query = true;
      this.show = true;
      this.value = 0;

      setTimeout(() => {
        this.query = false;

        this.interval = setInterval(() => {
          if (this.value === 100) {
            clearInterval(this.interval);
            this.show = false;
            return setTimeout(this.queryAndIndeterminate, 2000);
          }
          this.value += 25;
        }, 1000);
      }, 2500);
    },
  },
};
</script>
