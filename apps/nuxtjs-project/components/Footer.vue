<template>
  <footer class="footer footer--margin">
    <NuxtLink to="/">
      <img
        class="footer__logo"
        src="../assets/icons/logo.svg"
        alt="Audiophile logo"
      />
    </NuxtLink>
    <nav class="footer__nav nav" aria-label="Footer page navigation">
      <NavigationElements :is-mobile="false" />
    </nav>
    <p class="footer__body">
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we’re open 7 days a week.
    </p>
    <p class="footer__bottom">Copyright 2021. All Rights Reserved</p>
    <ul class="footer__social social">
      <li class="social__item">
        <NuxtLink
          to="https://www.facebook.com/"
          class="social__link social__icon social__icon--facebook"
          >Facebook</NuxtLink
        >
      </li>
      <li class="social__item">
        <NuxtLink
          to="https://twitter.com/"
          class="social__link social__icon social__icon--twitter"
          >Twitter</NuxtLink
        >
      </li>
      <li class="social__item">
        <NuxtLink
          to="https://instagram.com/"
          class="social__link social__icon social__icon--instagram"
          >Instagram</NuxtLink
        >
      </li>
    </ul>
  </footer>
</template>
<style lang="scss">
@use "../assets/styles/components/footer.scss";
@use "../assets/styles/components/social";
</style>
