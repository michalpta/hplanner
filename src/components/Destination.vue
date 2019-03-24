<template>
    <div>
        <select v-model="city">
            <option v-for="(city, index) of cities" :key="index">{{ city.name }}</option>
        </select>
        <select v-model="month">
            <option v-for="(date, index) of dates" :key="index">{{ date }}</option>
        </select>
        <button @click="submit">Submit</button>
    </div>
</template>

<script>
import months from '../data/months';

export default {
    props: ['cities'],
    data() {
        return {
            city: '',
            month: '',
        };
    },
    computed: {
        dates() {
            return months;
        },
    },
    methods: {
        submit() {
            this.$emit('submitLocation', { city: this.city, month: this.month });
        }
    }
};
</script>

<style>

</style>
