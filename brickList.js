'use strict';

const data = require('./bricks.json');

function brickData(){
    return data;
}

function findBrick(){
    for (brick of bricks){
        if (brick.id = id){
            return data;
        }
    }
    return null;
}

module.exports = {
    brickData,
    findBrick
}