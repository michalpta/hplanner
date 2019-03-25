<template>
  <div style="margin-top: 10px;">
    <div>
      <label>Name</label>
      <input v-model="name" />
    </div>
    <div>
      <label>Email</label>
      <input v-model="email" />
    </div>
    <div>
      <label>City</label>
      <select v-model="city">
        <option v-for="(city, index) of cities" :key="index">{{ city.name }}</option>
      </select>
    </div>
    <div>
      <label>Date</label>
      <select v-model="month">
        <option v-for="(date, index) of dates" :key="index">{{ date }}</option>
      </select>
    </div>
    <button @click="submit" :disabled="city && month ? false : true">Submit</button>
  </div>
</template>

<script>
import months from "../data/months";

export default {
  props: ["cities"],
  data() {
    return {
      city: "",
      month: "",
      name: "",
      email: "",
    };
  },
  computed: {
    dates() {
      return months;
    }
  },
  methods: {
    submit() {
        if (this.city !== "" && this.month !== "" && this.name !== "")
            this.$emit("submitLocation", { city: this.city, month: this.month, name: this.name, email: this.email });
    }
  }
};
</script>

<style lang="scss" scoped>
select {
    padding: 5px 10px;
    border-radius: 3px;
    margin-bottom: 10px;
    width: 150px;
}

input {
  padding: 5px 10px;
  margin-bottom: 10px;
  width: 130px;
  border-radius: 3px;
  border: 1px solid rgb(169, 169, 169);
}

label {
    display: block;
}

button {
    padding: 10px 15px;
    width: 150px;
    margin-top: 10px;
    background: green;
    color: #fff;
    border: 1px solid green;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:not(:disabled):hover {
        background: darken(green, 10%);
        border: 1px solid darken(green, 10%);
    }

    &:disabled:hover {
        cursor: not-allowed;
    }
}
</style>
