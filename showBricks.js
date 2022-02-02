'use strict';

import * as data from './bricks.mjs';

export function brickData(){
    return data.brickInfo;
}

export function findBrick(){
    for (const brick of bricks){
        if (brick.id = id){
            return data;
        }
    }
    return null;
}
