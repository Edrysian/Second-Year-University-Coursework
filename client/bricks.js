'use strict';

/** Imports functions and variables from modules.mjs */
import { basket, removeContent, brickElems, loadBasket, addLocal, rmvLocal } from './modules.mjs';


/** Creates an empty JSON object, an empty array and initialises the global variable "data" */
const el = {};
let data;
let checkoutElems = false;


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
  if (checkoutElems === false) {
    checkoutElems = true;
    const a = document.createElement('a');
    a.href = 'checkout.html';

    const purchase = document.createElement('li');
    purchase.textContent = 'Checkout';
    a.append(purchase);

    const header = document.getElementById('hdr');
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

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.dataset.id = object.id;
    addBtn.addEventListener('click', addLocal);

    li.append(addBtn);

    const bsktQty = document.createElement('input');
    bsktQty.placeholder = obj.quantity;
    bsktQty.dataset.id = object.id;
    li.append(bsktQty);

    const rmvBtn = document.createElement('button');
    rmvBtn.textContent = 'Remove';
    rmvBtn.dataset.id = object.id;
    rmvBtn.addEventListener('click', rmvLocal);

    li.append(rmvBtn);

    where.append(li);
  }
  console.log('basket', basket);
}

/** Gets hold of the elements from bricks.html */
function prepareHandles() {
  el.bricks = document.querySelector('#bricks');
  el.bsktBtn = document.querySelector('#bsktBtn');
}

/** Prepares eventListeners for the page */
function prepareListeners() {
  el.bsktBtn.addEventListener('click', replaceBrickElems);
}

/** This is called by the eventListener at bottom of file. Calls other functions */
function pageLoaded() {
  loadBricks();
  loadBasket();
  prepareHandles();
  prepareListeners();
}

window.addEventListener('load', pageLoaded);
