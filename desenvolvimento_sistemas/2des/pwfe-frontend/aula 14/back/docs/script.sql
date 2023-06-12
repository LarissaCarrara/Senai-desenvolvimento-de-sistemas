-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS usuarios;
CREATE DATABASE usuarios;
USE usuarios;
-- DDL Criação da estrutura da tabela
CREATE TABLE usuario(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(14),
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    nascimento date,
    cep VARCHAR(15),
    numero VARCHAR(6),
    complemento VARCHAR(30)
);

CREATE TABLE telefones(
    id_cliente INT NOT NULL,
    numero VARCHAR(15),
    FOREIGN KEY(id_cliente) REFERENCES usuario(id)
);

show tables;

insert into usuario VALUES
(default,'João da Silva','866.719.681-95','joao.silva@hotmail.com',password('123789'), "2001-11-25", "13912225", "963", "" ),
(default,'Larissa Carrara','849.959.573-16','larissa.carrara@hotmail.com',password('1332'), "2003-12-20", "13912225", "900", "" );

