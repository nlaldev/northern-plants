<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./styles/global.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $black;
}
</style>
