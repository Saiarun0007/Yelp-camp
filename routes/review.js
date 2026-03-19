const express = require('express');
const router = express.Router({ mergeParams: true });

const reviews = require('../controllers/reviews');


const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateReview, reviewisAuthor } = require('../middleware');




router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, reviewisAuthor, catchAsync(reviews.deleteReview))

module.exports = router;