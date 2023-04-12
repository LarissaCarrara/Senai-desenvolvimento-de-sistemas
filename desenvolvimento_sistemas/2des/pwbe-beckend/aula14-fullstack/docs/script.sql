-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS restaurante;
CREATE DATABASE restaurante;
USE restaurante;
-- DDL Criação da estrutura da tabela
CREATE TABLE cliente(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(30) NOT NULL
);

CREATE TABLE categoria(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE restaurante(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    categoriaid INT NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    FOREIGN KEY(categoriaid) REFERENCES categoria(id)
);

CREATE TABLE cardapio(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restauranteid INT NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    valor FLOAT NOT NULL,
    FOREIGN KEY(restauranteid) REFERENCES restaurante(id)
);

CREATE TABLE avaliacao(
    restauranteid INT NOT NULL,
    clienteid INT NOT NULL,
    data DATE NOT NULL,
    nota INT NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    FOREIGN KEY(restauranteid) REFERENCES restaurante(id),
    FOREIGN KEY(clienteid) REFERENCES cliente(id)
);

INSERT INTO cliente VALUES ("", "larissa", "19997758097","larissa.carrara@hotmail.com", "12345");


