# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Setup the project](#setup-the-project)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### Setup the project

This project is set up as a monorepo using [Lerna](https://lerna.js.org/) with the following modules:

- [@fem-fae/tokens](./packages/tokens/): Handles all the tokens and common mixins used in the application
- [@fem-fae/static-website](./apps/static-website/): Handles the site markup. This project is used for the mertoring sessions to explain the pages structure

To run it locally it should be run the following scripts from the root of the repo:

```shell
$ npm i
```

Ensure the `tokens` to be build before running the site:

```shell
$ npx lerna run build
```

Run the site:

```shell
$ npx lerna run dev
```

**Note**: The process will change once the repo has different projects (Next.js) and (Nuxt) for the different teams.
