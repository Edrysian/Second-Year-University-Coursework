'use strict';

/** Imports functions and variables from modules.mjs */
import { basket, removeContent, brickElems, storeLocal, loadBasket } from './modules.mjs';


/** Creates an empty JSON object, an empty array and initialises the global variable "data" */
const el = {};
let data;
let count = 0;


/** Fetches the brick data from bricks.mjs and specifies the area for removeContent() and brickElems() which are imported from modules.mjs */
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
  brickElems(data, el.bricks);
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
