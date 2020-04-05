<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>


<script>
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>
<style lang="scss">
.app {
  width: 100%;
  height: 100%;
}
</style>
