<template>
  <section class="map__wrapper">
    <transition name="fade">
      <div class="map__loading" v-if="isLoading">
        <img src="./../assets/images/loading.svg" alt="Loading..." />
      </div>
    </transition>
    <h2 class="map__header">Click anywhere on the map to see all of the available cabs in this area!</h2>
    <gmap-map class="map" :center="center" :zoom="12" @click="(e) => getCabs(e)">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
        :icon="{ url: require('./../assets/images/taxi.png'), scaledSize: {width: 50, height: 50},}"
        class="map__marker"
      ></gmap-marker>
    </gmap-map>
  </section>
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
  width: 100%;
  height: 100%;

  &__header {
    font-weight: 400;
    margin-bottom: 20px;
  }

  &__wrapper {
    margin-top: 60px;
    position: relative;
    width: 1000px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__loading {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(white, 0.8);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>