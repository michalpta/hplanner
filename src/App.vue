<template>
  <div id="app">
    <Map />
    <Destination :cities="cities" />
  </div>
</template>

<script>
import Map from './components/Map.vue';
import Destination from './components/Destination.vue';
import locations from './data/locations';

export default {
  name: 'app',
  components: {
    Map,
    Destination,
  },
  computed: {
    cities() {
      return locations;
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
