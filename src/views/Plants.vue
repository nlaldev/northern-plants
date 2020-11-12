<template
  ><div class="plants">
    <h1 class="plants__heading">PLANTS</h1>
    <img src="../assets/mission-image.jpg" alt="" class="plants__image" />
    <section class="plants__content">
      <div class="plants__text">
        <p class="plants__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet
          voluptatem eos quam, voluptatibus aspernatur deleniti adipisci,
          officiis distinctio fuga deserunt dolor nobis molestias, neque
          debitis! Iure totam non ratione!
        </p>
        <p class="plants__paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          soluta dolore est distinctio quis culpa, laudantium tempora totam
          iusto quasi voluptas, assumenda corrupti debitis eos minima. Atque
          dolor dolorem autem!
        </p>
        <p class="plants__paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          soluta dolore est distinctio quis culpa, laudantium tempora totam
          iusto quasi voluptas, assumenda corrupti debitis eos minima. Atque
          dolor dolorem autem!
        </p>
      </div>
      <img src="../assets/mission-image.jpg" alt="" class="plants__image" />
    </section>
  </div>
</template>

<script>
export default {
  name: "Plants",
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.plants {
  background: $offWhite;
  padding: 5%;
  &__heading {
    @include pageHeading;
  }
  &__image {
    width: 100%;
    @include tablet {
      width: 200px;
    }
  }
  &__content {
    @include tablet {
      display: flex;
      justify-content: space-between;
    }
  }
  &__text {
    @include tablet {
      width: 50%;
    }
  }

  &__paragraph {
    @include paragraph;
  }
}
</style>
