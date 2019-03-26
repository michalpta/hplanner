<template>
  <l-circle :lat-lng="center" :radius="radius" :color="color" :fill-color="color" :className="'circle-progress'" />
</template>

<script>
import { LCircle } from 'vue2-leaflet';

export default {
    components: {
        LCircle,
    },
    props: ['center', 'radius', 'color'],
};
</script>

<style>
.circle-progress {
  background: linear-gradient(to right, #9b59b6 50%, #34495e 50%);
}

.circle-progress:before {
 border-radius: 0 100% 100% 0 / 50%;
  content: '';
  display: block;
  height: 100%;
  margin-left: 50%;
  -webkit-transform-origin: left;
          transform-origin: left;

  
  background: #34495e;
  -webkit-transform: rotate(-270deg);
          transform: rotate(-270deg);
}
</style>
