'use strict';

import { contactElems, cnsl } from './modules.mjs';

const el = {};

function prepareHandles() {
  el.deliveryConfirmation = document.querySelector('#deliveryConfirmation');
}

function prepareListeners() {
  el.deliveryConfirmation.addEventListener('click', contactElems);
}

function pageLoaded() {
  prepareHandles();
  prepareListeners();
  cnsl();
}

window.addEventListener('load', pageLoaded);
