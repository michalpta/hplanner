<template>
  <div class="form-group">
    <label>{{label}}</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i :class="icon"></i>
        </span>
      </div>
      <input type="text" class="form-control" :placeholder="placeholder" :value="value" @input="emitValue($event)" >
    </div>
  </div>
</template>

<script>
export default {
    props: ['label', 'icon', 'placeholder'],
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
