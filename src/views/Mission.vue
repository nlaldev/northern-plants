<template>
  <div class="mission" data-aos="fade">
    <h1 class="mission__heading">MISSION</h1>
    <img src="../assets/mission.jpg" alt="Mission" class="mission__image" />
    <section class="mission__text" data-aos="fade">
      <p class="mission__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos
        cupiditate delectus at magnam. Illo laudantium et sit, inventore ea
        harum officia impedit sint sequi provident, exercitationem aspernatur
        atque repellat.
        <br />
        <br />
        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Maecenas nec odio et ante alter tincidunt tempus.
      </p>
      <p class="mission__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos
        cupiditate delectus at magnam. Illo laudantium et sit, inventore ea
        harum officia impedit sint sequi provident, exercitationem aspernatur
        atque repellat.
        <br />
        <br />
        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Maecenas nec odio et ante alter tincidunt tempus.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Mission",
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.mission {
  padding: $pagePadding;
  &__heading {
    @include pageHeading;
  }
  &__image {
    width: 100%;
    @include tablet {
      margin: 5vh 0;
    }
  }
  &__text {
    margin: 50px 0;
    @include tablet {
      display: flex;
      justify-content: space-between;
    }
  }
  &__paragraph {
    @include paragraph;
    @include tablet {
      width: 45%;
    }
  }
}
</style>
