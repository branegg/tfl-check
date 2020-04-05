<template>
  <nav class="nav">
    <router-link class="nav__item" to="/">Home</router-link>
    <router-link class="nav__item" to="/about">About</router-link>
    <router-link class="nav__item" to="/cabs">Cabs</router-link>
  </nav>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  &__item {
    color: $blue;
    font-size: 20px;
    font-family: Nunito;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    &::after {
      content: "";
      height: 2px;
      width: 0%;
      background-color: $mint;
      transition: all 0.15s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>