package com.techelevator.dao;

import com.techelevator.model.Review;

import java.util.List;

public interface ReviewDao {

    List<Review> findAll();

    Review getReviewById(int reviewId);

    boolean createReview(int stars, String review);

    boolean deleteReview(int reviewId);

    boolean updateById(int reviewId, Review updatedReview);

    Double getAvgReview(int beerId);

}
