const express = require("express");
const { getReviews, createReview, getReviewById, deleteReview, editReview, } = require("../controllers/reviews");
const { validatorCreateReview, validatorIdReview, validatorPutReview } = require("../validators/reviews");
const router = express.Router();



router.get("/", getReviews);

router.get("/:id", validatorIdReview, getReviewById);

router.delete("/:id", validatorIdReview, deleteReview);

router.put("/:id", validatorPutReview, editReview)

router.post("/", validatorCreateReview, createReview)


module.exports = router
