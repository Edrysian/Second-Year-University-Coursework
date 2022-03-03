'use strict';

const el = {};
const basket = [];

// Remove all of the content on the specified area
function removeContent(content){
    while (content.firstElementChild){
        content.firstElementChild.remove();
    }
}

// Creates the list of bricks on "bricks.html"
function showBricks(data, where){
    for (const brick of data){
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
async function loadBricks(req, res){
    const response = await fetch('/bricks');
    let data;
    if (response.ok){
        data = await response.json();
    } else {
        data = [{name: 'Could not load bricks. Please try again!'}]
    }
    removeContent(el.bricks);
    showBricks(data, el.bricks);
}

// Sends the clicked item in the list to the basket
function toBasket(event){
    if (event.target.dataset.id != undefined){
        console.log(event.target.dataset.id);
//         let id = event.target.dataset.id;
//         addToBasket(id);
     }// else {
//         console.log(Error("Brick not found"));
//     }
}

// Create a function that removes all the elements on the page and replaces them with elements for the basket.
// Removing the brick elements from the page
function rmvBrickElem(){
    const filter = document.getElementById('filter');
    filter.remove();
    const bricks = document.getElementById('bricks');
    bricks.remove();
    addBasketElem();
}

// Adding the basket elements to the page
function addBasketElem(){
    console.log("Where da local storage at yo?!?!")
}

// Adding the basket to local storage
function storeLocal(item){
    // Build an object to be stored in the array
    const itemID = item.target.dataset.id;
    const quantity = 1;
    let obj = {itemID, quantity};
    basket.push(obj);
    const stringifiedBasket = JSON.stringify(basket);
    localStorage.setItem("basket", stringifiedBasket);
}

// Gets hold of the elements from bricks.html
function prepareHandles(){
    el.bricks = document.querySelector('#bricks');
    el.basket = document.querySelector('#basket');
}

function prepareListeners(){
    el.bricks.addEventListener('click', storeLocal);
    el.basket.addEventListener('click', rmvBrickElem);
}

// This is called by the eventListener at bottom of file. Calls other functions
function pageLoaded(){
    prepareHandles();
    loadBricks();
    prepareListeners();
}

window.addEventListener('load', pageLoaded);
