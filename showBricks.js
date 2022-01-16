'use strict';

import * as data from './bricks.mjs';

function brickData(){
    return data;
}

function findBrick(){
    for (const brick of bricks){
        if (brick.id = id){
            return data;
        }
    }
    return null;
}

module.exports = {
    brickData,
    findBrick,
};