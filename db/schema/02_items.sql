-- Drop and recreate Items table

DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
id INTEGER PRIMARY KEY NOT NULL ,
title VARCHAR(255)   ,
description TEXT  NOT NULL ,
price INTEGER  NOT NULL ,
cover_photo_url TEXT   ,
thumbnail_photo1_url TEXT   ,
thumbnail_photo2_url TEXT   ,
thumbnail_photo3_url TEXT   ,
province VARCHAR(255)  NOT NULL ,
city VARCHAR(255)  NOT NULL ,
community VARCHAR(255)  NOT NULL ,
status VARCHAR DEFAULT 'new' NOT NULL ,
owner_id INTEGER  NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
