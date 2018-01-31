const api = module.exports = require('express').Router()
const products = require('./products');
const reviews = require('./reviews');
const comments = require('./comments');
const postcomment = require('./postcomment');
// import products from './products';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/:id', comments)
  .use('/:name/:comment/imdbID/timeStamp', comments)



// No routes matched? 404.
api.use((req, res) => res.status(404).end())
