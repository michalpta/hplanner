<template>
  <div class="details-wrapper">
    <div class="trip-card">
      <div class="trip__normal-text">Twoje wakacje w</div>
      <div class="trip__destination">{{tripData.city}}!</div>
      <div class="trip__flight-details">
        Przelot:
        <br/>
        <i class="fas fa-plane-departure" style="margin-top: 10px;"></i>
        {{tripData.flightTime}}
        <i class="fas fa-plane-arrival" style="margin-left: 10px;"></i>
        {{tripData.flightTime}}
        <i class="fas fa-dollar-sign" style="margin-left: 10px;"></i>
        {{tripData.flightCost}}
      </div>
      <div class="trip__hotel-details" style="margin-top: 20px;">
        Hotel:
        <br/>
        <i class="fas fa-hotel" style="margin-top: 10px;"></i>
        {{tripData.hotelName}} 
        <i class="fas fa-dollar-sign" style="margin-left: 10px;"></i>
        {{tripData.hotelCost}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tripData"]
};
</script>

<style lang="scss">
.details-wrapper {
  padding: 25px;
}

.trip-card {
  padding: 10px;
  text-align: left;
  color: #fff;
  border-radius: 4px;
  background: rgba(0, 152, 204, 0.7);
}

.trip__normal-text {
  margin-bottom: 5px;
}

.trip__flight-details {
  margin-bottom: 5px;
  font-size: 16px;
}

.trip__destination {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}
</style>
