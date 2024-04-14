# DrinkIsland

A DrinkIsland egy webalkalmazás, amely koktél recepteket, 
hozzávalókról érdekességeket és egyéb témához tartozó funkciókat kínál.

## Indítás

Kövesd ezeket a lépéseket a projekt lokális futtatásához.

### Előfeltételek

Győződjön meg róla, hogy a következő szoftverek telepítve vannak a gépén:

- [Node.js](https://nodejs.org/) (a telepítéssel együtt a npm is feltelepül)
- [Angular CLI](https://cli.angular.io/)

### Telepítés
Miután klónoztad a projektet, lépj a gyökér könyvtárába, 
telepítsd a függőségeket:

```bash
# Angular telepítse
npm i

# Ng-Bootstrap telepítése
ng add @ng-bootstrap/ng-bootstrap

# Futtatás
ng serve -o

#Adatbázis létrehozása
create database drinkisland;

#táblák létrehozása (Laravel)
php artisan migrate

#adatok feltöltése a táblákba
adatok.sql feltöltése az sql adatbázisba

#Futtatás
php artisan serve
