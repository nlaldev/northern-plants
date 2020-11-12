<template>
  <nav class="nav">
    <img src="../assets/logo.png" class="nav__image" alt="Nav logo" />

    <div class="nav__links">
      <router-link
        class="nav__link"
        exact
        active-class="nav__link--active"
        to="/"
        >Home</router-link
      >
      <router-link
        class="nav__link"
        active-class="nav__link--active"
        to="/mission"
        >Mission</router-link
      >
      <router-link
        class="nav__link"
        active-class="nav__link--active"
        to="/plants"
        >Plants</router-link
      >
      <router-link
        class="nav__link"
        active-class="nav__link--active"
        to="/design"
        >Design</router-link
      >
      <router-link
        class="nav__link"
        active-class="nav__link--active"
        to="/services"
        >Services</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.nav {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
  box-shadow: 1px 6px 6px 0px rgba($black, 0.1);

  &__image {
    height: 70%;
  }

  // &__icon {
  //   font-size: 30px;
  //   @include desktop {
  //     display: none;
  //   }
  // }

  &__links {
    @include desktop {
      display: flex;
    }
  }

  &__link {
    // margin: 0 5px;
    text-decoration: none;
    padding: 5px 0;
    font-size: 8px;
    &--active {
      border-bottom: 5px solid $plantGreen;
    }
  }
}
</style>
