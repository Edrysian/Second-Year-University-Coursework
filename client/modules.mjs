'use strict';

export function addToBasket() {
  console.log('Added to basket');
}

/** For when I want to add more elements to provide information about the bricks. (Doesn't work...yet!)
 *
 * const li2 = document.createElement('li');
    li2.textContent = brick.colour;
    li2.dataset.id = brick.id;

    const li3 = document.createElement('li');
    li3.textContent = brick.qty;
    li3.dataset.id = brick.id;

    const ul = document.createElement('ul');
    ul.contains(li2, li3);

    const colour = document.createElement('p');
    colour.src = brick.colour;
    colour.dataset.id = brick.id;
    li.append(colour);

    const qty = document.createElement('p');
    qty.src = brick.qty;
    qty.dataset.id = brick.id;
    li.append(qty);

 *  where.append(li2);
 *  where.append(li3);
 */
