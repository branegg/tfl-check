<template>
  <main class="cabs">
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