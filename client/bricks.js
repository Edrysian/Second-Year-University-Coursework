'use strict';

const el = {};

function removeContent(content){
    while (content.firstElementChild){
        content.firstElementChild.remove();
    }
}

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

function prepareHandles(){
    el.bricks = document.querySelector('#bricks');
}

function pageLoaded(){
    prepareHandles();
    loadBricks();
}

window.addEventListener('load', pageLoaded);