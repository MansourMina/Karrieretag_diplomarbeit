<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="1" >Ihre URL:</v-col>
      <v-col cols="12" md="11">
        <v-chip
          disabled
          href="http://www.htlwienwest.at"
          color="blue"
          pill
          >https://github.com/MansourMina/Karrieretag_diplomarbeit</v-chip
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
        <v-icon large color="black">
          mdi-account-network
        </v-icon>
      </v-col>
      <v-col cols="11">
        <v-divider class="mx-4"></v-divider>
      </v-col>
    </v-row>

    <v-card-title>Ansprechpartner</v-card-title>

    <v-container class="py-0">
      <v-row class="mt-0">
        <v-col cols="12" md="4">
          <v-card-subtitle>
            Teilnahme
          </v-card-subtitle>

          <v-card-text>
            <v-chip-group active-class="red accent-4 white--text" column>
              <v-chip disabled dark>{{ AnsprechpartnerTeilnahme }}</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="8">
          <v-card-subtitle>
            Ausstellung
          </v-card-subtitle>

          <v-card-text>
            <v-chip-group active-class="red accent-4 white--text" column>
              <v-chip disabled dark>{{ AnsprechpartnerAustellung }}</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

    <v-row>
      <v-col cols="1">
        <v-icon large color="black">
          mdi-bag-checked
        </v-icon>
      </v-col>
      <v-col cols="11">
        <v-divider class="mx-4"></v-divider>
      </v-col>
    </v-row>

    <v-card-title>Aufenthalt</v-card-title>

    <v-container class="py-0">
      <v-row class="mt-0">
        <v-col cols="12" sm="4">
          <v-card-subtitle>
            Platz
          </v-card-subtitle>

          <v-card-text>
            <v-chip-group
              v-model="platz"
              active-class="red accent-4 white--text"
              column
            >
              <v-chip disabled value="klasse">Klasse</v-chip>

              <v-chip disabled value="gang">Am Gang</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="8">
          <v-card-subtitle>
            Aufbauhilfe
          </v-card-subtitle>

          <v-card-text>
            <v-chip-group
              v-model="aufbauhilfe"
              active-class="red accent-4 white--text"
              column
            >
              <v-chip disabled value="y">Ja</v-chip>

              <v-chip disabled value="n">Nein</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="1">
        <v-icon large color="black">
          mdi-call-split
        </v-icon>
      </v-col>
      <v-col cols="11">
        <v-divider class="mx-4"></v-divider>
      </v-col>
    </v-row>
    <v-card-title>Fachrichtung</v-card-title>

    <v-container class="py-0">
      <v-row class="mt-0">
        <v-col cols="12">
          <v-card-subtitle>
            Ihr Unternehmen ist in folgenden Bereichen tätig
          </v-card-subtitle>

          <v-card-text>
            <v-chip-group
              v-model="UnternehmenRichtung"
              active-class="red accent-4 white--text"
              column
            >
              <v-chip disabled value="IT">Informationstechnologie</v-chip>

              <v-chip disabled value="E">Elektrotechnik/Elektronik</v-chip>
              <v-chip disabled value="M">Maschinenbau</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-col>
        <v-divider class="mx-4"></v-divider>

        <v-col cols="12">
          <v-card-subtitle>
            Vortrag ? Mit anwesenden Schüler/innen aus der
          </v-card-subtitle>

          <v-card-text>
            <v-chip-group
              v-model="VortragYesNo"
              active-class="red accent-4 white--text"
              column
            >
              <v-chip disabled value="y">Ja</v-chip>

              <v-chip disabled value="n">Nein</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-text v-if="VortragYesNo == 'y'">
            <v-chip-group
              v-model="VortragRichtung"
              active-class="red accent-4 white--text"
              column
            >
              <v-chip disabled value="IT">Informationstechnologie</v-chip>

              <v-chip disabled value="E">Elektrotechnik/Elektronik</v-chip>
              <v-chip disabled value="M">Maschinenbau</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-col>
        <v-divider class="mx-4"></v-divider>

        <v-col cols="12">
          <v-card-subtitle>
            Ihre Firma bietet auch Ferialpraxisplätze an?
          </v-card-subtitle>
          <v-card-text>
            <v-chip-group
              v-model="FerialYesNo"
              active-class="red accent-4 white--text"
              column
            >
              <v-chip disabled value="y">Ja</v-chip>

              <v-chip disabled value="n">Nein</v-chip>
            </v-chip-group>
          </v-card-text>

          <div v-if="FerialYesNo == 'y'">
            <v-card-subtitle>
              In folgenden Bereichen
            </v-card-subtitle>
            <v-card-text>
              <v-chip-group
                v-model="FerialRichtung"
                active-class="red accent-4 white--text"
                column
              >
                <v-chip disabled value="IT">Informationstechnologie</v-chip>

                <v-chip disabled value="E">Elektrotechnik/Elektronik</v-chip>
                <v-chip disabled value="M">Maschinenbau</v-chip>
              </v-chip-group>
            </v-card-text>
          </div>
          <div v-if="FerialYesNo == 'y'">
            <v-card-subtitle>
              Ansprechpartner/in für Ferialpraxis
            </v-card-subtitle>
            <v-card-text>
              <v-chip-group active-class="red accent-4 white--text" column>
                <v-chip disabled dark>{{ EmailFerial }}</v-chip>
                <v-chip disabled dark>{{ TelFerial }}</v-chip>
              </v-chip-group>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="1">
        <v-icon large color="black">
          mdi-finance
        </v-icon>
      </v-col>
      <v-col cols="11">
        <v-divider class="mx-4"></v-divider>
      </v-col>
    </v-row>
    <v-card-title>Finanzielle</v-card-title>

    <v-container class="py-0">
      <v-row class="mt-0">
        <v-col cols="12" md="6">
          <v-card-subtitle>
            Wir sind an einem Sponsoring/einer Partnerschaft interessiert
          </v-card-subtitle>
          <v-card-text>
            <v-chip-group
              v-model="SponsoringYesNo"
              active-class="red accent-4 white--text"
              column
            >
              <v-chip disabled value="y">Ja</v-chip>

              <v-chip disabled value="n">Nein</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-subtitle>
            Die exakte Rechnungsanschrift (bei Änderung bitte um Mitteilung!)
          </v-card-subtitle>
          <v-card-text>
            <v-chip-group
              v-model="platz"
              active-class="red accent-4 white--text"
              column
            >
              <v-chip disabled>Thaliastraße 125, 1160 Wien</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      FerialYesNo: 'n',
      FerialRichtung: 'IT',
      VortragYesNo: 'n',
      VortragRichtung: 'E',
      UnternehmenRichtung: 'M',
      aufbauhilfe: 'y',
      platz: 'gang',
      AnsprechpartnerTeilnahme: 'Max Mustermann',
      AnsprechpartnerAustellung: 'Sebi Sebistann',
      EmailFerial: 'max.mustermann@gmail.com',
      TelFerial: '0676053044035',
      SponsoringYesNo: 'n',
    };
  },
};
</script>

<style lang="scss" scoped></style>
