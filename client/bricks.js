'use strict';

/** Imports functions from modules.mjs */
import { removeContent, showBricks } from './modules.mjs';


/** Creates an empty JSON object, an empty array and initialises the global variable "data" */
const el = {};
const basket = [];
let data;


// Fetches the brick data from bricks.mjs via showBricks.js and specifies the area for "removeContent"
async function loadBricks(req, res) {
  const response = await fetch('/bricks');
  if (response.ok) {
    data = await response.json();
  } else {
    data = [{ name: 'Could not load bricks. Please try again!' }];
  }
  removeContent(el.bricks);
  showBricks(data, el.bricks);
}

// Loop over brickInfo and find where the id matches. If it matches return it, if not return undefined.
function lookUpObject(id) {
  for (const obj of data) {
    if (obj.id == id) {
      return obj;
    }
  }
}

// Create a function that removes all the elements on the page and replaces them with elements for the basket.
function replaceBrickElems() {
  const where = document.getElementById('bricks');

  const filter = document.getElementById('filter');
  filter.remove();

  const bricks = document.getElementById('bricks');
  bricks.innerHTML = '';

  console.log('basket', basket);
  // Adding the basket elements to the page using data from localStorage
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
    bsktQty.placeholder = 1;
    bsktQty.dataset.id = object.id;
    li.append(bsktQty);

    where.append(li);
  }
}

// Adding the basket to local storage
function storeLocal(item) {
  // Build an object to be stored in the array
  const itemID = item.target.dataset.id;
  const img = item.target.image;
  const name = item.target.name;
  const colour = item.target.colour;
  const quantity = 1; // TODO: Need to change this to become a user input
  const obj = { itemID, name, img, colour, quantity };
  basket.push(obj);
  const stringifiedBasket = JSON.stringify(basket);
  localStorage.setItem('basket', stringifiedBasket);

  /**
     * Data that you put in localStorage should be turned into JS Object Notation data (JSON data) using the JSON.stringify(data) method.
     * When you retrieve it from localStorage it is therefore a JSON string.
     * You convert that back into an object with const data = JSON.parse(stringFromLocalStorage).
     * Thereafter data is the reconstructed object that you originally stringified
     */
}

/** Put items that the user clicks into an array to act as a localStorage basket so that the information can then be retrieved and used to create the proper basket */
function loadBasket() {
  const items = localStorage.getItem('basket');
  console.log('items', items);
  const bsk2 = JSON.parse(items); /** Turns the stringified data back to regular JSON data */
  console.log('Bsk2', bsk2);
  if (items != null) {
    basket.push(...bsk2);
  }
}

/** Gets hold of the elements from bricks.html */
function prepareHandles() {
  el.bricks = document.querySelector('#bricks');
  el.bsktBtn = document.querySelector('#bsktBtn');
}

/** Prepares eventListeners for the page */
function prepareListeners() {
  el.bricks.addEventListener('click', storeLocal);
  el.bsktBtn.addEventListener('click', replaceBrickElems);
}

/** This is called by the eventListener at bottom of file. Calls other functions */
function pageLoaded() {
  prepareHandles();
  loadBricks();
  prepareListeners();
  loadBasket();
}

window.addEventListener('load', pageLoaded);
