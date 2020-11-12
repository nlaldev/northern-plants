<template>
  <div class="mission">
    <h1 class="mission__heading">MISSION</h1>
    <img
      src="../assets/mission-image.jpg"
      alt="Mission"
      class="mission__image"
    />
    <section class="mission__text">
      <p class="mission__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos
        cupiditate delectus at magnam. Illo laudantium et sit, inventore ea
        harum officia impedit sint sequi provident, exercitationem aspernatur
        atque repellat.
      </p>
      <p class="mission__paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
        consequatur deserunt enim odit consectetur minima id accusantium nihil,
        officiis soluta minus magnam necessitatibus animi molestiae. Hic
        deserunt atque corrupti sunt.
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
  padding: 5%;
  &__heading {
    @include pageHeading;
  }
  &__image {
    width: 100%;
  }
  &__text {
    margin: 25px 0;
    @include tablet {
      display: flex;
    }
  }
  &__paragraph {
    @include paragraph;
  }
}
</style>
