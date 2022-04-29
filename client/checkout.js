'use strict';

import { cnsl } from './modules.mjs';

const el = {};

function prepareHandles() {
  el.deliveryForm = document.querySelector('#deliveryForm');
  el.deliveryConfirm = document.querySelector('#deliveryConfirm');
  el.contactForm = document.querySelector('#contactForm');
  el.contactConfirm = document.querySelector('#contactConfirm');
  el.paymentBtn = document.querySelector('#paymentBtn');
  el.testElem = document.querySelector('#testElem');
}

async function deliveryConfirm() {

}

function prepareListeners() {
  el.deliveryConfirm.addEventListener('click', deliveryConfirm);
}

function pageLoaded() {
  prepareHandles();
  prepareListeners();
  cnsl();
}

window.addEventListener('load', pageLoaded);
