<template>
  <div class="services">
    <h1 class="services__heading">SERVICES</h1>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.services {
  padding: $pagePadding;
  &__heading {
    @include pageHeading;
  }
}
</style>
