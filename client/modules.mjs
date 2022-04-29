'use strict';

export const basket = [];

/** Functions for bricks.js */

/** Remove all of the content on the specified area to make sure that the brickList can go where I have told it too */
export function removeContent(content) {
  while (content.firstElementChild) {
    content.firstElementChild.remove();
  }
}

/** Creates the list of bricks on "bricks.html" */
export function brickElems(data, where) {
  for (const brick of data) {
    const li = document.createElement('li');
    li.textContent = brick.name;
    li.dataset.id = brick.id;
    // div.append(li);

    const div = document.createElement('div');
    div.id = brick.id;
    div.dataset.id = brick.id;
    li.append(div);

    const img = document.createElement('img');
    img.id = 'image';
    img.src = brick.image;
    img.dataset.id = brick.id;
    div.append(img);

    const colour = document.createElement('li');
    colour.id = 'colour';
    colour.textContent = brick.colour;
    colour.dataset.id = brick.id;
    li.append(colour);

    const qty = document.createElement('input');
    qty.placeholder = 'Quantity: 1'; /** This doesn't work currently. I need to change it to save the user input */
    qty.type = 'number';
    qty.dataset.id = brick.id;
    qty.id = 'usrInput';
    qty.autocomplete = false;
    li.append(qty);

    const btn = document.createElement('button');
    btn.textContent = 'Add to Basket';
    btn.dataset.id = brick.id;
    btn.id = 'addItem';
    // btn.addEventListener('click', btnEvntLsnr());
    btn.addEventListener('click', storeLocal);

    li.append(btn);

    if (where != null) {
      where.append(li);
    }
    // console.log('div', div);
  }
}

/** Adding the basket to local storage */
export function storeLocal(event) {
  /** Build an object to be stored in the array */
  const itemID = Number(event.target.dataset.id);
  const quantity = 1; // TODO: Need to change this to become a user input
  const search = basket.find(item => item.itemID === itemID); /** Compares the item to all items in the basket to see if it already exists */

  if (search) { /** If the item is already in the basket this adds the current quantity to the already existing quantity */
    console.log('Added');
    search.quantity += quantity;
  } else { /** If the item is not already in the basket, this creates an object for the item and updates the basket to include the new object */
    const obj = { itemID, quantity };
    console.log('Added to basket');
    basket.push(obj);
  }
  /** Stringify the basket so that it can be stored in local storage */
  const stringifiedBasket = JSON.stringify(basket);
  localStorage.setItem('basket', stringifiedBasket);
}

export function addLocal(event) {
  const itemID = Number(event.target.dataset.id);
  const search = basket.find(item => item.itemID === itemID);

  if (search) {
    console.log('Add');
    search.quantity += 1;
  }
  const stringifiedBasket = JSON.stringify(basket);
  localStorage.setItem('basket', stringifiedBasket);
}

export function rmvLocal(event) {
  const itemID = Number(event.target.dataset.id);
  const search = basket.find(item => item.itemID === itemID);

  if (search) {
    console.log('Remove');
    search.quantity -= 1;
  }
  const stringifiedBasket = JSON.stringify(basket);
  localStorage.setItem('basket', stringifiedBasket);
}

/** Put items that the user clicks into an array to act as a localStorage basket so that the information can then be retrieved and used to create the proper basket */
export function loadBasket() {
  const items = localStorage.getItem('basket');
  console.log('items', items);
  const bsk2 = JSON.parse(items);
  console.log('Bsk2', bsk2);
  if (items != null) {
    basket.push(...bsk2);
  }
}

/** Functions for checkout.js */


/** This temporary function lets me know that the checkout page has been loaded properly */
export function cnsl() {
  console.log('checkout', basket);
}
