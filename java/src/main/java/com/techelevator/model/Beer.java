package com.techelevator.model;

public class Beer {

    private int beer_id;
    private String beerName;
    private String description;
    private int abv;
    private String image;
    private String beerKind;


    public int getBeer_id() { return beer_id; }

    public void setBeer_id(int beer_id) {
        this.beer_id = beer_id;
    }

    public String getBeerName() {
        return beerName;
    }

    public void setBeerName(String beerName) {
        this.beerName = beerName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAbv() { return abv; }

    public void setAbv(int abv) {
        this.abv = abv;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
    
    public String getBeerKind() {
        return beerKind;
    }

    public void setBeerKind(String beerKind) {
        this.beerKind = beerKind;
    }
}
