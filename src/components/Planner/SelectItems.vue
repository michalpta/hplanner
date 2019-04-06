<template>
  <div class="form-group">
    <label>{{label}}</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-map-marker-alt"></i>
        </span>
      </div>
      <select class="form-control" @change="emitValue($event)">
        <option value selected disabled>{{placeholder}}</option>
        <option v-for="(item, index) of values" :key="index" :value="item.engName">{{ item.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
    props: ['label', 'icon', 'placeholder', 'values'],
    data() {
        return {
            value: ''
        }
    },
    methods: {
        emitValue(event) {
            this.$emit('onChange', event.target.value);
        }
    }
};
</script>

<style>
</style>
