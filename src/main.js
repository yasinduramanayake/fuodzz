import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Notifications from "@kyvg/vue3-notification";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import store from "./store";
import "./tailwind.css";
import "flowbite";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import i18n from "./i18n";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { VueSpinners } from "@saeris/vue-spinners";
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";


let $mapkey = store.state.mapApiKey;
// store.dispatch('fetchSettings').then(() => {
//   let settings = store.state.settings;
//   $mapkey = settings.strings.google_maps_key
// })

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(VueSpinners)
  .use(Notifications)
  .use(VueSweetalert2)
  .use(VueTelInput)
  .use(VueGoogleMaps, {
    load: {
      key: $mapkey,
      libraries: "places", // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)

      //// If you want to set the version, you can do so:
      // v: '3.26',
    },
  })
  // app.use(axios)
  .mount("#app");

const firebaseConfig = {
  apiKey: $mapkey,

  authDomain: "fuodz-e9ebc.firebaseapp.com",

  projectId: "fuodz-e9ebc",

  storageBucket: "fuodz-e9ebc.appspot.com",

  messagingSenderId: "977502122572",

  appId: "1:977502122572:web:13da9a2fe4072357c3bae9",

  measurementId: "G-J87MPMLTF6",
};

firebase.initializeApp(firebaseConfig);

require("@/assets/scss/landingpage.scss");
require("@/assets/scss/productPage.scss");


// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }

  // set the current language for i18n.
  i18n.locale = language;
  next();
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (config.showLoader) {
      // this.$store.commit('loading', true)
    }
    return config;
  },
  function (error) {
    // Do something with request error
    if (error.config.showLoader) {
      // this.$store.commit('loading', false)
    }
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data

    if (response.config.showLoader) {
      // this.$store.commit('loading', true)
    }
    return response;
  },
  function (error) {
    if (error.config.showLoader) {
      // this.$store.commit('loading', false)
    }
    // Do something with response error
    return Promise.reject(error);
  }
);
