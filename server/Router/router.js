const express = require('express');
const router = express.Router();
const controller = require('../Controller/controller');

router.get('/product/:id', controller.viewAll);
router.get('/reviews/:id', controller.searchReview);
router.post('/reviews', controller.submitReview);
router.delete('/reviews/:id', controller.deleteReview);


module.exports = router;