<template>
<div style="width: 100%; height: 600px;">
  <l-map
    style="height: 100%; width: 100%;"
    :zoom="zoom"
    :center="center"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
    @update:bounds="boundsUpdated"
  >
    <l-tile-layer :url="url"></l-tile-layer>
    <map-circle :center="circle.center" :radius="circle.radius * 10" :color="circle.color" />
    <map-circle v-for="(location, index) of cities" :key="index" :center="location.location" :radius="circle.radius * 10" :color="'red'" />
  </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import MapCircle from './MapCircle.vue';
import locations from '../data/locations';

export default {
  components: {
    LMap,
    LTileLayer,
    MapCircle,
  },
  data() {
    return {
      // url: "http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 4,
      center: [50.0470, 20.0047],
      bounds: null,
      circle: {
        center: [50.0470, 20.0047],
        radius: 4500,
        color: '#0098CC'
      }
    };
  },
  computed: {
    cities() {
      return locations;
    },
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },
};
</script>

<style>
</style>
