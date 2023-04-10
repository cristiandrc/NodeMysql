CREATE DATABASE IF NOT EXISTS companydb;

SHOW DATABASE;

USE companydb;

CREATE TABLE employee(
  id int(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
);


INSERT INTO employee (name, salary) VALUES
  ("Isabelle",4649),
  ("Sierra",4592),
  ("Eric",3239),
  ("Amery",9891),
  ("Bryar",8248);
