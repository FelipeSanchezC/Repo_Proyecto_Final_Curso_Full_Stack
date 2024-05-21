CREATE DATABASE Pruebas02;
USE Pruebas02;

CREATE TABLE personas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL, 
    lastname VARCHAR(50) NOT NULL,
    age INT
);

SELECT * FROM personas;

CREATE USER 'pruebas02'@'localhost' IDENTIFIED BY 'prueba02';
GRANT ALL PRIVILEGES ON pruebas02.* TO 'prueba02'@'localhost';
