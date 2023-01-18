<template>
    <section class="hero">
      <div class="hero__top">
        <picture class="hero__picture">
          <source
            srcset="../assets/images/desktop/image-hero.jpg"
            media="(min-width: 1440px)"
          >
          <source
            srcset="../assets/images/tablet/image-hero.jpg"
            media="(min-width: 768px)"
          >
          <img
            class="hero__image"
            src="../assets/images/mobile/image-hero.jpg"
            alt="XX99 Mark 2 Headphones Image"
          >
        </picture>
      </div>
      <div class="hero__content">
        <h1 class="hero__title">
          <span class="hero__eyebrow">New product</span>
          XX99 Mark II Headphones
        </h1>
        <p class="hero__body">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <a href="#" class="hero__button button__primary button__primary--inverse">See product</a>
      </div>
    </section>
</template>