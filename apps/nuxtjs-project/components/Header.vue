<template>
    <header class="header">
      <section class="header__top">
        <img
          class="header__logo"
          src="../assets/icons/logo.svg"
          alt="Audiophile logo"
        >
        <nav class="header__nav nav" aria-label="Main page navigation">
          <button class="nav__toggle">
            Toggle main navigation
          </button>
          <ul class="nav__list">
            <li class="nav__list-item">
              <NuxtLink to="" class="nav__link link__primary">Home</NuxtLink>
            </li>
            <li class="nav__list-item">
              <NuxtLink to="" class="nav__link link__primary">Headphones</NuxtLink>
            </li>
            <li class="nav__list-item">
              <NuxtLink to="" class="nav__link link__primary">Speakers</NuxtLink>
            </li>
            <li class="nav__list-item">
              <NuxtLink to="" class="nav__link link__primary">Earphones</NuxtLink>
            </li>
          </ul>
        </nav>
        <button class="header__cart">
          Add to cart
        </button>
      </section>
    </header>
</template>