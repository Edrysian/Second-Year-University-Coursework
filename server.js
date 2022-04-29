'use strict';

import express from 'express';
import { brickInfo } from './bricks.mjs'; // Gets the JSON data from bricks.mjs
import * as brickList from './showBricks.js';

const app = express();

app.use(express.static('client'));
console.log('Server Running');

function getBricks(req, res) {
  res.json(brickList.brickData());
}

function getBrickInfo(req, res) {
  const info = brickList.findBrick(req.params.id);
  if (!info) {
    res.status(404).send('We appear to have lost that brick. Careful not to step on it!');
    return;
  }
  res.json(info);
}

function postBrick(req, res) {
  const bricks = brickList.addBrick(req.body.name);
  res.json(bricks);
}

// function putBrick(req, res){
//     const brick = brickList.editBrick(req.body);
//     res.json(brick);
// }

let delivery = 'No delivery yet.';

app.post('/delivery', express.json(), function (req, res) {
  delivery = req.body.form;
  res.send('accepted');
});

app.get('/delivery', (req, res) => {
  res.send(delivery);
});

app.get('/data', getBricks);
app.get('/data/:id', getBrickInfo);
// app.put('/data/:id', putBrick);
app.post('/data', postBrick);
app.get('/bricks', (req, res) => {
  res.json(brickInfo);
});

app.listen(8080);
