<template>
  <main class="cabs">
    <!-- <button v-on:click="getCabs">Search</button>
    <input v-model="lat" placeholder="lat" />
    <input v-model="lon" placeholder="lon" />-->
    <!-- <p v-if="isLoading">loading</p> -->
    <!-- <p>{{cabs}}</p> -->
    <GoogleMap />
  </main>
</template>

<script>
import GoogleMap from "@/components/GoogleMap";

export default {
  name: "Cabs",
  components: { GoogleMap }
};
</script>

<style lang="scss">
.cabs {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>