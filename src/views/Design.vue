<template>
  <div class="design">
    <h1 class="design__heading">DESIGN</h1>
    <div class="design__content">
      <img src="../assets/design.jpg" alt="" class="design__image" />
      <p class="design__paragraph-quote">
        “Northern Plants design team helped us transform our living and work
        areas. We are very happy with their services”
        <br />
        <br />
        -Krillin, Loyal Customer
      </p>
      <p class="design__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        necessitatibus mollitia aut eum error eveniet unde. Doloremque corporis
        hic ad cumque repudiandae dolores soluta! Voluptatem obcaecati dolor
        reprehenderit. Alias, quaerat! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Harum, necessitatibus mollitia aut eum error eveniet
        unde. Doloremque corporis hic ad cumque repudiandae dolores soluta!
        Voluptatem obcaecati dolor reprehenderit. Alias, quaerat!
      </p>
      <img src="../assets/t-shirt2.png" alt="" class="design__image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Design",
};
</script>

<style lang="scss">
@import "../styles/global.scss";

.design {
  padding: $pagePadding;
  &__heading {
    @include pageHeading;
  }
  &__content {
    @include tablet {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__image {
    width: 100%;
    @include tablet {
      max-width: 300px;
    }
    @include desktop {
      max-width: 600px;
    }
  }
  &__paragraph-quote {
    @include paragraph;
    @include montBold;
    font-style: italic;
    color: $darkBlue;
    @include tablet {
      width: 50%;
    }
    @include desktop {
      font-size: 32px;
    }
  }

  &__paragraph {
    @include paragraph;
    @include tablet {
      width: 50%;
    }
  }
}
</style>
