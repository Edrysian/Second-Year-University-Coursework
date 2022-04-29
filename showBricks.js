'use strict';

import { brickInfo } from './bricks.mjs';

let data;

export function brickData() {
  return data.brickInfo;
}

/** Gets the id of the brick and temporarily stores it as 'data' */
export function findBrick(id) {
  for (const brick of brickInfo) {
    if (brick.id === id) {
      return data;
    }
  }
  return null;
}
