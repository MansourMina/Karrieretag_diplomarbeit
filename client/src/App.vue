<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="white" elevate-on-scroll fixed height="70">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/"
          ><img src="@/assets/logo.png" class="mt-3 mb-2" height="50"
        /></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        text
        class="mr-10"
        href="https://www.htlwienwest.at/ueberuns/impressum.html"
        target="_blank"
      >
        Impressum
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer color="white" v-model="drawer" statless app>
      <v-list nav>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Max Mustermann
            </v-list-item-title>

            <v-list-item-subtitle>Siemens@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
      </v-list>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="item in accountItems"
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
      </v-list>
    </v-navigation-drawer>
    <!-- Navbar -->

    <v-main hide-overlay>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    search: false,
    accountItems: [
      {
        title: 'Abmelden',
        icon: 'mdi-account-multiple-remove',
        route: '/abmelden',
      },
      {
        title: 'Daten',
        icon: 'mdi-face-man-profile',
        route: '/daten',
      },
    ],

    items: [
      { title: 'Home', icon: 'mdi-view-dashboard', route: '/' },
      { title: 'About', icon: 'mdi-account-supervisor', route: '/about' },
      { title: 'Information', icon: 'mdi-information', route: '/infos' },
    ],
    right: null,
  }),
};
</script>
