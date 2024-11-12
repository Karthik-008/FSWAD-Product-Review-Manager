const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    ReviewID: {
        type: Number,
        required: true,
        unique: true,
    },
    ProductID: {
        type: Number,
        required: true,
    },
    CustomerName: {
        type: String,
        required: true,
    },
    Rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    ReviewText: {
        type: String,
        required: true,
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;