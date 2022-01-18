'use strict';

import * as data from './bricks.mjs';

export function brickData(){
    return data.brickz;
}

export function findBrick(){
    for (const brick of bricks){
        if (brick.id = id){
            return data;
        }
    }
    return null;
}
