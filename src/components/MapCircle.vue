<template>
  <l-circle :lat-lng="center" :radius="radius" :color="color" :fill-opacity="1" :fill-color="color"/>
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
</style>
