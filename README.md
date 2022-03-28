# AppEngCW

Repository for my AppEng 2021/22 CW

## ToDo List

* ~~Build a server to be able to host the client~~

* ~~Build the client folder~~
  * ~~Have index.js and similar HTML and CSS files~~

* Create API
  * Think about and design an API for discovering what bricks are for sale
  * Start to implement API
  * Create page(s) that use API

* ~~Connect server and client~~

* ~~Create basket for user to view selected items.~~

* Have an "Add to Basket" button that the user can click instead of just clicking the item somewhere.
  * This will mean that the user knows where to click to add an item to the basket.
  * Have an alert come up to let the user know that something has been added to the basket?

* Create a user input for the amount of a bricks that they would like.
  * Create an input box.
    * Have it recognise the input if input box is clicked out of or `Enter` key pressed.
  * Store the user input of the box as a variable.
  * Don't have multiple of the same brick in the basket, this is inefficient. Have a number next to each brick that is a user input and shows the number of the brick(s) they want.
    * Need to take user input and times the price by the input (`price * userInput = totalPriceOfBrick`).

* Show total price of items in the basket.
  * Show price of 1 individual brick next to each brick and then the total for that individual brick dependent on the user input. (The user can then change this in the basket if they want to change their mind).
  * To show total price of all items in basket add totalPriceOfBrick for each item in basket together. (`totalPriceOfBrick1 + totalPriceOfBrick2 ... = totalBasketPrice`).

* Create a database and store bricks in it.
  * Take pictures of the list of bricks in the instruction manual that I have.
  * Connect the db to the client

## Coursework

The official document for the coursework is [here](https://docs.google.com/document/d/1RDTVmu2gZ1a4BdZvq0v8Nr5zzX1xmxtCIHfwmGdTwNU/edit)

### Core capabilities

* Maintain ~~an inventory of items for sale~~, and stock levels (SEMI-COMPLETED. Still need to maintain stock levels!)
* ~~Shopping cart~~ (COMPLETED)
* Client can place multiples of each brick in their cart for purchase
* Simulated checkout (not in any detail, assume the payment gateway is a 'black box' which handles all card details etc), and update stock levels

### Additional Features

* Search/filter by colour, type, size, etc
* Customers can place orders for out of stick bricks so that the company know what to order
* Each brick and kit has its own web page with a unique URL
* Model kits affect overall shop stock, but can be added to the cart as single items
* Customers can design their own kits by specifying brick types and quantities and uploading an instruction file for others to use when building
* Loyalty program (the more you buy, the less you pay, or a membership programme where paying members get a percentage off)

### What the coursework needs to cover

* You are to specify and construct this tool using a combination of HTML, CSS, and JavaScript; the user interface must run in a web browser.
* You must not use frameworks or UI template engines (e.g. ejs, bootstrap, vue.js, angular, react, jquery etc...). You must use vanilla js, HTML5 and CSS. HTML5 templates are fine.
* You are allowed to use ExpressJS and non-ui npm libraries. If in doubt, check with lecturers.
* **IF** a database is required, you must only use services available on your VM (i.e. SQLite, Postgres and MySQL - you may not use external DB services or rely on us installing your favourite DB when marking).
* The server must launch with `npm start`
  * When the server stats on the test machine, it must be reachable via HTTP on port 8080.
  * If your server requires a configuration step, this must be achieved via the command `npm run setup` and documented in the README file.
  * The only manual steps they will undertake are setting IDs and passwords in the config files.
* If the server doesn't start, they will assess the work based on the source code without the benefit of seeing it run.
* **You must include a README.md file** that
  * explains key features & how to use them
  * *details your design and implementation rationale* and
  * lists unfinished and future work

### Lecturer Notes

* This individual work
* If you need help you should:
  * Use class/online time to ask your tutor
  * Discuss the problem with your peers (it's ok to discuss, just **don't work together on a shared solution**).
* Your task is to show (through your work) the extent to which you have met the *learning outcomes* for the module, which are:
  * Design, implement, test and evaluate applications that use the techniques and tools of contemporary software engineering
  * Critically examine programming paradigms, and *formulate arguments as to why a particular approach may be appropriate for a given task*.
  * Identify industry best practices in application design (e.g. client, server and API layers).

-----

## Key features and how to use them

* I will include the features of my website and how to use them here.

## Design and Implementation Rationale

* I will include the design and implementation rationale here.

## Unfinished and future work

* I will mention any unfinished work or work that I would like to have completed here.

### Planned work

* Login button - top left
* ~~Drop down menus - top middle~~ Don't do drop down menu's, just have everything visible as it can become tiresome.
  * Our kits
  * Individual Bricks
  * Containers - to store bricks in
* Set square for each brick
* ~~Image of brick~~ COMPLETED!
* Quantity entry box
  * Add to basket "quantity"
* Stock level
* Basket access - top left
