<template>
  <v-container>
    <v-carousel :show-arrows="false" hide-delimiters cycle interval="3000">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        class="m-10"
      ></v-carousel-item>
    </v-carousel>
    <header class="text-center m-4">
      <h1 class="display-4 py-4 font-weight-bold">INFORMATIONEN</h1>
      <p class="font-italic text-muted mb-0">
        Die <b>HTL Wien West</b> veranstaltet einmal im Jahr einen Karrieretag
        für die Schülerinnen und Schüler der Ausbildungsrichtungen <br /><b
          >Elektrotechnik, Elektronik, Informationstechnologie, Maschinenbau und
          Mechatronik.</b
        >
        <br /><br />
        Zentrales Element ist eine Ausstellung von Unternehmen und
        Ausbildungsinstituten, die sich für unsere <b>Absolventinnen</b> und
        <b>Absolventen</b> interessieren.
        <br />

        Unser nächster Karrieretag findet am
        <b>Mittwoch, dem 9. März 2022</b> statt. Wir laden Sie also herzlich
        ein, aktiv mit einem Stand an unserem Karrieretag teilzunehmen.
        <br />

        Bitte beachten Sie, dass unser Platz aufgrund der räumlichen
        Gegebenheiten beschränkt ist und wir daher letztes Mal mit
        <b>52 Teilnehmern</b> das Maximum erreicht haben. <br />Wir gehen nach
        der Reihenfolge der Anmeldungen vor.
        <br />
        <br />

        Sollten Sie Fragen zur Teilnahme haben, kontaktieren Sie bitte
        <b><span style="color:blue">karrieretag@htlwienwest.at</span></b
        >.
      </p>
    </header>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
};
</script>
