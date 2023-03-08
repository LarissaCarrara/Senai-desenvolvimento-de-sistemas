DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria;
use pizzaria;

CREATE TABLE cliente(
    cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    logradouro VARCHAR(30) NOT NULL,
    complemento VARCHAR(30),
    bairro VARCHAR(30) NOT NULL,
    referencia VARCHAR(30) 
);

CREATE TABLE pizza(
    pizza_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    descricao VARCHAR(30),
    valor DECIMAL(4,2)
);

CREATE TABLE pedido(
    pedido_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    data DATE NOT NULL,
    valor DECIMAL(5,2),
    FOREIGN KEY(cliente_id) REFERENCES cliente(cliente_id)
);

CREATE TABLE item_pedido(
    pedido_id INT NOT NULL,
    pizza_id INT NOT NULL,
    quantidade DECIMAL(2,0),
    valor DECIMAL(5,2),
    FOREIGN KEY(pedido_id) REFERENCES pedido(pedido_id),
    FOREIGN KEY(pizza_id) REFERENCES pizza(pizza_id)
);
