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

--inserindo dados
INSERT INTO funcionarios VALUES ("","Levi", "Manutenção"), ("","Denner","Manutenção"), ("","Reenye","Professor"),("","Wellington","Professor"), ("","Ivo","Professor") , ("","Paraguassu","Coordenador"), ("","Tati", "Qualidade");

INSERT INTO os VALUES 
("",3,1,"Torneira da pia da cozinha pingando","2023-02-01","11:00:00","2023-02-01","12:00:00"),
("",6,1,"Torneira da pia do banheiro pingando","2023-02-01","13:00:00","2023-02-02","13:00:00"),
("",7,1,"Limpar a caixa d'água","2023-02-02","10:00:00","2023-02-02","13:00:00"),
("",5,2,"Trocar a tomada da secretaria para padrão novo","2023-02-02","12:00:00","2023-02-02","16:00:00"),
("",3,2,"Trocar a tomada da sala dos professors para padrão","2023-02-02","16:00:00",NULL,NULL),
("",4,1,"Instalar duas tomadas na oficina mecânica","2023-02-03","08:00:00",NULL,NULL),
("",6,1,"Instalar duas tomadas no laboratório 5","2023-02-03","09:00:00",NULL,NULL);

SELECT * FROM os;
SELECT * FROM funcionarios;