package com.techelevator.controller;

import com.techelevator.dao.BreweryDao;
import com.techelevator.model.Brewery;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path="/brewery")
@RestController
@CrossOrigin
public class BreweryController {

    private BreweryDao breweryDao;

    public BreweryController(BreweryDao breweryDao) {
        this.breweryDao = breweryDao;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Brewery> getBreweries() {
        return breweryDao.findAll();
    }

    @RequestMapping(value = "/id/{brewery_id}", method=RequestMethod.GET)
    public Brewery getBreweryById(@PathVariable int brewery_id){
        return breweryDao.getBreweryById(brewery_id);
    }

    @RequestMapping (value="/name/{brewery_name)", method=RequestMethod.GET)
        public Brewery getBreweryByName(@PathVariable ("brewery_name") String brewery_name){
        return breweryDao.findByName(brewery_name);
    }
//
//    @RequestMapping(value = "/name/{beerName}", method = RequestMethod.GET)
//    public Beer getBeersByName(@PathVariable ("beerName") String beerName) {
//        return beerDao.findByName(beerName);
//    }
//
//    @RequestMapping(method = RequestMethod.POST)
//    public Beer createBeer(@Valid @RequestBody Beer beer) {
//        beerDao.create(beer.getBeerName(), beer.getDescription(), beer.getImage(), beer.getAbv(), beer.getType(), beer.getUserId());
//        return beer;
//    }

 //   @RequestMapping(path = "/delete/{beerId}", method = RequestMethod.DELETE)
//    public void deleteBeer(@PathVariable int beerId) {
//
//        beerDao.deleteBeer(beerId);
//    }
//
//    @RequestMapping(path = "/update/{beerId}", method = RequestMethod.PUT)
//    public Beer updateById(@Valid @RequestBody Beer beer, @PathVariable int beerId) {
//        beerDao.updateById(beerId, beer);
//        return beer;
//    }

}
