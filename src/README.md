# Slutprojekt - Utveckling av Webbapplikationer och Agil utveckling

## Arbetssätt

Samla era erfarenheter från Kanban, Scrum och diskussionerna av Modern Agile och kom överens i gruppen vilka delar och hur ni ska inkorporera detta i erat arbete. Dokumentera vad ni kommer överens om i README.md i erat repository.


## Instruktioner
Ni ska bygga en FrontEnd till en färdig BackEnd.
BackEnden finns på följande länk [https://github.com/zocom-david-lundholm/webshop-rest-api](https://github.com/zocom-david-lundholm/webshop-rest-api)
!!! URL 404 då läraren i kursen tagit bort tillgång till API. Använder lokal API.

Forka detta repo och redigera README.md.

## SINUS Webshop

SINUS Webshop är en onlinebutik som säljer skateboards och tillbehör.

Webshoppen ska ha 3 olika lägen
* Anonym besökare
* Inloggad Kund
* Inloggad Admin

### Anonym besökare
Det ska finnas en `registrerings`-view med ett registreringsformulär

### Inloggad Kund
Det ska finnas en `My Account`-view med information om ditt konto och din orderhistorik

### Inloggad Admin
Det ska finnas en `Admin Area`-view med ett CRUD-gränssnitt för alla produkter

### Övriga Views och Features
* En produktlista view
* En utchecknings view 
* En enstaka produkt (view eller modal)
* En kundkorg (egen view eller modal)
* Inloggningsformulär (egen view eller modal)


### API Specifikation

| Resurs | Metod | Detaljer |
| ------ | ------ | ------ |
| /api/auth/ | POST | Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header. |
| /api/register/ | POST | Registrerar en user enligt User-modellen. |
| /api/products/ | GET | Returnerar en lista på samtliga produkter. |
| /api/products/:id | GET | Returnerar en enstaka produkt. |
| /api/products/ | POST | Skapar en ny produkt, se produkt-modell. Enbart tillgänglig för admins |
| /api/products/:id | PATCH | Uppdaterar produkt, se produkt-modell. Enbart tillgänglig för admins |
| /api/products/:id | DELETE | Tar bort en produkt med :id. Enbart tillgänglig för admins |
| /api/orders | GET | Returnerar en lista på samtliga ordrar för admins, och ägda orders för inloggad användare. |
| /api/orders | POST | Skapar en ny order, se order-modell. |

### Datamodeller

#### Product

```javascript
 {
    _id: '39y7gbbZk1u4ABnv',
    title: 'Gretas Fury',
    price: 999,
    shortDesc: 'Unisex',
    longDesc: 'Skate ipsum dolor sit amet...',
    imgFile: 'skateboard-greta.png'
} 
```

#### Order
```javascript
 {
    _id: 123,
    timeStamp: Date.now(), 
    status: 'inProcess',
    items: [ <productId1>, <productId2>, ... ],
    orderValue: 999
} 
```

#### User
```javascript
 {
    _id: '6b521d3f-3d15...' // add server side
    email: 'johan.kivi@zocom.se',
    password: '$$$hashed password$$$',
    name: 'Johan Kivi',
    role: 'admin', // or customer

    adress: {
        street: 'Tokitokvägen 3',
        zip: '123 45',
        city: 'Tokberga'
    },
    orderHistory: [ orderId1, orderId2, ... ]
} 
```



## Projektmetodik
```
Följer Kanban.
Kanban är en metod för att hantera kunskapsarbete med betoning på "just in time"-leveranser 
utan överbelastning av gruppmedlemmarna. 
I denna process visualiseras uppgiften för deltagarna så att de kan se vad som behöver göras. 
Gruppmedlemmarna tar sedan arbete från denna backlogg.
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
