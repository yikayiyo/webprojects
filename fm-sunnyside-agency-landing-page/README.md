# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![mobile](./screenshots/mobile.png)
![desktop](./screenshots/desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flex
- CSS Grid
- Mobile-first workflow

### What I learned

- Use `::before` and `border` to draw a triangle

  ```css
  border-top: 12px solid transparent;
  border-left: 12px solid transparent;
  border-right: 12px solid white;
  border-bottom: 12px solid white;
  ```

- Fix `onmouseout` bug

  #### what I want

  When I click the hamburger icon, the menu should show up. And when my pointer move into the menu items, it should show a hover effect. The menu should disappear only when my pointer move out the menu.

  #### what I did

  I added a `onmouseout` event on my menu element, but when my pointer move into its children the menu disappear which is not my favor.

  #### fix bug

  replace `onmouseout` with `mouseleave`

  #### `onmouseout` vs `onmouseleave`

  ```
  `mouseleave` and `mouseout` are similar but differ in that `mouseleave` does not bubble and `mouseout` does.
  ```

## Author

- Frontend Mentor - legao[@yikayiyo](https://www.frontendmentor.io/profile/yikayiyo)
