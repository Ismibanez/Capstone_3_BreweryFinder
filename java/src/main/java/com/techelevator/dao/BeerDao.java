package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.User;

import java.util.List;

public interface BeerDao {

    List<Beer> findAll();

    Beer getBeerById(int beerId);

    Beer findByName(String beerName);

    int findIdByName(String beerName);

    boolean create(String beerName, String description, String image, int abv, String type);

    boolean deleteBeer(int beerId);

    boolean updateById(int beerId, Beer updateBeer);
}
