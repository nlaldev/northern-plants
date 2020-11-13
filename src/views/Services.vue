<template>
  <div class="services" data-aos="fade">
    <h1 class="services__heading">SERVICES</h1>
    <div class="services__content">
      <p class="services__paragraph">
        ent montes, nascetur ridiculus mus. Xerrum int ab iditios aut ratur re
        est que siti cusae. Dunt indigeo. Beatempor assimil ipsusda sin net, his
        sectaeprerit quam quisciis del ius elendit maximin velescium intro lam
        facese magnit etureri atiossinciis ipic tem labor quamend endiorere nus
        mincipi endictecus cones et rem derum aciis eatquib earuptatur, audi aut
        es idebita levis turehent aborepe rspictas suntiis tibusaerio mirror.
      </p>
      <p class="services__paragraph">
        Otat qui opera doluptae. Ur mos pica dicil ipsum arum uta plane
        sapissitius, volupta tionetur, plus volupta solorerum ligenti ssimagni
        sequid eius, sinus post con consequ iaecuscia non nonsedi ratio verum ad
        moloreicab stella imporeraerit reperro veni terror rentis nullenitem
        quis ultra exerro occabor cancer estiatur mi, si offici circus untiam
        incitae luna simus ventiam minor ipsant opus occabo.
      </p>
    </div>
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
  background: $offWhite;
  height: 100vh;
  @include tablet {
    padding: 15vh 5%;
  }
  &__heading {
    @include pageHeading;
  }
  &__content {
    @include tablet {
      display: flex;
      justify-content: space-between;
    }
  }
  &__paragraph {
    @include paragraph;
    @include tablet {
      width: 45%;
      margin: 0;
    }
  }
}
</style>
