BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS seq_user_id;
DROP TABLE IF EXISTS beers;
DROP SEQUENCE IF EXISTS seq_beer_id;
DROP TABLE IF EXISTS breweries;
DROP SEQUENCE IF EXISTS seq_brewery_id;
DROP TABLE IF EXISTS reviews;
DROP SEQUENCE IF EXISTS seq_reviews_id;

CREATE SEQUENCE seq_user_id
      INCREMENT BY 1
      NO MAXVALUE
      NO MINVALUE
      CACHE 1;

CREATE SEQUENCE seq_beer_id
        INCREMENT BY 1
        NO MAXVALUE
        NO MINVALUE
        CACHE 1;

CREATE SEQUENCE seq_brewery_id
        INCREMENT BY 1
        NO MAXVALUE
        NO MINVALUE
        CACHE 1;

CREATE SEQUENCE seq_reviews_id
        INCREMENT BY 1
        NO MAXVALUE
        NO MINVALUE
        CACHE 1;

CREATE TABLE users (
    user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
    username varchar(50) NOT NULL,
    password_hash varchar(200) NOT NULL,
    role varchar(50) NOT NULL,
    CONSTRAINT PK_user PRIMARY KEY (user_id)
) ;

CREATE TABLE beers (
    beer_id int DEFAULT nextval('seq_beer_id'::regclass) NOT NULL,
    beer_name varchar(100) NOT NULL,
    description varchar (300) NOT NULL,
    image varchar(100) NOT NULL,
    abv int NOT NULL,
    beer_kind varchar(50),
    userId int NOT NULL,
    PRIMARY KEY (beer_id),
    FOREIGN KEY (userId) REFERENCES users(user_id)
) ;

CREATE TABLE brewery (
    brewery_id int DEFAULT nextval('seq_brewery_id'::regclass) NOT NULL,
    brewery_name varchar(100) NOT NULL,
    phone_number varchar(10) NOT NULL,
    history varchar(300) NOT NULL,
    hours_of_operation varchar(50) NOT NULL,
    images bytea NOT NULL,
    address varchar(100) NOT NULL,
    activity varchar(10) NOT NULL,
    beer_id int NOT NULL,
    user_id int NOT NULL,
    PRIMARY KEY (brewery_id),
    FOREIGN KEY (beer_id) REFERENCES beers(beer_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)

) ;

CREATE TABLE reviews (
    review_id int DEFAULT nextval('seq_reviews_id'::regclass) NOT NULL,
    user_name varchar(10) NOT NULL,
    stars int NOT NULL,
    review varchar(300) NOT NULL,
    beer_id int NOT NULL,
    user_id int NOT NULL,
    PRIMARY KEY (review_id),
    FOREIGN KEY (beer_id) REFERENCES beers(beer_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
) ;



INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');


COMMIT TRANSACTION;
