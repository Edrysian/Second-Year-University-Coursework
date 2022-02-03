'use strict';

// import * as brickList from '../showBricks.js';
import { brickInfo } from "../bricks.mjs";

const brickArr = [];

export function addToBasket (id){
    console.log(id);
    basketItems(id);
}

/**
 * Function to create new list element
 * I need to figure out how to get it to add 1 new list element
 * each time a new item is added to the basket.
*/
function basketItems (id){
    if (id = brickInfo.id){
        console.log(brickInfo.name);
    }
    let addItem = brickArr.push(id);
    console.log(brickArr, 'Works!')
}

function pageLoaded(){

}

window.addEventListener('load', pageLoaded);