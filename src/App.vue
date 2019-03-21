<template>
  <div id="app">
    <Map />
    <Destination />
  </div>
</template>

<script>
import Map from './components/Map.vue';
import Destination from './components/Destination.vue';

export default {
  name: 'app',
  components: {
    Map,
    Destination,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
</style>
