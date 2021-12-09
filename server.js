import express from 'express';

const app = express();
app.use(express.static('client'));

console.log("Server Running");

app.listen(8080);