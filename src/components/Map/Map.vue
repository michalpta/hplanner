<template>
  <div style="width: 100%; height: 600px;">
    <l-map
      style="height: 100%; width: 100%;"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
      ref="map"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-circle :lat-lng="circle.center" :radius="90000" :color="'#0098cc'"/>
      <map-circle
        v-for="(location, index) of cities"
        :key="index"
        :name="location.name"
        :center="location.location"
        :color="'red'"
      />
    </l-map>
  </div>
</template>

<script>
import * as L from 'leaflet';
import { LMap, LTileLayer, LCircle } from 'vue2-leaflet';
import MapCircle from './MapCircle.vue';
import locations from '../../data/locations';

export default {
  components: {
    LMap,
    LTileLayer,
    MapCircle,
    LCircle,
  },
  data() {
    return {
      // url: "http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 4,
      center: [50.0470, 20.0047],
      bounds: null,
      circle: {
        center: [50.0470, 20.0047],
        radius: 4500,
        color: '#0098CC',
      },
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
    },
    showTripDetails(city) {
      const dest = locations.filter(c => c.name === city)[0];
      const group = L.latLngBounds([this.center, dest.location]);
      this.$refs.map.fitBounds(group);
    },
  },
};
</script>

<style>
</style>
