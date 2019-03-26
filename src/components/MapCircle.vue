<template>
  <l-circle
    :lat-lng="center"
    :radius="radius"
    :color="color"
    :fill-color="color"
    :className="'map-circle'"
  />
</template>

<script>
import { LCircle } from "vue2-leaflet";
import { getRequestsForCity } from "../firebase.js";

export default {
  components: {
    LCircle
  },
  props: ["center", "name"],
  data() {
    return {
      color: "red",
      radius: 90000,
      hits: -1,
    };
  },
  mounted() {
    if (this.name) {
      getRequestsForCity(this.name)
        .onSnapshot(snapshot => {
          if (this.hits === -1) {
            this.hits = snapshot.docs.length;
          }
          if (snapshot.docs.length !== this.hits) {
            this.hits = snapshot.docs.length;
            this.radius = this.radius * 2
            setTimeout(() => this.radius = this.radius / 2, 500);
          }
          if (snapshot.docs.length > 0) {
            let processing = 0;
            let done = 0;
            snapshot.forEach(doc => {
              if (doc.data().status === "processing") {
                processing++;
              } else if (doc.data().status === "done") {
                done++;
              }
            });
            if (done === snapshot.docs.length) {
              this.color = "green";
            } else if (processing > 0) {
              this.color = "yellow";
            } else {
              this.color = "red";
            }
          }
        });
    }
  }
};
</script>

<style>
.map-circle {
  transition-property: stroke, fill, d;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
</style>
