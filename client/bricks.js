'use strict';

const el = {};
const basket = [];
const purchases = [];

// Remove all of the content on the specified area
function removeContent(content) {
  while (content.firstElementChild) {
    content.firstElementChild.remove();
  }
}

// Creates the list of bricks on "bricks.html"
function showBricks(data, where) {
  for (const brick of data) {
    const li = document.createElement('li');
    li.textContent = brick.name;
    li.dataset.id = brick.id;

    const img = document.createElement('img');
    img.src = brick.image;
    img.dataset.id = brick.id;
    li.append(img);

    const name = document.createElement('p');
    name.src = brick.name;
    name.dataset.id = brick.id;
    li.append(name);

    where.append(li);
  }
}

// Fetches the brick data from bricks.mjs via showBricks.js and specifies the area for "removeContent"
async function loadBricks(req, res) {
  const response = await fetch('/bricks');
  let data;
  if (response.ok) {
    data = await response.json();
  } else {
    data = [{ name: 'Could not load bricks. Please try again!' }];
  }
  removeContent(el.bricks);
  showBricks(data, el.bricks);
}

// Create a function that removes all the elements on the page and replaces them with elements for the basket.
// Removing the brick elements from the page
function replaceBrickElems() {
  const filter = document.getElementById('filter');
  filter.remove();
  const bricks = document.getElementById('bricks');
  bricks.remove();
  getItem();
  // Adding the basket elements to the page using data from localStorage
}

// Trying to get data from localStorage to then be pushed into a new array. I will use this array of objects to create the list of items that are in the basket
function getItem() {
  console.log(basket);
}

// Adding the basket to local storage
function storeLocal(item) {
  // Build an object to be stored in the array
  const itemID = item.target.dataset.id;
  const quantity = 1;
  const obj = { itemID, quantity };
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

function loadBasket() {
  const items = localStorage.getItem('basket');
  console.log(items);
  const bsk2 = JSON.parse(items);
  console.log(bsk2);
  // TODO: Check what happens on an empty string
  basket.push(...bsk2);
}

// Gets hold of the elements from bricks.html
function prepareHandles() {
  el.bricks = document.querySelector('#bricks');
  el.basket = document.querySelector('#basket');
}

function prepareListeners() {
  el.bricks.addEventListener('click', storeLocal);
  el.basket.addEventListener('click', replaceBrickElems);
}

// This is called by the eventListener at bottom of file. Calls other functions
function pageLoaded() {
  prepareHandles();
  loadBricks();
  prepareListeners();
  loadBasket();
}

window.addEventListener('load', pageLoaded);
