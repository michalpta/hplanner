<template>
  <div class="form-wrapper">
    <div class="form-group">
      <label>Name</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user"></i>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Enter name" v-model="name">
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
        <input type="email" class="form-control" placeholder="Enter mail" v-model="email">
      </div>
    </div>
    <div class="form-group">
      <label>Destination</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-map-marker-alt"></i>
          </span>
        </div>
        <select class="form-control" v-model="city">
          <option value selected disabled>Select city</option>
          <option v-for="(city, index) of cities" :key="index">{{ city.name }}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Month</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-calendar"></i>
          </span>
        </div>
        <select class="form-control" v-model="month">
          <option value selected disabled>Select month</option>
          <option v-for="(date, index) of dates" :key="index">{{ date }}</option>
        </select>
      </div>
    </div>
    <button
      class="btn btn-outline-primary btn-block submit-button"
      @click="submit"
      :disabled="city && month && name ? false : true"
    >
      Submit
      <i class="fas fa-search search-icon"></i>
    </button>
  </div>
</template>

<script>
import months from "../../data/months";
import locations from "../../data/locations";

export default {
  data() {
    return {
      city: "",
      month: "",
      name: "",
      email: ""
    };
  },
  computed: {
    dates() {
      return months;
    },
    cities() {
      return locations;
    }
  },
  methods: {
    submit() {
      if (this.city !== "" && this.month !== "" && this.name !== "") {
        this.$emit("submitLocation", {
          city: this.city,
          month: this.month,
          name: this.name,
          email: this.email
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  text-align: left;
  margin-top: 20px;
}

.form-group {
  & > label {
    margin-bottom: 0;
  }
}

input,
select {
  background: #f5f4f8;
  border-radius: 5px;
}

.submit-button {
  border-radius: 30px;
  margin-top: 60px;
}

.search-icon {
  margin-left: 10px;
}
</style>
