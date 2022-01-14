'use strict';

import express from 'express';

const app = express();
import * as brickList from './brickList.js';

app.use(express.static('client'));
console.log("Server Running");

function getBricks(req, res){
    res.json(brickList.brickData());
}

function getBrickInfo (req, res){
    const info = brickList.findBrick(req.params.id);
    if(!info){
        res.status(404).send('We appear to have lost that brick. Careful not to step on it!');
        return;
    }
    res.json(info);
}

function postBrick(req, res){
    const bricks = brickList.addBrick(req.body.name);
    res.json(bricks);
}

function putBrick(req, res){
    const brick = brickList.editBrick(req.body);
    res.json(brick);
}

app.get('/data', getBricks);
app.get('/data/:id', getBrickInfo);
app.put('/data/:id', putBrick);
app.post('/data', postBrick);
app.get('/bricks', (req, res) => {
    res.json(data);
});

app.listen(8080);