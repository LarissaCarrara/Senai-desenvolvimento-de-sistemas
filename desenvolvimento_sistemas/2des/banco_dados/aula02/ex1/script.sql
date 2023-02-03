-- Ordem de serviço

CREATE DATABASE ordens_serviço; --criando o banco de dados

USE ordens_serviço; --acessa o banco de dados

CREATE TABLE os( 
    id INT NOT NULL AUTO_INCREMENT,
    funcionario VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim DATE,
    PRIMARY KEY(id)
); --cria a tabela os

DROP DATABASE IF EXISTS ordens_serviço;
SHOW TABLES;
DESCRIBE os;


--EXERCÍCIO 1b

CREATE DATABASE ordem_serviço2;
USE ordem_serviço2;

CREATE TABLE funcionarios(
    matricula INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(30) NOT NULL,
    PRIMARY KEY(matricula)
);

CREATE TABLE os( 
    id INT NOT NULL AUTO_INCREMENT,
    func_abertura INT NOT NULL,
    func_executor INT NOT NULL,
    descricao TEXT NOT NULL,
    data_abertura DATE NOT NULL,
    hora_abertura TIME NOT NULL,
    data_fim DATE,
    hora_fim TIME,
    PRIMARY KEY(id),
    FOREIGN KEY(func_abertura)REFERENCES funcionarios(matricula),
    FOREIGN KEY(func_executor)REFERENCES funcionarios(matricula)
); --cria a tabela os

ALTER TABLE os DROP funcionario;
ALTER TABLE os ADD func_abertura VARCHAR(100) NOT NULL;
ALTER TABLE os ADD func_executor VARCHAR(100) NOT NULL;