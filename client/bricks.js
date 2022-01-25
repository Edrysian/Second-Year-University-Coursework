'use strict';

const el = {};

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
    const response = await fetch('/data');
    let data;
    if (response.ok){
        data = await response.json();
    } else {
        data = [{name: 'Could not load brick. Please try again!'}]
    }
    removeContent(el.bricks);
    showBricks(data, el.bricks);
}

//Sends the clicked item in the list to the basket (Use event.target)
function toBasket(event){
    console.log(event.target.dataset.id);
    // Need to take ID and ask server to add that specific ID to basket.html
    let itemID = event.target.dataset.id;
    // When I click on an item I want the basket to request that specific item from the server
}

// Gets hold of the element '#bricks' from bricks.html
function prepareHandles(){
    el.bricks = document.querySelector('#bricks');
}

function prepareListeners(){
    el.bricks.addEventListener('click', toBasket);
}

// Is called by eventListener at bottom of file. Calls other functions
function pageLoaded(){
    prepareHandles();
    loadBricks();
    prepareListeners();
}


window.addEventListener('load', pageLoaded);