<template>
  <l-feature-group v-if="radius > 0">
    <l-marker :lat-lng="center">
      <l-tooltip>{{name}}</l-tooltip>
    </l-marker>
    <l-circle :lat-lng="center" :radius="radius" :color="color" :fill-color="color"></l-circle>
    <l-circle
      v-if="done > 0"
      :lat-lng="center"
      :radius="done * hitWeight"
      :color="'green'"
      :fill-color="'green'"
    ></l-circle>
  </l-feature-group>
</template>

<script>
import {
  LCircle, LTooltip, LFeatureGroup, LMarker,
} from 'vue2-leaflet';
import { getRequestsForCity } from '../../firebase';

export default {
  components: {
    LCircle,
    LTooltip,
    LMarker,
    LFeatureGroup,
  },
  props: ['center', 'name'],
  data() {
    return {
      color: '#0C81E4',
      radius: 0,
      hitWeight: 20000,
      done: 0,
    };
  },
  mounted() {
    if (this.name) {
      getRequestsForCity(this.name).onSnapshot((snapshot) => {
        const hits = snapshot.docs.length;
        this.radius = hits * this.hitWeight;
        if (hits > 0) {
          let done = 0;
          snapshot.forEach((doc) => {
            if (doc.data().status === 'done') {
              done += 1;
            }
            this.done = done;
          });
        }
      });
    }
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
