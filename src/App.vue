<template>
  <div id="app">
    <div class="planner-section" :class="{ 'map-section--hidden': !mapHidden, 'map-section--shown': mapHidden }">
      <Planner :show-trip="showTrip" :trip-data="tripData" :searching="searching" @submitLocation="handleSubmit" />
    </div>
    <div class="map-section" :class="{ 'map-section--hidden': mapHidden, 'map-section--shown': !mapHidden }">
      <Map ref="map"/>
    </div>
    <button class="toggle-map-button" @click="mapHidden = !mapHidden" title="Toggle map"><i class="far fa-map"></i></button>
  </div>
</template>

<script>
import Map from './components/Map/Map.vue';
import Planner from './components/Planner/Planner.vue';
import { getRequestsCollection, getRequestById, getToken } from './firebase';

export default {
  name: 'app',
  components: {
    Map,
    Planner,
  },
  data() {
    return {
      searching: false,
      showTrip: false,
      tripData: {},
      authToken: '',
      mapHidden: true,
    };
  },
  methods: {
    handleSubmit({
      city, month, name, email,
    }) {
      this.searching = true;
      this.showTrip = false;
      getRequestsCollection()
        .add({
          name,
          email,
          city,
          month,
          status: 'processing',
        })
        .then((docRef) => {
          localStorage.referenceId = docRef.id;
          getRequestById(localStorage.referenceId).onSnapshot((doc) => {
            if (doc.exists) {
              const data = doc.data();
              if (data.status === 'processing') {
                this.searching = true;
              } else if (data.status === 'done') {
                this.searching = false;
                this.tripData = data;
                this.showTrip = true;
                this.$refs.map.showTripDetails(this.tripData.city);
              }
            }
          });
        });
    },
  },
  created() {
    if (localStorage.referenceId) {
      this.showTrip = true;
      getRequestById(localStorage.referenceId).onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          if (data.status === 'processing') {
            this.searching = true;
          } else if (data.status === 'done') {
            this.searching = false;
            this.tripData = data;
            this.showTrip = true;
            this.$refs.map.showTripDetails(this.tripData.city);
          }
        } else {
          localStorage.removeItem('referenceId');
        }
      });
    }
    getToken().get().then(doc => this.authToken = doc.data().token);
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F3F5F8;
  padding: 0;
  display: flex;
  position: relative;
}

body {
  margin: 0;
}

.map-section {
  width: 75%;

  @media screen and (max-width: 1024px) {
    width: 100%;

    &--hidden {
      display: none;
    }

    &--shown {
      display: block;
      z-index: 15;
    }
  }
}
.planner-section {
  width: 25%;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
}

.toggle-map-button {
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    z-index: 100;
    bottom: -15px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid darken(#0098cc, 10%);
    background: #0098cc;
    border-radius: 50%;
    cursor: pointer;
    font-size: 30px;
    padding: 15px;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: darken(#0098cc, 5%);
    }
  }
}
</style>
