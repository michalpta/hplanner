<template>
  <div>
    <div>Szczegóły Twoich wakacji w {{tripData.city}} {{tripData.month}}!</div>
    <div>Twój lot jest przewidziany na {{tripData.flightTime}} i będzie kosztować {{tripData.flightCost}}.</div>
    <div>Twój hotel nazywa się {{tripData.hotelName}} i cena za nocleg wynosi {{tripData.hotelCost}}.</div>
  </div>
</template>

<script>
export default {
  props: ["tripData"]
};
</script>

<style>
</style>
