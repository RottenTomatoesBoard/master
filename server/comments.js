const db = require('../db') //this is required
// const Review = require('../db/models/review');
// const Product = require('../db/models/product');
const Comments = require('../db/models/comments');

const router = require('express').Router()


router.get('/:id', function(req, res, next) {
  console.log('fetching fired');
    Comments.findAll({
            where:{imdbID:req.params.id}
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});



router.post('/:name/:comment/:imdbID', function (req, res, next){
  console.log('post comment router works', req.params.name, req.params.comment, req.params.imdbID);
  Comments.create({
    name: req.params.name,
    body: req.params.comment,
    imdbID: req.params.imdbID,
    timestamp: '1/29/2018, 3:12:15'
  })
  .then(result => {
      res.status(200).send(result);
      console.log('cb fired');
      // res.redirect('/id/'+req.params.imdbID);
  })
  .catch(next);


});

module.exports = router;
