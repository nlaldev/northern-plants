<template
  ><div class="plants" data-aos="fade">
    <h1 class="plants__heading">PLANTS</h1>
    <img
      src="../assets/plants.jpg"
      alt="Plants"
      class="plants__image-primary"
    />
    <section class="plants__content">
      <div class="plants__text" data-aos="fade-right" data-aos-duration="1500">
        <p class="plants__paragraph">
          dui. Phasellus nec sem in justo pellentesque facilisis. Etiam
          imperdiet imperdiet orci. Nunc nec neque.Suspendisse pulvinar, augue
          ac venenatis front condimentum, sem libero volutpat nibh, nec
          pellentesque ate velit pede quis nunc. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id
          purus. Ut varius tincidunt libero. Sunt officab orepellaudam dolorru
          ptaquis cimpor ab idist aqua ut molo officiae aut duciant fugitat
          iumque volenti untios etum quias adipsandiore recessi nvellam sit et
          adit rercium barista fugitem hitio modignis mo volorentur?
        </p>
        <br />
        <p class="plants__paragraph">
          Equiati onsenissim dolorum dolupta ssimodit reium eaquo con rem
          denisquid explace rentium as et in esequo que dita dolorep calculus
          udipita si dolorei ciistiat quostota vel ex ellaciaepuda estrum que
          pratur sunt harchitas magnam, accusci tempel ipsapernat verci aut quo
          od molecte eum que mo que es est, quibus in pres earum quissint plisto
          molore civilis et re praepre ssequia verupta que simus delluptat
          quidion ea con est, ut liqui rem et lab iniscia et dist, sundis et
          abo.
        </p>
        <br />

        <p class="plants__paragraph">
          Qui as aut utem res eos maximusci de voles et fugiatias sandist, omni
          cus magnatem ipsunt delliquat. Ferunte modit, am aborepel exerspitatum
          et am estio cum ium ipsamus mos esed et dolupta tionece rcideles aut
          debis et voluptibus eicid mo tem voluptat in rerunt vero conem di opta
          que
        </p>
      </div>
      <img
        src="../assets/plants-2.jpg"
        alt="Plants-2"
        class="plants__image-secondary"
        data-aos="fade-left"
        data-aos-duration="1500"
      />
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
  padding: $pagePadding;
  &__heading {
    @include pageHeading;
  }
  &__image-primary {
    width: 100%;
  }
  &__image-secondary {
    width: 65%;
    max-width: 500px;
    transform: rotate(90deg);
    @include desktop {
      transform: rotate(0);
      width: 50%;
    }
  }
  &__content {
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include desktop {
      margin: 50px 0;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
    }
  }
  &__text {
    @include desktop {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  &__paragraph {
    @include paragraph;
    @include desktop {
      padding-right: 5%;
      margin: 0;
    }
  }
}
</style>
