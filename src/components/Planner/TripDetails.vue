<template>
  <div class="details-wrapper">
    <div class="details__destination">
      {{tripData.city}}
      <i class="fas fa-arrow-right details__destination-icon"></i>
    </div>
    <div class="trip-card">
      <div class="trip-card__header">
        <div class="trip-card__title">
          <i class="trip-icon fas fa-plane-departure"></i>
          Lot
        </div>
        <div class="trip-card__info">300$</div>
      </div>
      <div class="trip-card__content">
        <div class="flight-details">
          <div>
            <div class="flight-label">ODLOT</div>
            <div class="flight-time">12:05</div>
          </div>
          <div class="flight-details--icon">
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
          <div>
            <div class="flight-label">PRZYLOT</div>
            <div class="flight-time">14:05</div>
          </div>
        </div>
      </div>
    </div>
    <div class="trip-card">
      <div class="trip-card__header">
        <div class="trip-card__title">
          <i class="trip-icon fas fa-home"></i>
          Hotel
        </div>
        <div class="trip-card__info">300$</div>
      </div>
      <div class="trip-card__content">Raddisson Blue</div>
    </div>
    <div class="trip-card">
      <div class="trip-card__header">
        <div class="trip-card__title">
          <i class="trip-icon fas fa-plane-arrival"></i>
          Lot
        </div>
        <div class="trip-card__info">300$</div>
      </div>
      <div class="trip-card__content">
        <div class="flight-details">
          <div>
            <div class="flight-label">ODLOT</div>
            <div class="flight-time">12:05</div>
          </div>
          <div class="flight-details--icon">
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
          <div>
            <div class="flight-label">PRZYLOT</div>
            <div class="flight-time">14:05</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tripData"]
};
</script>

<style lang="scss" scoped>
.details-wrapper {
  padding: 5px;
  text-align: left;
}

.details__destination {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #6f7386;

  &-icon {
    color: #55b0f3;
    margin-left: 10px;
    font-size: 20px;
  }
}

.trip-card {
  background: #f2f4f8;
  padding: 10px 25px;
  text-align: left;
  color: #333;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 20px;
}

.trip-card__header {
  display: flex;
  justify-content: space-between;
}

.trip-card__info {
  color: #55b0f3;
  font-weight: 600;
}

.trip-card__content {
  margin-top: 10px;
  font-weight: 600;
}

.trip-icon {
  color: #fca97d;
  margin-right: 10px;
}

.flight-details {
  display: flex;
  justify-content: space-between;

  &--icon {
    font-size: 30px;
    color: #55b0f3;
  }
}

.flight-label {
  color: #bdbdbd;
  font-size: 12px;
  font-weight: normal;
  margin-bottom: -5px;
}

.flight-time {
  color: #6f7386;
}
</style>
