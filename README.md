# AppEngCW

(ThIs Is A tEsT tO sEe If My GiThUb WoRkS)
Repository for my AppEng 2021/22 CW

## Coursework

The official document for the coursework is [here](https://docs.google.com/document/d/1RDTVmu2gZ1a4BdZvq0v8Nr5zzX1xmxtCIHfwmGdTwNU/edit)

### Core capabilities

* Maintain ~~an inventory of items for sale, and~~ stock levels (SEMI-COMPLETED. Still need to maintain stock levels!)
* ~~Shopping cart~~ (COMPLETED)
* ~~Client can place multiples of each brick in their cart for purchase~~ (COMPLETED)
* Simulated checkout (not in any detail, assume the payment gateway is a 'black box' which handles all card details etc), and update stock levels

-----

## Key features and how to use them

* The features that are included in my website are;
  * You can add items to the basket.
  * You can go through to the basket and add or remove items.

## Design and Implementation Rationale

* I will include the design and implementation rationale here.
* (In all honesty I didn't know what to put here and forgot to ask)

## Unfinished and future work

* I plan to have the Delivery & Contact forms fully work and save the users information that they provide.
* I plan to implement a database.
* I plan to add a stock level system.
* I plan to add Kits to the kits page in the future.
  * When you add a kit to the basket it will add all of the bricks needed.
* Finish the design as the website doesn't look exactly how I want it too.

### Planned work/ToDo List

* Have some sort of indication to let the user know that something has been added to the basket.

* ~~Create a user input for the amount of a bricks that they would like.~~
  * ~~Create an input box.~~
    * Have it recognise the input if input box is clicked out of or `Enter` key pressed.
  * Store the user input of the box as a variable.
  * ~~Don't have multiple of the same brick in the basket, this is inefficient. Have a number next to each brick that is a user input and shows the number of the brick(s) they want.~~
    * Need to take user input and times the price by the input (`price * userInput = totalPriceOfBrick`).

* Show total price of items in the basket.
  * Show price of 1 individual brick next to each brick and then the total for that individual brick dependent on the user input. (The user can then change this in the basket if they want to change their mind).
  * To show total price of all items in basket add totalPriceOfBrick for each item in basket together. (`totalPriceOfBrick1 + totalPriceOfBrick2 ... = totalBasketPrice`).

* Create a database and store bricks in it.
  * Take pictures of the list of bricks in the instruction manual that I have.
  * Connect the db to the client
