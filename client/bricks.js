'use strict';

const el = {};

function removeContent(content){
    while (content.firstElementChild){
        content.firstElementChild.remove();
    }
}

function showBricks(data){
    for (const brick of data){
        const li = document.createElement('li');
        li.textContent = brick.name;
        li.dataset.id = brick.id;
        
        const img = document.createElement('img');
        img.src = './images';
        img.dataset.id = brick.id;
        li.append(" ", img);

        const colour = document.createElement('li');
        li.textContent = brick.colour;
        li.dataset.id = brick.id;
        li.append(colour);
    }
}

async function loadBricks(req, res){
    const response = await fetch('data/');
    let data;
    if (response.ok){
        data = await response.json();
    } else {
        data = [{name: 'Could not load brick. Please try again!'}]
    }
    removeContent(el.bricks);
    brickList(data, el.bricks);
}

function prepareHandles(){
    el.bricks = document.querySelector('#bricks');
}

function pageLoaded(){
    prepareHandles();
    loadBricks();
}

window.addEventListener('load', pageLoaded);