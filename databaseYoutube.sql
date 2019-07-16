CREATE DATABASE IF NOT EXISTS videoslaravel;
USE videoslaravel;

create table users(
 id int(255) auto_increment not null,
 role varchar(20),
 name varchar(255),
 email varchar(255),
 password varchar(255),
 image VARCHAR(255),
 created_at datetime,
 updated_at datetime,
remember_token VARCHAR(255),
CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE=InnoDb;

create table videos(
id int(255) auto_increment not null,
user_id int(255) not null,
title VARCHAR(255),
description text,
status VARCHAR(20),
image VARCHAR(255),
video_path VARCHAR(255),
created_at datetime,
updated_at datetime,
CONSTRAINT pk_videos PRIMARY KEY(id),
CONSTRAINT fk_videos_users FOREIGN KEY(user_id) REFERENCES USERS(id)
)ENGINE=InnoDb;

create table comments(
    id int(255) auto_increment not null,
    user_id int(255) not null,
    video_id int(255) not null,
    body text,
    created_at DATETIME,
    updated_at DATETIME,
    CONSTRAINT pk_comment PRIMARY KEY(id),
    CONSTRAINT fk_comment_video FOREIGN KEY(video_id) REFERENCES videos(id),
    CONSTRAINT fk_comment_user FOREIGN KEY(user_id) REFERENCES users(id)
)ENGINE=InnoDb;