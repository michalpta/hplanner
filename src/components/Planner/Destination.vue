<template>
  <div class="form-wrapper">
    <div class="form-group">
      <label>Imię</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user"></i>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Wpisz imię" v-model="name">
      </div>
    </div>
    <div class="form-group">
      <label>Email</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <input type="email" class="form-control" placeholder="Wpisz mail" v-model="email">
      </div>
    </div>
    <div class="form-group">
      <label>Cel podróży</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-map-marker-alt"></i>
          </span>
        </div>
        <select class="form-control" v-model="city">
          <option value selected disabled>Wybierz miasto</option>
          <option v-for="(city, index) of locations" :key="index" :value="city.engName">{{ city.name }}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Miesiąc</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-calendar"></i>
          </span>
        </div>
        <select class="form-control" v-model="month">
          <option value selected disabled>Wybierz miesiąc</option>
          <option v-for="(date, index) of months" :key="index" :value="date.engName">{{ date.name }}</option>
        </select>
      </div>
    </div>
    <button
      class="btn btn-outline-primary btn-block submit-button"
      @click="submit"
      :disabled="!isFormValid()"
    >
      Szukaj
      <i class="fas fa-search search-icon"></i>
    </button>
  </div>
</template>

<script>
import months from '../../data/months';
import locations from '../../data/locations';

export default {
  data() {
    return {
      city: '',
      month: '',
      name: '',
      email: '',
      locations,
      months,
    };
  },
  methods: {
    isFormValid() {
      return this.city !== '' && this.month !== '' && this.name !== '';
    },
    submit() {
      if (this.isFormValid()) {
        this.$emit('submitLocation', {
          city: this.city,
          month: this.month,
          name: this.name,
          email: this.email,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
