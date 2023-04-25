DROP DATABASE IF EXISTS loja;
CREATE DATABASE loja;
use loja;

CREATE TABLE vendedores(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    matricula INT NOT NULL
);

CREATE TABLE produtos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    valor FLOAT NOT NULL
);

CREATE TABLE vendas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    quantidade INT NOT NULL,
    produtoid INT NOT NULL,
    vendedorid INT NOT NULL,    
    FOREIGN KEY(produtoid) REFERENCES produtos(id),
    FOREIGN KEY(vendedorid) REFERENCES vendedores(id)
);


INSERT INTO vendedores VALUES ("", "larissa", 001);
INSERT INTO vendedores VALUES ("", "camacho", 002);
INSERT INTO vendedores VALUES ("", "andre", 003);

INSERT INTO produtos VALUES ("", "garrafa", 30);

INSERT INTO vendas VALUES ("", "2023-04-19", 3, 1, 1);