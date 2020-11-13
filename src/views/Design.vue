<template>
  <div class="design" data-aos="fade">
    <h1 class="design__heading">DESIGN</h1>
    <div class="design__content">
      <div class="design__content-wrapper design__content-top">
        <img src="../assets/design.jpg" alt="" class="design__image" />
        <p
          class="design__paragraph design__paragraph-quote"
          data-aos="fade-left"
        >
          “Northern Plants design team helped us transform our living and work
          areas. We are very happy with their services”
          <br />
          <br />
          <span class="design__paragraph-quote-name">
            -Krillin, Loyal Customer
          </span>
        </p>
      </div>
      <div class="design__content-wrapper design__content-bottom ">
        <p class="design__paragraph" data-aos="fade-right">
          perum rerore volor rerum hilligent odit, ut ab invendis et lacidestrum
          volor maximax imusciis dolum quia disco si veliquam nobit escide num
          ut ullenita sit fugit landi rest volorehene andam quam velit,
          ilictiunt volupta corest, si dolupti onseriat lam ne sapitaquis
          dignatia sa non re eos volor simus doctor. ilictiunt volupta corest,
          simus doctor.
        </p>
        <img
          src="../assets/t-shirt2.png"
          alt=""
          class="design__image"
          data-aos="fade"
        />
      </div>
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
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__content-wrapper {
    @include tablet {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__content-bottom {
    @include tablet {
      margin: 70px 0;
    }
  }
  &__image {
    width: 100%;
    @include tablet {
      width: 50%;
    }
  }
  &__paragraph {
    @include paragraph;
    @include tablet {
      width: 45%;
      margin: 0;
    }
  }
  &__paragraph-quote {
    @include paragraph;
    @include montBold;
    color: $darkBlue;
    font-style: italic;
    font-size: 20px;
    @include tablet {
      font-size: 24px;
    }
    @include desktop {
      font-size: 32px;
    }
  }
  &__paragraph-quote-name {
    font-style: normal;
    @include montBold;
    color: $darkBlue;
  }
}
</style>
