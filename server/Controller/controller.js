const Review = require('../Models/review');

//Submit a review...
const submitReview = async(req, res) => {
    try{
        const review = new Review(req.body);
        await review.save();

        res.status(201).json({message: "Review Submitted", review: review});
    }catch(error) {
        res.status(500).json({message: "Error submitting!..", error: error.message});
    }
};

//Search a review by reviewID...
const searchReview = async(req, res) => {
    try{
        const review = await Review.findOne({"ReviewID": req.params.id});
        if(!review) {
            res.status(404).json({message: "Review Not Found!"});
        }
        else {
            res.status(200).json({message: "Review Fetched", review: review});
        }
    }catch(error) {
        res.status(500).json({message: "Error searching!...", error: error.message});
    }
};

//delete a review by reviewID....
const deleteReview = async(req, res) => {
    try{
        const review = await Review.findOneAndDelete({"ReviewID": req.params.id});
        if(!review) {
            res.status(404).json({message: "Review Not Found!..."});
        }
        else {
            res.status(200).json({message: "Review Deleted!", review: review});
        }
    }catch(error) {
        res.status(500).json({message: "Error searching!...", error: error.message});
    }
};

//view all reviews of product by ProductId...
const viewAll = async(req, res) => {
    try{
        const reviews = await Review.find({"ProductID": req.params.id});
        if(reviews.length == 0) {
            console.log(reviews);
            res.status(404).json({message: "No reviews for product | Product Not Found"});
        }
        else {
            res.status(200).json({message: "Reviews Fetched!", reviews: reviews});
        }
    }catch(error) {
        res.status(500).json({message: "Error Retrieving Reviews", error: error.message});
    }
};

module.exports = {
    submitReview,
    searchReview,
    deleteReview,
    viewAll,
};