const db = require('../db') //this is required
const Comments = require('../db/models/comments');

const router = require('express').Router()


router.get('/postcomment', function(req, res, next) {
  console.log('post comment route works!');
    // Comments.findAll({
    //         where:{imdbID:req.params.id}
    //     })
    //     .then(result => {
    //         res.status(200).send(result);
    //     })
    //     .catch(next);
});





module.exports = router;
