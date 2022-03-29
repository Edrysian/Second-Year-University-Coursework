'use strict';

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
    qty.autocomplete = false;
    li.append(qty);

    const btn = document.createElement('button');
    btn.textContent = 'Add to Basket';
    btn.dataset.id = brick.id;
    li.append(btn);

    where.append(li);
  }
}
