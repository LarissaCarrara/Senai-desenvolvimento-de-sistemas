DROP DATABASE IF EXISTS onibus;
CREATE DATABASE onibus;
USE onibus;

CREATE TABLE motorista (
    cpf VARCHAR(20) NOT NULL,
    nome VARCHAR(100),
    PRIMARY KEY(cpf)
);
CREATE TABLE telefone(
    cpf_motorista INT NOT NULL,
    telefone INT NOT NULL,
    FOREIGN KEY(cpf_motorista) REFERENCES motorista(cpf)
);
CREATE TABLE dirige(
   cpf_motorista VARCHAR(20) NOT NULL,
   id_linha INT NOT NULL,
    FOREIGN KEY(cpf_motorista) REFERENCES motorista(cpf),
    FOREIGN KEY(id_linha) REFERENCES linha(id)
);
CREATE TABLE linha(
    id INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    horario TIME NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE horario(
    id_linha INT NOT NULL,
    horario TIME NOT NULL,
    FOREIGN KEY (id_linha) REFERENCES linha(id);
)

-- importando motorista
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/motorista/motorista_onibus.CSV'
INTO TABLE motorista
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando telefone
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/motorista/telefone_onibus.CSV'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando dirige
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/motorista/dirige_onibus.CSV'
INTO TABLE dirige
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

--importando linhas
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/motorista/linhas_onibus.CSV'
INTO TABLE linha
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

