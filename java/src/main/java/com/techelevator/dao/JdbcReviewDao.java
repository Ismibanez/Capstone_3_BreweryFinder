package com.techelevator.dao;

import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@Service
public class JdbcReviewDao implements ReviewDao{
    private JdbcTemplate jdbcTemplate;

    public JdbcReviewDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Review> findAll() {
        List<Review> reviews = new ArrayList<>();
        String sql = "SELECT * FROM reviews";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);

        while(results.next()) {
            Review review = mapRowToReview(results);
            reviews.add(review);
        }

        return reviews;
    }

    @Override
    public Review getReviewById(int reviewId) {
        Review review = null;

        String sql = "SELECT * FROM reviews WHERE review_id = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, reviewId);
        if(results.next()) {
            review = mapRowToReview(results);
        }
        return review;
    }

    @Override
    public Review getReviewByName(String userName) {
        for (Review review : this.findAll()) {
            if (review.getUserName().toLowerCase().equals(userName.toLowerCase())) {
                return review;
            }
        }
        return null;
    }

    @Override
    public boolean createReview(String userName, int stars, String review, int beerId, int userId) {
        boolean reviewCreated = false;

        String insertReview = "INSERT INTO reviews (user_name, stars, review, beer_id, user_id) values(?,?,?,?,?)";

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        String id_column = "review_id";
        reviewCreated = jdbcTemplate.update(con -> {
                PreparedStatement ps = con.prepareStatement(insertReview, new String[]{id_column});
                ps.setString(1, userName);
                ps.setInt(2, stars);
                ps.setString(3, review);
                ps.setInt(4, beerId);
                ps.setInt(5, userId);
                return ps;
            }, keyHolder) == 1;
        int newReviewId = (int) keyHolder.getKeys().get(id_column);

        return reviewCreated;
    }

    @Override
    public boolean deleteReview(int reviewId) {
        String sql = "DELETE FROM reviews WHERE review_id = ?";
        return jdbcTemplate.update(sql, reviewId) == 1;
    }

    @Override
    public boolean updateById(int reviewId, Review updatedReview) {
        String sql = "UPDATE reviews SET user_name = ?, stars = ?, review = ?, beer_id = ?, user_id = ? WHERE review_id = ?";
        return jdbcTemplate.update(sql, updatedReview.getUserName(), updatedReview.getStars(), updatedReview.getReview(), updatedReview.getBeerId(), updatedReview.getUserId(), reviewId) == 1;
    }

    private Review mapRowToReview(SqlRowSet rs) {
        Review review = new Review();
        review.setReviewId(rs.getInt("review_id"));
        review.setUserName(rs.getString("user_name"));
        review.setStars(rs.getInt("stars"));
        review.setReview(rs.getString("review"));
        review.setBeerId(rs.getInt("beer_id"));
        review.setUserId(rs.getInt("user_id"));
        return review;

    }
}
