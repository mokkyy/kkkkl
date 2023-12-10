DROP TABLE IF EXISTS userinfo
CREATE TABLE userinfo(
    id int(10)unsigned NOT NULL AUTO_INCREMENT,
    user_name varchar(64)NOT NULL，
    password varchar(64)NOT NULL,
    user_email varchar(64)NOT NULL,
    PRIMARY KEY(id)
)ENGINE = MyISAM DEFAULT CHARSET=utf8