<template>
  <gmap-map class="map" :center="center" :zoom="12" @click="(e) => getCabs(e)">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GoogleMap",
  data: function() {
    return {
      center: { lat: 51.506287, lng: -0.127788 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  computed: { ...mapState(["isLoading", "cabs"]) },

  watch: {
    cabs() {
      this.renderMarkers();
    }
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    renderMarkers() {
      this.markers = [];
      this.cabs.Operators.OperatorList.map(operator => {
        const { Longitude, Latitude } = operator;
        this.markers.push({ position: { lat: Latitude, lng: Longitude } });
      });
    },
    getCabs(e) {
      const { lat, lng } = e.latLng;

      this.$store.dispatch("getCabs", { lat: lat(), lon: lng() });
    }
  }
};
</script>

<style lang="scss">
.map {
  margin-top: 100px;
  width: 1000px;
  height: 600px;
}
</style>