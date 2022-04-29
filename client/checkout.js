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
  const form = el.deliveryForm.value;
  const obj = { form };
  const response = await fetch('/delivery', {
    method: 'POST',
    body: JSON.stringify(obj),
  });

  if (!response.ok) {
    console.warn('Delivery Information not entered correctly', response);
  } else {
    console.log('Delivery Information submitted successfully!');
  }

  loadDelivery();
}

async function loadDelivery() {
  const response = await fetch('/delivery');
  if (!response.ok) {
    console.error('Cannot get delivery information!', response);
    return;
  }

  const text = await response.text();
  el.testElem.textContent = text;
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

setInterval(loadDelivery, 5000);
