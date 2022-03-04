package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@Service
public class JdbcBeerDao implements BeerDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcBeerDao(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    @Override
    public List<Beer> findAll() {
        List<Beer> beers = new ArrayList<>();
        String sql = "SELECT * FROM beers";

        // "Select * from beer Where ? = ?"

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            beers.add(mapRowToBeer(results));


        }
        return beers;
    }

    @Override
    public Beer getBeerById(int beerId) {
        Beer beer = null;

        String sql = "SELECT * FROM beers WHERE beer_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, beerId);
        if(results.next()) {
            beer = mapRowToBeer(results);
        }
        return beer;
    }

    @Override
    public Beer findByName(String beerName) {
        for (Beer beer : this.findAll()) {
            if( beer.getBeerName().toLowerCase().equals(beerName.toLowerCase())) {
                return beer;
            }
        }
        return null;
    }

    @Override
    public int findIdByName(String beerName) {
        return jdbcTemplate.queryForObject("SELECT beer_id FROM beers WHERE beer_name = ?", int.class, beerName);
    }

    @Override
    public boolean create(String beerName, String description, String image, int abv, String type, int userId) {
        boolean beerCreated = false;

        String insertBeer = "INSERT INTO beers (beer_name, description, image, abv, type, userid) values(?,?,?,?,?,?)";

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        String id_column = "beer_id";
        beerCreated = jdbcTemplate.update(con -> {
                PreparedStatement ps = con.prepareStatement(insertBeer, new String[]{id_column});
                ps.setString(1, beerName);
                ps.setString(2, description);
                ps.setString(3, image);
                ps.setInt(4, abv);
                ps.setString(5, type);
                ps.setInt(6, userId);
                return ps;
            }, keyHolder) == 1;
        int newBeerId = (int) keyHolder.getKeys().get(id_column);

        return beerCreated;
    }

    public boolean deleteBeer(int beerId) {
        String sql = "DELETE FROM beers WHERE beer_id = ?";
        return jdbcTemplate.update(sql, beerId) == 1;
    }

    @Override
    public boolean updateById(int beerId, Beer updateBeer) {
        String sql = "UPDATE beers SET beer_name = ?, description = ?, abv = ?, image = ?, type = ?, userid = ? WHERE beer_id = ?";
        return jdbcTemplate.update(sql, updateBeer.getBeerName(), updateBeer.getDescription(), updateBeer.getAbv(), updateBeer.getImage(), updateBeer.getType(), updateBeer.getUserId(), beerId) == 1;


    }


    private Beer mapRowToBeer(SqlRowSet rs) {
        Beer beer = new Beer();
        beer.setBeerId(rs.getInt("beer_id"));
        beer.setBeerName(rs.getString("beerName"));
        beer.setDescription(rs.getString("description"));
        beer.setAbv(rs.getInt("abv"));
        beer.setImage(rs.getString("image"));
        beer.setType(rs.getString("type"));
        beer.setUserId(rs.getInt("userid"));
        return beer;
    }

}