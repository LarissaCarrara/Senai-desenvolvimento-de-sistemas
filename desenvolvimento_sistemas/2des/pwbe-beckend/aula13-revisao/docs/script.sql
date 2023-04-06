DROP DATABASE IF EXISTS nutricionista;
CREATE DATABASE nutricionista;
USE nutricionista;

CREATE TABLE paciente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(50) NOT NULL,
    nascimento DATE NOT NULL,
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL
);