CREATE TABLE users
(id BIGSERIAL PRIMARY KEY NOT NULL,
name VARCHAR(200) NOT NULL,
email VARCHAR(200) NOT NULL,
password VARCHAR(255) NOT NULL,
UNIQUE (email));

CREATE TABLE posts
(id BIGSERIAL PRIMARY KEY NOT NULL,
title VARCHAR(200) NOT NULL,
context VARCHAR(2000) NOT NULL,
likes_count NUMERIC(10) DEFAULT 0,
user_id INTEGER NOT NULL,
FOREIGN KEY (user_id) REFERENCES users (id),
UNIQUE (title));