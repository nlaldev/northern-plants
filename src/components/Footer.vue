<template>
  <footer class="footer">
    <p class="footer__text">Northern Plants &copy; 2020</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.footer {
  height: 50px;
  background: $darkBlue;
  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    color: white;
  }
}
</style>
