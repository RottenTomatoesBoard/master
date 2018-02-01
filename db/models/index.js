'use strict';

const Product = require('./product')
const Review = require('./review');
const Comments = require('./comments');


//create table associations here

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review, Comments};
