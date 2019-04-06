<template>
  <div class="form-wrapper">
    <text-input label="Imię" icon="fas fa-user" placeholder="Wpisz imię" @onChange="name = $event"/>
    <text-input label="Email" icon="fas fa-envelope" placeholder="Wpisz email" @onChange="email = $event" />
    <select-items label="Cel podróży" icon="fas fa-map-marker-alt" placeholder="Wybierz miasto" @onChange="city = $event" :values="cities" />
    <select-items label="Miesiąc" icon="fas fa-calendar" placeholder="Wybierz miesiąc" @onChange="month = $event" :values="dates"/>
    <button
      class="btn btn-outline-primary btn-block submit-button"
      @click="submit"
      :disabled="city && month && name ? false : true"
    >
      Szukaj
      <i class="fas fa-search search-icon"></i>
    </button>
  </div>
</template>

<script>
import TextInput from './TextInput.vue';
import SelectItems from './SelectItems.vue';
import months from "../../data/months";
import locations from "../../data/locations";

export default {
  components: {
    TextInput,
    SelectItems
  },
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

<style lang="scss">
.form-wrapper {
  text-align: left;
  margin-top: 20px;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
}

.form-group {
  @media screen and (max-width: 1024px) {
    margin-bottom: 5px;
  }
  & > label {
    margin-bottom: 0;
  }

  .input-group-text {
    border: none;
    color: #c5c5c5;
    background-color: #f2f4f8 !important;
  }
}

input,
select {
  background-color: #f2f4f8 !important;
  border-radius: 5px !important;
  border: none !important;
}

.submit-button {
  border-radius: 30px;
  margin-top: 60px;
  border-width: 3px;
  font-weight: bold;

  &:disabled {
    cursor: not-allowed;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
}

.search-icon {
  margin-left: 10px;
}
</style>
