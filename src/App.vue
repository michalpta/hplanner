<template>
  <div id="app">
    <Map />
    <Destination :cities="cities" v-if="!searching" @submitLocation="handleSubmit" />
    <Preloader v-else />
    <trip-details :city="city" :month="month" v-if="showTrip" />
  </div>
</template>

<script>
import Map from './components/Map.vue';
import Destination from './components/Destination.vue';
import TripDetails from './components/TripDetails.vue';
import Preloader from './components/Preloader.vue';
import locations from './data/locations';
import { setTimeout } from 'timers';

export default {
  name: 'app',
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
      city: '',
      month: '',
    }
  },
  computed: {
    cities() {
      return locations;
    },
  },
  methods: {
    handleSubmit({ city, month }) {
      this.searching = true;
      this.showTrip = false;
      setTimeout(() => {
        this.searching = false
        this.city = city;
        this.month = month;
        this.showTrip = true;
      }, 10000);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
</style>
