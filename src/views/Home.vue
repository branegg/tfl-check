<template>
  <div class="home">
    <button v-on:click="getCabs">Search</button>
    <input v-model="lat" placeholder="lat" />
    <input v-model="lon" placeholder="lon" />
    <p v-if="isLoading">loading</p>
    <p>{{cabs}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data: () => ({ lat: 51.506287, lon: -0.127788 }),
  computed: { ...mapState(["isLoading", "cabs"]) },
  methods: {
    getCabs() {
      const { lat, lon } = this;
      this.$store.dispatch("getCabs", { lat, lon });
    }
  }
};
</script>
