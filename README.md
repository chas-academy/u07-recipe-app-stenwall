# U07 Recipe App

School Assignment @ Chas Academy, class FWD20

---

## Getting started

Clone repo and run:
```
$ npm install
$ npm start
```

## API

I'm using Spoonacular's API ([link](https://spoonacular.com/food-api/))

## Requirements

- [x] Be able to get a list of recipe suggestions
- [x] Be able to filter the suggestions of recipes by dish type and allergens/preferences:
  - [x] Starter, main course or dessert (minimum, more dish types may be implemented)
  - [x] Allergens/dietary preferences (eg gluten, nuts, vegetarian, etc.), at least three additional filters must be included in addition to starter, main course and dessert
- [x] Be able to click on a recipe to see its information (with its own route)
- [x] Be able to save recipes in a list (the recipes need to be available as long as the user is on the website, but not saved in eg local storage)
- [x] Be able to view saved recipes (with its own route)
- [x] Be able to delete saved recipes from the list
- [x] Frontend must be implemented in the Angular framework (version 11)
- [x] Use an external API to retrieve recipe information which is displayed in the application
- [x] Must work on a mobile device, ie the above goals must also be possible to perform on a mobile device

This task has no backend requirements. Data is retrieved from an external API, but filterings and saved recipes must be available in the application while the user is using the app without closing the browser. The user data generated has no requirement to be saved after the user leaves the app.

## Deployment

The site is deployed on Netlify: [parsley-and-sage.netlify.app](https://parsley-and-sage.netlify.app/)
## Notes

### Design

I know that we're not judged on design for this assignment, but I still wanted to make it pretty, and learn something new in the process.

I decided to take the opportunity to learn [Angular Material](https://material.angular.io/) when doing the assigmnent, and I really tried to use it as far as I could. Eg, even if I knew I could fix something easier with just css or js, I tried to make it happen with Angular Material instead (sometimes with a bit of force).

Also, as both an inspiration and an interesting extra challenge, I tried to copy the [Material Design example app Basil](https://material.io/design/material-studies/basil.html). Sometimes simplifying things, and sometimes adapting it to my liking (eg with the fonts). To be able to match Basil and use other colors than Angular Material could offer, I "hacked" my own theme with custom fonts and colors.

If I had more time, I could have made it much better. Everything is kind of half done.

### Other notes

I started this list, but it was just kind of depressing to continue. There is a lot of messy code in this project, and I'm really sorry about that. Especially the styling is a complete mess, I should have just used mixins. There are also some unused things left in the project as reference (the Edamam-model, the Interceptor and the HomeComponent).

- Dish type components:
    - I know I could have made these much more DRY by eg put the method `updateRecipeLIst()` in the service
- RecipeComponent:
    - I know that this whole component is a total mess and should probably be split up into several different components
    - I had plans on putting the bottom sheet in its own component
    - Same with the header (that I now have a copy of in the list-component), I know that it really should be in its own component
    - I’m aware that the function `openbottomsheet()` is a complete mess and written really poorly

---


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.
