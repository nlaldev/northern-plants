<template>
  <nav class="nav">
    <img src="../assets/logo.png" class="nav__image" alt="Nav logo" />
    <i class="fas fa-bars  nav__hamburger" @click="toggleMenu"></i>
    <div
      class="nav__links"
      :class="{ active: isBurgerActive, notActive: !isBurgerActive }"
    >
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
  data() {
    return {
      isBurgerActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/global.scss";
@keyframes slideIn {
  from {
    margin-left: -200px;
  }
  to {
    margin-left: 0;
  }
}
.nav {
  height: 80px;
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
  &__hamburger {
    font-size: 35px;
    color: $lightBlue;
    @include desktop {
      display: none;
    }
  }
  .active {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 80px;
    left: 0;
    width: 160px;
    height: 350px;
    background: $darkBlue;
    border-radius: 0 5px 5px 0;
    z-index: 1;
    animation: slideIn 0.3s linear;
  }
  &__links {
    display: none;
    @include desktop {
      display: flex;
    }
  }
  &__link {
    color: $white;
    text-decoration: none;
    padding: 5px 0;
    &--active {
      border-bottom: 5px solid $plantGreen;
    }
    @include desktop {
      color: $black;
      margin: 0 5px;
    }
  }
}
</style>
