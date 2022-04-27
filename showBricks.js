'use strict';

// import { brickInfo } from "./bricks.mjs";

let data;

async function fetchBrickData() {
  const response = await fetch('/bricks');
  if (response.ok) {
    const data = await response.json();
    report(data);
  } else {
    report('No data', true);
  }
}

export function brickData() {
  return data.brickInfo;
}

// Gets the id of the brick and temporarily stores it as 'data'
export function findBrick(id) {
  for (const brick of bricks) {
    if (brick.id === id) {
      return data;
    }
  }
  return null;
}

function pageLoaded() {
  fetchBrickData();
}

window.addEventListener('load', pageLoaded);
