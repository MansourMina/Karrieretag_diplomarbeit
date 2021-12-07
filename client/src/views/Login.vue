<template>
  <div class="container-fluid px-3 px-md-5 px-lg-3 px-xl-5 py-5 mx-auto">
    <div>
      <!-- @submit.prevent="login" -->
      <div class="card card0 mt-5 border-0">
        <v-row>
          <v-col cols="12" md="6">
            <div class=" d-block text-center  border-line">
              <img
                src="@/assets/Anmeldung_Logo.svg"
                class="logo"
                style="height:60vh; width:60vh; margin:-30px; "
              />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="card2 border-0 px-4 py-5">
              <div class="row px-3"></div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 spacing text-sm">User-ID</h6>
                </label>
                <input
                  class="logininput"
                  style="margin-left: 0"
                  type="text"
                  name="email"
                  v-model="userId"
                  placeholder="Enter a valid email address"
                />
                <label class="mb-1">
                  <h6 class="spacing mb-0 text-sm" style="color:red">
                    {{ message }}
                  </h6>
                </label>
              </div>
              <v-row class="px-3 mb-4 mt-4">
                <label class="mb-1">
                  <h6 class="spacing mb-0 text-sm">Password</h6>
                </label>
                <input
                  class="logininput"
                  type="password"
                  name="password"
                  v-model="passwort"
                  placeholder="Enter password"
                />
                <label class="mb-1">
                  <h6 class="spacing mb-0 text-sm" style="color:red">
                    {{ message }}
                  </h6>
                </label>
              </v-row>
              <!-- <div class="row px-3 mb-4">
              <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
            </div> -->
              <v-row class=" mb-3 px-3">
                <button
                  @click="login()"
                  style="background-color: #B61212;"
                  class="btn btn-blue text-center"
                >
                  Login
                </button>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'app',
  data() {
    return {
      userId: '',
      passwort: '',
      user: {},
      message: '',
    };
  },
  components: {},
  created() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      this.user = user;
    }
  },
  methods: {
    async login() {
      try {
        let { data } = await axios({
          url: '/login',
          method: 'POST',
          contentType: 'application/json',
          data: {
            userId: this.userId,
            passwort: this.passwort,
          },
        });

        localStorage.setItem('user', JSON.stringify(data));
        this.$router.push('/');
        this.$router.go();
      } catch (err) {
        this.message = 'Wrong User ID or password';
      }
    },
  },
};
</script>
<style>
.card0 {
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.logo {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  margin-left: 35px;
}

.image {
  width: 360px;
  height: 280px;
}

.border-line {
  border-right: 1px solid #eeeeee;
}

.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}

.or {
  width: 10%;
  font-weight: bold;
}

.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #bdbdbd;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

.logininput {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

.logininput:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304ffe;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #000;
  cursor: pointer;
}

.bg-blue {
  color: #fff;
  background-color: #1a237e;
}

.spacing {
  margin-left: -0.75rem;
}

@media screen and (max-width: 991px) {
  .logo {
    margin-left: 0px;
  }

  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}
</style>
