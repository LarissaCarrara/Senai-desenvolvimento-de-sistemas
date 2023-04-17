-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS Restaurante;
CREATE DATABASE Restaurante;
USE Restaurante;
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

INSERT INTO categoria VALUES ("1", "pizzaria");
INSERT INTO categoria VALUES ("2", "lanchonete");

INSERT INTO restaurante VALUES ("", "pizzaria do dede",1, "rua egas bueno");

INSERT INTO restaurante VALUES ("", "pizzaria do camacho",1, "rua egas");

INSERT INTO restaurante VALUES ("", "lanchonete",2, "rua egas");

INSERT INTO cardapio VALUES ("", 1 ," Pizza de Calabresa", 45.00);