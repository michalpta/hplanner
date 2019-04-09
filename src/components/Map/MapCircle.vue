<template>
  <l-feature-group v-if="hits > 0">
    <l-marker :lat-lng="center">
      <l-tooltip>
        <b>{{name}}</b><br />
        <span v-if="hits" style="color: gray;">
          Liczba osób: {{hits}}
        </span>
      </l-tooltip>
    </l-marker>
    <l-circle :lat-lng="center" :radius="radius" :color="color" :fill-color="color"></l-circle>
    <l-circle
      v-if="hitsDone > 0"
      :lat-lng="center"
      :radius="(hitsDone / hits) * radius"
      :color="'green'"
      :fill-color="'green'"
    ></l-circle>
  </l-feature-group>
</template>

<script>
import {
  LCircle, LTooltip, LFeatureGroup, LMarker,
} from 'vue2-leaflet';
import { getRequestsCollection } from '../../firebase';

export default {
  components: {
    LCircle,
    LTooltip,
    LMarker,
    LFeatureGroup,
  },
  props: ['center', 'name', 'engName'],
  data() {
    return {
      color: '#0C81E4',
      hits: 0,
      hitsDone: 0,
      radius: 0,
      maxRadius: 400000,
      minRadius: 20000,
      radiusReducingHitBuffer: 10,
    };
  },
  mounted() {
    getRequestsCollection().onSnapshot(((snapshot) => {
      const requests = snapshot.docs.filter(r => !(r.data().canceled));
      const totalHits = requests.length;

      const requestsForCity = requests.filter(r => r.data().city === this.engName);
      this.hits = requestsForCity.length;

      const requestsForCityDone = requestsForCity.filter(r => r.data().status === 'done');
      this.hitsDone = requestsForCityDone.length;

      const radiusRange = this.maxRadius - this.minRadius;
      const hitsRatio = totalHits ? (this.hits / totalHits) : 0;
      const radiusReducingMultiplier = Math.min(this.radiusReducingHitBuffer, this.hits)
        / this.radiusReducingHitBuffer;
      this.radius = hitsRatio * radiusRange * radiusReducingMultiplier + this.minRadius;
    }));
  },
};
</script>

<style>
.map-circle {
  transition-property: stroke, fill;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
</style>
