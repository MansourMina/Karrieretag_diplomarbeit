<template>
  <v-app>
    <!-- Navbar -->
    <div v-if="this.$route.name != 'Not Found'">
      <v-app-bar app color="white" hide-on-scroll height="70">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          name="Navbar-Icon"
          title="Navigieren"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" name="Back to Home"
            ><img
              src="@/assets/logo.jpg"
              class="mt-3 mb-2 hidden-xs-only"
              height="50"
              name="Logo HTL Wien West"
              alt="Logo"
              title="HTL Wien West Logo"
          /></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn
          text
          class="mr-10"
          active-class="red darken-4 white--text"
          to="/login"
          plain
          v-if="user.user == null"
        >
          Login
        </v-btn>
        <v-btn
          text
          class="mr-10"
          to="/impress"
          active-class="red darken-4 white--text"
          plain
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
            <v-list-item-content v-if="user.user != null">
              <v-list-item-title class="text-h6">
                {{ user.user.firmen_name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                user.user.firmen_mail
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content v-else class="text-center">
              <v-list-item-title class="text-h6">
                Startseite
              </v-list-item-title>
              <v-list-item-subtitle
                >Karrieretag HTL Wien West
              </v-list-item-subtitle>
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
              active-class="red darken-4 white--text"
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
              active-class="red darken-4 white--text"
              to="/antrag"
              v-if="user == null"
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
        <div v-if="user.user != null">
          <v-row class="my-0">
            <v-col cols="4">
              <p class="ml-2 mt-1">Extras</p>
            </v-col>
            <v-col cols="8">
              <v-divider dark></v-divider>
            </v-col>
          </v-row>
          <v-list dense nav>
            <v-list-item link :loading="dialog" @click.stop="showDialog = true">
              <v-list-item-icon>
                <v-icon>mdi-account-multiple-remove</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Abmelden</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              link
              active-class="red darken-4 white--text"
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
    </div>

    <!-- Admin Navigation -->
    <v-navigation-drawer
      color="white"
      v-model="drawer"
      statless
      app
      v-if="$router.history.current['path'].includes('/admin')"
    >
      <v-list nav>
        <v-list-item>
          <v-list-item-content v-if="user.user != null && user.admin == true">
            <v-list-item-title class="text-h6">
              Admin XY
            </v-list-item-title>
            <v-list-item-subtitle>admin@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-list-item-title class="text-h6">
              Startseite
            </v-list-item-title>
            <v-list-item-subtitle
              >Karrieretag HTL Wien West
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div>
        <v-divider dark></v-divider>
        <v-list dense nav>
          <v-list-item
            v-for="item in adminitems"
            :key="item.title"
            link
            active-class="red darken-4 white--text"
            :to="item.route"
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
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
      <loading v-if="$root.loading"></loading>
      <router-view
        v-else
        @changeColor="changeColor"
        @focusId="passId"
        :impressId="impressId"
        :infoId="infoId"
      />
    </v-main>
  </v-app>
</template>

<script>
import AskLogout from '@/components/AskLogout.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    AskLogout,
  },
  created() {
    this.getUser();
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(
        () => ((this.dialog = false), this.logout(), (this.drawer = false)),
        2000,
      );
    },
  },

  data: () => ({
    languages: [
      { flag: 'us', language: 'en', title: 'English' },
      { flag: 'de', language: 'de', title: 'Deutsch' },
    ],
    user: {},
    value: 0,
    query: false,
    show: true,
    interval: 0,
    infoId: '',
    impressId: '',
    drawer: false,
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
    adminitems: [
      { title: 'Home', icon: 'mdi-view-dashboard', route: '/admin' },
      {
        title: 'Aktivitäten',
        icon: 'mdi-information',
        route: '/admin/aktivitäten',
      },
      {
        title: 'Anträge',
        icon: 'mdi-account-supervisor',
        route: '/admin/anträge',
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
    getUser() {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user != null) {
        this.user = user;
      }
    },
    async logout() {
      await axios({
        url: '/logout',
        method: 'GET',
      });
      localStorage.clear();
      this.$router.go();
    },
    passId(id) {
      this.impressId = id;
      this.$router.push('/impress');
    },
    changeColor(id) {
      this.infoId = id;
      this.$router.push('/infos');
      // this.kategorien
      //   .filter((el) => el.id != id)
      //   .forEach(
      //     (el) =>
      //       (document.getElementById(`${el.id}`).style.background = 'none'),
      //   );
      // document.getElementById(`${id}`).style.background = 'yellow';
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;800&display=swap');

html * {
  font-family: 'Titillium Web', sans-serif;
}
</style>
