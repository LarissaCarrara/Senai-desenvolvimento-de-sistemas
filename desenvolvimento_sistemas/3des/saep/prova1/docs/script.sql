DROP DATABASE IF EXISTS fabrica;
CREATE DATABASE fabrica;
USE fabrica;

CREATE TABLE clientes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE concessionarias(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    concessionaria VARCHAR(40) NOT NULL
);
CREATE TABLE automoveis(
    id INT NOT NULL PRIMARY KEY,
    modelo VARCHAR(30) NOT NULL,
    preco FLOAT NOT NULL
);
CREATE TABLE alocacao(
    id INT NOT NULL PRIMARY KEY,
    area INT NOT NULL,
    automovel INT NOT NULL,
    concessionaria INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY(automovel) REFERENCES automoveis(id),
    FOREIGN KEY(concessionaria) REFERENCES concessionarias(id)
);

CREATE TABLE vendas(
    id INT NOT NULL PRIMARY KEY,
    cliente INT NOT NULL,
    alocacao INT NOT NULL,
    FOREIGN KEY(cliente) REFERENCES clientes(id),
    FOREIGN KEY(alocacao) REFERENCES alocacao(id)
);

-- importando cliente
LOAD DATA INFILE 'C:/Users/laris/OneDrive/Documentos/Senai-desenvolvimento-de-sistemas/desenvolvimento_sistemas/3des/saep/prova1/docs/clientes.CSV'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando concessionarias
LOAD DATA INFILE 'C:/Users/laris/OneDrive/Documentos/Senai-desenvolvimento-de-sistemas/desenvolvimento_sistemas/3des/saep/prova1/docs/concessionarias.CSV'
INTO TABLE concessionarias
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando automoveis
LOAD DATA INFILE 'C:/Users/laris/OneDrive/Documentos/Senai-desenvolvimento-de-sistemas/desenvolvimento_sistemas/3des/saep/prova1/docs/automoveis.CSV'
INTO TABLE automoveis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando alocacao
LOAD DATA INFILE 'C:/Users/laris/OneDrive/Documentos/Senai-desenvolvimento-de-sistemas/desenvolvimento_sistemas/3des/saep/prova1/docs/alocacao.CSV'
INTO TABLE alocacao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;