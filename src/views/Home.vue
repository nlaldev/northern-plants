<template>
  <div class="home">
    <header class="header">
      <div class="header__overlay"></div>
      <div class="header__text" data-aos="fade" data-aos-duration="1000">
        <h1 class="header__heading">Northern Plants</h1>
        <h2 class="header__subheading">Nature Meets Design</h2>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.home {
  .header {
    background: url("../assets/hero.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__overlay {
      position: absolute;
      z-index: -2;
      width: 100%;
      height: 100%;
      background: rgba($color: $darkBlue, $alpha: 0.9);
    }
    &__text {
      margin-left: 4%;
      padding: 35vh 0;
    }
    &__text > * {
      color: $white;
    }
    &__heading {
      font-size: 3rem;
      @include tablet {
        font-size: 4.5rem;
      }
      @include desktop {
        font-size: 6rem;
      }
    }
    &__subheading {
      margin-top: 50px;
      font-size: 1.5rem;
    }
  }
}
</style>
