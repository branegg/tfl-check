<template>
  <header class="header">
    <NavBar />
  </header>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "my-header",
  components: { NavBar }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px -10px 10px -5px rgba($mint, 0.3);
}
</style>