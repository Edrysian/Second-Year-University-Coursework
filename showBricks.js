'use strict';

import * as data from './bricks.mjs'; // Gets the JSON data from bricks.mjs

export function brickData(){
    return data.brickInfo;
}

// Gets the id of the brick and temporarily stores it as 'data'
export function findBrick(){
    for (const brick of bricks){
        if (brick.id = id){
            return data;
        }
    }
    return null;
}
