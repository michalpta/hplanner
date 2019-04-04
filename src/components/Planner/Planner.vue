<template>
  <div class="planner">
    <logo />
    <div v-if="!searching">
      <Destination v-if="!showTrip" @submitLocation="handleSubmit"/>
      <trip-details :trip-data="tripData" v-else/>
    </div>
    <Preloader v-else/>
  </div>
</template>

<script>
import Destination from './Destination.vue';
import Preloader from './Preloader.vue';
import TripDetails from './TripDetails.vue';
import Logo from './Logo.vue';

export default {
  components: {
    Destination,
    Preloader,
    TripDetails,
    Logo,
  },
  props: ['showTrip', 'tripData', 'searching'],
  methods: {
    handleSubmit(formData) {
      this.$emit('submitLocation', formData);
    },
  },
};
</script>

<style lang="scss" scoped>
  .planner {
    padding: 35px 50px;
    background: #FFFFFF;
    height: 100vh;
  }
</style>

