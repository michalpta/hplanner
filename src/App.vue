<template>
  <div id="app">
    <Map/>
    <div v-if="!searching">
      <Destination :cities="cities" v-if="!showTrip" @submitLocation="handleSubmit"/>
      <trip-details :city="tripData.city" :month="tripData.month" v-else/>
    </div>
    <Preloader v-else/>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import Destination from "./components/Destination.vue";
import TripDetails from "./components/TripDetails.vue";
import Preloader from "./components/Preloader.vue";
import locations from "./data/locations";
import { setTimeout } from "timers";
import { getRequestsCollection, getRequestById } from "./firebase.js";
import sendDataToOrch from "./services/httpService.js";

export default {
  name: "app",
  components: {
    Map,
    Destination,
    TripDetails,
    Preloader
  },
  data() {
    return {
      searching: false,
      showTrip: false,
      tripData: {}
    };
  },
  computed: {
    cities() {
      return locations;
    }
  },
  methods: {
    handleSubmit({ city, month, name, email }) {
      this.searching = true;
      this.showTrip = false;
      getRequestsCollection()
        .add({
          name,
          email,
          city,
          month,
          status: "processing"
        })
        .then(docRef => {
          localStorage.referenceId = docRef.id;
          // sendDataToOrch();
          getRequestById(localStorage.referenceId)
            .get()
            .then(doc => {
              if (doc.exists) {
                this.tripData = doc.data();
              } else {
                this.showTrip = false;
              }
            });
        });
      setTimeout(() => {
        this.searching = false;
        this.city = city;
        this.month = month;
        this.showTrip = true;
      }, 10000);
    }
  },
  created() {
    if (localStorage.referenceId) {
      this.showTrip = true;
      getRequestById(localStorage.referenceId)
        .get()
        .then(doc => {
          if (doc.exists) {
            this.tripData = doc.data();
          } else {
            this.showTrip = false;
          }
        });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
</style>
