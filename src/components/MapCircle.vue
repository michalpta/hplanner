<template>
  <l-circle
    :lat-lng="center"
    :radius="radius"
    :color="color"
    :fill-color="color"
    :className="'circle-progress'"
    ref="circle"
  />
</template>

<script>
import { LCircle } from "vue2-leaflet";
import { getRequestsForCity } from "../firebase.js";
import { setTimeout } from "timers";

export default {
  components: {
    LCircle
  },
  props: ["center", "name"],
  data() {
    return {
      color: "red",
      radius: 90000,
      hits: 0
    };
  },
  mounted() {
    if (this.name) {
      getRequestsForCity(this.name)
        .onSnapshot(snapshot => {
          if (snapshot.docs.length !== this.hits) {
            this.hits = snapshot.docs.length;
            this.radius = this.radius * 2;
            setTimeout(() => (this.radius = this.radius / 2), 500);
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
.circle-progress {
  background: linear-gradient(to right, #9b59b6 50%, #34495e 50%);
  transition-property: stroke, fill, d;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}

.circle-progress:before {
  border-radius: 0 100% 100% 0 / 50%;
  content: "";
  display: block;
  height: 100%;
  margin-left: 50%;
  -webkit-transform-origin: left;
  transform-origin: left;

  background: #34495e;
  -webkit-transform: rotate(-270deg);
  transform: rotate(-270deg);
}
</style>
