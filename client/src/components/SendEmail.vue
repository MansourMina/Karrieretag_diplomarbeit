<template>
  <v-card class="pa-5">
    <v-system-bar class="red darken-4"></v-system-bar>
    <v-row class="ma-0 pt-2 pb-0" align="center">
      <v-col cols="2" md="1" class="pt-0 mt-0 ml-0 pl-0"><span>To</span></v-col>
      <v-col class="pa-0 ma-0 mt-2">
        <v-menu v-model="menu" style="display:inline-block" absolute>
          <template v-slot:activator="{ on }">
            <div class="d-flex flex-wrap">
              <v-chip
                pill
                v-on="on"
                v-for="s of selectedEmails"
                :key="s.firmen_id"
                @click="currentMenu = s"
                close
                dark
                @click:close="remove(s)"
              >
                {{ s.firmen_mail }}
              </v-chip>
            </div>
          </template>
          <v-card width="300">
            <v-list dark>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{
                    currentMenu.firmen_name
                  }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="menu = false">
                    <v-icon>mdi-close-circle</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item @click="() => {}">
                <v-list-item-action>
                  <v-icon color="red darken-4">mdi-briefcase</v-icon>
                </v-list-item-action>
                <v-list-item-subtitle>{{
                  currentMenu.firmen_mail
                }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>

    <v-divider class="pa-0 ma-0"></v-divider>

    <v-text-field
      class="mt-0 pt-0"
      full-width
      v-model="subject"
      label="Subject"
      single-line
    ></v-text-field>
    <v-textarea
      single-line
      label="Message"
      class="mt-0 pt-0"
      ref="target"
      id="message"
      @select="setText"
      contenteditable="true"
      v-model="message"
    ></v-textarea>

    <div class="ml-0 d-flex">
        <v-btn
          icon
          @click="textBold()"
          color="black"
          :disabled="selectedText.length == 0 || showBold == false"
          ><v-icon id="bold">mdi-format-bold</v-icon></v-btn
        >
      <v-spacer></v-spacer>
      <v-btn class="mt-0 my-2 mr-2" icon @click="entwurfLöschen()"
        ><v-icon color="red darken-4">mdi-delete</v-icon></v-btn
      >

      <v-btn
        class="mt-0 my-2"
        icon
        @click="send()"
        :disabled="message.length == 0"
        ><v-icon color="primary">mdi-send</v-icon></v-btn
      >
    </div>
    <v-system-bar class="red darken-4"></v-system-bar>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      dialog: false,
      menu: false,
      currentMenu: {},
      message: '',
      subject: 'Re: Karrieretag',
      selectedText: '',
      diesdas: '',
      text: false,
      showBold: true,
    };
  },
  mounted() {
    document.addEventListener('mouseup', (event) => {
      if (event.target.id == 'message' || event.target.id == 'bold') {
        this.showBold = true;
        this.setText();
      } else {
        this.showBold = false;
      }
    });
  },

  props: {
    selectedEmails: {
      type: Array,
    },
  },

  methods: {
    textBold() {
      const boldedText = this.selectedText.bold();
      this.message = this.message.replace(this.selectedText, boldedText);
    },
    setText() {
      this.selectedText = window.getSelection().toString();
    },
    remove(item) {
      this.selectedEmails = this.selectedEmails.filter((el) => el != item);
      if (this.selectedEmails.length == 0) {
        this.$emit('deSelectFirma', item);
        this.$emit('closeDialog');
      } else {
        this.$emit('deSelectFirma', item);
      }
    },
    entwurfLöschen() {
      this.selectedEmails = [];
      this.message = '';
      this.$emit('closeDialog');
    },
    async send() {
      let finalSubject = '';
      if (this.subject.substring(0, 3).toLowerCase() == 're:') {
        finalSubject = this.subject.slice(3);
      } else {
        finalSubject = this.subject;
      }
      const emailstoSend = [];
      const finalMessage = this.message.replaceAll('\n', '<br/>\r\n');

      this.selectedEmails.forEach((element) => {
        emailstoSend.push({
          name: element.firmen_name,
          email: element.firmen_mail,
        });
      });

      await axios({
        url: '/sendmail',
        method: 'POST',
        contentType: 'application/json',
        data: {
          emails: emailstoSend,
          subject: finalSubject,
          message: finalMessage,
        },
      });
      this.entwurfLöschen();

      this.$emit('closeDialog');
    },
  },
  computed: {},
};
</script>
