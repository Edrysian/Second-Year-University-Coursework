import { cnsl } from './modules.mjs';

function pageLoaded() {
  cnsl();
}

window.addEventListener('load', pageLoaded);
