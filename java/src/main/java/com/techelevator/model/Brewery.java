package com.techelevator.model;

public class Brewery {

     private int brewery_id;
     private String brewery_name;
     private String phone_number;
     private String history;
     private String hours_of_operation;
     private String image;
     private String address;
     private String activity;
     private int beer_id;
     private int user_id;

     public Brewery() {
     }

     public Brewery(int brewery_id, String brewery_name, String phone_number, String history, String hours_of_operation, String image, String address, String activity, int beer_id, int user_id) {
          this.brewery_id = brewery_id;
          this.brewery_name = brewery_name;
          this.phone_number = phone_number;
          this.history = history;
          this.hours_of_operation = hours_of_operation;
          this.image = image;
          this.address = address;
          this.activity = activity;
          this.beer_id = beer_id;
          this.user_id = user_id;
     }

     public int getBrewery_id() {
          return brewery_id;
     }

     public void setBrewery_id(int brewery_id) {
          this.brewery_id = brewery_id;
     }

     public String getBrewery_name() {
          return brewery_name;
     }

     public void setBrewery_name(String brewery_name) {
          this.brewery_name = brewery_name;
     }

     public String getPhone_number() {
          return phone_number;
     }

     public void setPhone_number(String phone_number) {
          this.phone_number = phone_number;
     }

     public String getHistory() {
          return history;
     }

     public void setHistory(String history) {
          this.history = history;
     }

     public String getHours_of_operation() {
          return hours_of_operation;
     }

     public void setHours_of_operation(String hours_of_operation) {
          this.hours_of_operation = hours_of_operation;
     }

     public String getImage() {
          return image;
     }

     public void setImage(String image) {
          this.image = image;
     }

     public String getAddress() {
          return address;
     }

     public void setAddress(String address) {
          this.address = address;
     }

     public String getActivity() {
          return activity;
     }

     public void setActivity(String activity) {
          this.activity = activity;
     }

     public int getBeer_id() {
          return beer_id;
     }

     public void setBeer_id(int beer_id) {
          this.beer_id = beer_id;
     }

     public int getUser_id() {
          return user_id;
     }

     public void setUser_id(int user_id) {
          this.user_id = user_id;
     }
}
