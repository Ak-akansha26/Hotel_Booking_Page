# Frontend Mentor - Hotel booking confirmation page solution

This is a solution to the [Hotel booking confirmation page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/hotel-booking-confirmation-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [#overview]
  - [#the-challenge]
  - [#screenshot]
  - [#links]
  - [#my-process]
  - [#built-with]
  - [#what-i-learned]
  - [#continued-development]
  - [#useful-resources]
  - [#ai-collaboration]
  - [#author]
  - [#acknowledgments]

## Overview

This is a challenge of Front-end Mentor. I take challenges to make my UI clean and to make responsive websites.
This is my 4th challenge.

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the navigation menu on smaller screens (optional JavaScript)
- Copy the Wi-Fi password to their clipboard using the copy button (optional JavaScript)

### Screenshot

![./Screenshot.jpg]

### Links

- Solution URL: [https://github.com/Ak-akansha26/Hotel_Booking_Page.git]
- Live Site URL: [https://ak-akansha26.github.io/Hotel_Booking_Page/]

## My process

I started writing HTML first then i wrote CSS and the JS. I face challenge in JS but completed it. It's not perfect solution 
but i did my best.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [https://fonts.google.com/] - For styles

### What I learned

```js
let desktopCards = document.querySelectorAll(".desktop-card .welcome-card, .desktop-card .stay-card, .desktop-card .sun-ill");

desktopCards.forEach(card => {
        card.addEventListener("click", function() {
        
             desktopCards.forEach(c => c.classList.remove("open", "sun-ill"));
            this.classList.add("open", "class-ill");
            console.log(`${this.classList[0]} activated`);
        });
    });
```

### Continued development

I would like to use CSS Grid first and try to write things where and what to use to save my time.

### AI Collaboration

- I used Google Gemini/
- I used it mostly for debugging and sometimes for solutions.
- You can use it for some function and debugging but don't use it for the font-size of font-style.
  You know better what you want to do.

## Author

- Website - [Akansha]
- Frontend Mentor - [https://www.frontendmentor.io/profile/Ak-akansha26]
