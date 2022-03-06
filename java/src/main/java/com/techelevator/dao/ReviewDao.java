package com.techelevator.dao;

import com.techelevator.model.Review;

import java.util.List;

public interface ReviewDao {

    List<Review> findAll();

    Review getReviewById(int reviewId);

    Review getReviewByName(String userName);

    boolean createReview( String userName, int stars, String review);

    boolean deleteReview(int reviewId);

    boolean updateById(int reviewId, Review updatedReview);

}
