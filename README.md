# U07RecipeApp

#### I denna uppgift ska du bygga en rudimentär applikation med ramverket Angular (version 11). Denna applikation ska fungera som en samling för recept som hämtas från ett externt API. För denna uppgift är det endast frontend och ingen backend som ska implementeras.

För inspiration se [Tasteline](https://www.tasteline.com/) och [Ica](https://www.ica.se/recept/).

## Som användare ska du:

- [ ] Kunna få en förslagslista med recept
- [ ] Kunna filtrera förslagen av recept på måltidstyp och allergener:
- [ ] Förrätt, huvudrätt eller dessert (minimum, fler måltidstyper får implementeras)
- [ ] Allergener och dietval (t.ex. gluten, nötter, vegetarian osv.), minst tre ytterligare filtreringar ska finnas med förutom förrätt, huvudrätt och dessert  
- [ ] Kunna klicka på ett recept för att se dess information (egen route)
- [ ] Kunna spara recept i en lista (recepten behöver finnas tillgängliga så länge användaren är på webbplatsen, dock ej sparas i t ex localstorage)
- [ ] Kunna visa sparade recept (egen route)
- [ ] Kunna ta bort sparade recept ur listan

## Krav

- [ ] Frontend måste implementeras i ramverket Angular (version 11)
- [ ] Nyttja ett externt API för att hämta recept-information vilken visas i applikationen, förslagsvis:
    - https://developer.edamam.com/edamam-recipe-api
    - https://www.themealdb.com/api.php
- [ ] Måste fungera på en mobil enhet, det vill säga målen ovan måste gå att utföra även på en mobil enhet

Denna uppgift har inget krav på backend utan data hämtas från externt api, men  filtreringar och sparade recept skall finnas tillgängliga i applikationen under tiden användaren använder appen utan att stänga webbläsaren. Den användardata som genereras har inga krav på att sparas efter att användaren lämnar appen.

## Extra utmaning

- [ ] Användaren kan få recept från flera olika källor (API:er)
- [ ] Användaren kan skapa egna recept
- [ ] Användaren kan lägga till ingredienser från API
- [ ] Användaren kan lägga till tillagningsinstruktioner

## Vänligen notera

*Observera att du inte bedöms på estetik eller design. Prioritera därför inte denna del innan målen för uppgiften är klara. Du bedöms endast på koden och implementation av mål och krav.*

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.
