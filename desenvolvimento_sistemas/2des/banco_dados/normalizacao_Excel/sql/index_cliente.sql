ROP DATABASE IF EXISTS cliente;
CREATE DATABASE cliente;
USE cliente;

CREATE TABLE cliente (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    nascimento DATE NOT NULL,
    sexo VARCHAR(20),
    peso FLOAT,
    PRIMARY KEY(id)
);

CREATE TABLE telefone(
    id_cliente INT NOT NULL,
    telefone INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES cliente(id)
);

-- Dados
INSERT INTO cliente(nome, nascimento, sexo, peso) VALUES
('Ana de Souza de Oliveira','2000-05-22','M',65),
('Ana Oliveira Oliveira','1990-08-23','T',88),
('Lúcia da Silva de Souza','1988-06-14','F',45.5),
('Marcos de Souza Castro','2002-07-13','M',98),
('Maria Oliveira Castro','2005-08-14','T',101),
('Jurema de Souzza Castro','2007-06-15','F',80);


-- importando cliente
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/cliente/exercicio1_clientes.CSV'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando telefone
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/clientes/exercicio1_telefone.CSV'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
