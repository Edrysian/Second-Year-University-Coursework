'use strict';

/** Imports functions and variables from modules.mjs */
import { basket, removeContent, showBricks, storeLocal, loadBasket } from './modules.mjs';


/** Creates an empty JSON object, an empty array and initialises the global variable "data" */
const el = {};
// export const basket = [];
let data;
let count = 0;


/** Fetches the brick data from bricks.mjs via showBricks.js and specifies the area for removeContent() and showBricks() which are imported from modules.mjs */
async function loadBricks() {
  const response = await fetch('/bricks');
  if (response.ok) {
    data = await response.json();
  } else {
    data = [{ name: 'Could not load bricks. Please try again!' }];
  }
  if (el.bricks != null) {
    removeContent(el.bricks);
  }
  showBricks(data, el.bricks);
}

/** Loop over brickInfo and find where the id matches. If it matches return it, if not return undefined. */
function lookUpObject(id) {
  for (const obj of data) {
    if (obj.id === id) {
      return obj;
    }
  }
}

/** Create a function that removes all the elements on the page and replaces them with elements for the basket & Checkout. */
function replaceBrickElems() {
  const where = document.getElementById('bricks');

  const brickFilter = document.getElementById('brickFilter');
  if (brickFilter != null) {
    brickFilter.remove();
  }

  const bricks = document.getElementById('bricks');
  if (bricks !== null) {
    bricks.textContent = '';
  }
  /** Stops code creating multiple copies of the same element */
  if (count < 1) {
    count = 2;
    const a = document.createElement('a');
    a.href = 'checkout.html';

    const purchase = document.createElement('li');
    purchase.textContent = 'Checkout';
    a.append(purchase);

    const header = document.getElementById('header');
    if (bricks.textContent === '') {
      header.append(a);
    }
  }
  /** Adding the basket elements to the page using data from localStorage */
  for (const obj of basket) {
    const object = lookUpObject(obj.itemID);

    const li = document.createElement('li');
    li.textContent = object.name;

    const img = document.createElement('img');
    img.src = object.image;
    img.dataset.id = object.id;
    li.append(img);

    const name = document.createElement('p');
    name.src = object.name;
    name.dataset.id = object.id;
    li.append(name);

    const colour = document.createElement('li');
    colour.textContent = object.colour;
    colour.dataset.id = object.id;
    li.append(colour);

    const bsktQty = document.createElement('input');
    bsktQty.placeholder = obj.quantity;
    bsktQty.dataset.id = object.id;
    li.append(bsktQty);

    where.append(li);
  }
  console.log('basket', basket);
}

// /** Adding the basket to local storage */
// function storeLocal(item) {
//   /** Build an object to be stored in the array */
//   const itemID = Number(item.target.dataset.id);
//   const quantity = 1; // TODO: Need to change this to become a user input
//   const search = basket.find(item => item.itemID === itemID); /** Compares the item to all items in the basket to see if it already exists */

//   if (search) { /** If the item is already in the basket this adds the current quantity to the already existing quantity */
//     console.log('Added');
//     search.quantity += quantity;
//   } else { /** If the item is not already in the basket, this creates an object for the item and updates the basket to include the new object */
//     const obj = { itemID, quantity };
//     console.log('Added to basket');
//     basket.push(obj);
//   }
//   /** Stringify the basket so that it can be stored in local storage */
//   const stringifiedBasket = JSON.stringify(basket);
//   localStorage.setItem('basket', stringifiedBasket);

//   /**
//      * Data that you put in localStorage should be turned into JS Object Notation data (JSON data) using the JSON.stringify(data) method.
//      * When you retrieve it from localStorage it is therefore a JSON string.
//      * You convert that back into an object with const data = JSON.parse(stringFromLocalStorage).
//      * Thereafter data is the reconstructed object that you originally stringified
//      */
// }

/** Put items that the user clicks into an array to act as a localStorage basket so that the information can then be retrieved and used to create the proper basket */
// function loadBasket() {
//   const items = localStorage.getItem('basket');
//   console.log('items', items);
//   const bsk2 = JSON.parse(items);
//   console.log('Bsk2', bsk2);
//   if (items != null) {
//     basket.push(...bsk2);
//   }
// }

/** Gets hold of the elements from bricks.html */
function prepareHandles() {
  el.bricks = document.querySelector('#bricks');
  el.bsktBtn = document.querySelector('#bsktBtn');
  // el.addItem = document.querySelector('#addItem');
  // el.addToBskt = document.querySelector('#addToBskt');
  // console.log('el.addToBskt', el.addToBskt);
}

// function addBsktLstnr() {
//   const child = el.bricks.querySelector('.addItem');
//   console.log('child', child);
//   console.log('el.addItem', el.addItem);
//   console.log('el.bricks.firstChild', el.bricks.firstChild);
// }

/** Prepares eventListeners for the page */
function prepareListeners() {
  if (el.bricks != null) {
    el.bricks.addEventListener('click', storeLocal);
  }
  // addBsktLstnr();

  // el.addToBskt.addEventListener('click', storeLocal);
  /** NEED TO MAKE THIS ONLY GO ONTO THE BUTTONS.
   * INSTEAD OF el.bricks, IT NEEDS TO BE SOMETHING ALONG THE LINES OF
   * el.bsktBtn
   */

  el.bsktBtn.addEventListener('click', replaceBrickElems);
}

/** This is called by the eventListener at bottom of file. Calls other functions */
function pageLoaded() {
  loadBricks();
  loadBasket();
  prepareHandles();
  prepareListeners();
}

// Might have to create a new function to add event listeners to the buttons.
// Iterate over the buttons to add an Event Listener
// Need to apply event listener after buttons are created.
// Functions are called in order from top to bottom (within a function such as pageLoaded)!!!
// If need help just ask again

window.addEventListener('load', pageLoaded);
