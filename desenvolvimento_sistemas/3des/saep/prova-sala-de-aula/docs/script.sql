-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS sala;
CREATE DATABASE sala;
USE sala;
-- DDL Criação da estrutura da tabela
CREATE TABLE professor(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(30) NOT NULL
);

CREATE TABLE sala_aula(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    professorid INT NOT NULL,
    FOREIGN KEY(professorid) REFERENCES professor(id)
);

CREATE TABLE atividades(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    salaid INT NOT NULL,
    FOREIGN KEY(salaid) REFERENCES sala_aula(id)
);


INSERT INTO professor VALUES ("", "larissa", "19997758097","11111111111","larissa.carrara@hotmail.com", "12345");
INSERT INTO professor VALUES ("", "wellington", "19999999999","22222222222","wellington@hotmail.com", "123456");
INSERT INTO professor VALUES ("", "matheus", "19888888888","33333333333","matheus@hotmail.com", "1234567");

INSERT INTO sala_aula VALUES ("", "1des", 1);
INSERT INTO sala_aula VALUES ("", "1mec", 1);
INSERT INTO sala_aula VALUES ("", "2des",2);
INSERT INTO sala_aula VALUES ("", "3des",3);

INSERT INTO atividades VALUES ("", "redacao","fazer uma redacao de no minimo 30 linhas", 1);
INSERT INTO atividades VALUES ("", "exercicio to be","fazer os exercicios da pagina 50 do livro", 2);
INSERT INTO atividades VALUES ("", "banco de dados","fazer um banco de dados com no minimo 5 tabelas", 3);

