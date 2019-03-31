<template>
  <div id="app">
    <Map ref="map"/>
    <Planner :show-trip="showTrip" :trip-data="tripData" :searching="searching" />
  </div>
</template>

<script>
import Map from "./components/Map/Map.vue";
import Planner from './components/Planner/Planner.vue';
import { getRequestsCollection, getRequestById } from "./firebase.js";
import sendDataToOrch from "./services/httpService.js";

export default {
  name: "app",
  components: {
    Map,
    Planner,
  },
  data() {
    return {
      searching: false,
      showTrip: false,
      tripData: {}
    };
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
          getRequestById(localStorage.referenceId).onSnapshot(doc => {
            if (doc.exists) {
              const data = doc.data();
              if (data.status === "processing") {
                this.searching = true;
              } else if (data.status === "done") {
                this.searching = false;
                this.tripData = data;
                this.showTrip = true;
                this.$refs.map.showTripDetails(this.tripData.city);
              }
            }
          });
        });
    }
  },
  created() {
    if (localStorage.referenceId) {
      this.showTrip = true;
      getRequestById(localStorage.referenceId).onSnapshot(doc => {
        if (doc.exists) {
          const data = doc.data();
          if (data.status === "processing") {
            this.searching = true;
          } else if (data.status === "done") {
            this.searching = false;
            this.tripData = data;
            this.showTrip = true;
            this.$refs.map.showTripDetails(this.tripData.city);
          }
        } else {
          localStorage.removeItem('referenceId');
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
