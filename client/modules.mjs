'use strict';

export const basket = [];

export function cnsl() {
  console.log('checkout', basket);
}

// Remove all of the content on the specified area to make sure that the brickList can go where I have told it too
export function removeContent(content) {
  while (content.firstElementChild) {
    content.firstElementChild.remove();
  }
}

// Creates the list of bricks on "bricks.html"
export function showBricks(data, where) {
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

    const colour = document.createElement('li');
    colour.textContent = brick.colour;
    colour.dataset.id = brick.id;
    li.append(colour);

    const qty = document.createElement('input');
    qty.placeholder = 'Quantity: 1';
    qty.dataset.id = brick.id;
    qty.id = 'usrInput';
    qty.autocomplete = false;
    li.append(qty);

    const btn = document.createElement('button');
    btn.textContent = 'Add to Basket';
    btn.classList.add('addToBskt');
    btn.dataset.id = brick.id;
    btn.id = 'addItem';
    // btn.addEventListener('click', btnEvntLsnr());
    li.append(btn);

    if (where != null) {
      where.append(li);
    }
  }
}

/** Adding the basket to local storage */
export function storeLocal(item) {
  /** Build an object to be stored in the array */
  const itemID = Number(item.target.dataset.id);
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

export function loadBasket() {
  const items = localStorage.getItem('basket');
  console.log('items', items);
  const bsk2 = JSON.parse(items);
  console.log('Bsk2', bsk2);
  if (items != null) {
    basket.push(...bsk2);
  }
}
