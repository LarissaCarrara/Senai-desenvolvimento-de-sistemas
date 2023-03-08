-- Banco de dados de estoque
DROP DATABASE IF EXISTS estoque;
CREATE DATABASE estoque; --criando o banco de dados
USE estoque; --acessa o banco de dados

CREATE TABLE produtos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE funcionarios(
    matricula INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    PRIMARY KEY(matricula)
);

CREATE TABLE acoes(
    quantidade INT NOT NULL,
    data DATE NOT NULL,
    acoes VARCHAR(100) NOT NULL,
    idproduto INT,
    matriculafunc INT,
    FOREIGN KEY(idproduto) REFERENCES produtos(id),
    FOREIGN KEY(matriculafunc) REFERENCES funcionarios(matricula)
);



--DML (Data Manipulation Language)

INSERT INTO produtos(nome, descricao) VALUES ("tomada", "tomada 10A"), ("interruptor", "simples"), ("interruptor", "composto");

INSERT INTO funcionarios VALUES ("","Denner"), (null,"Levi"), (default,"Ivo");

INSERT INTO acoes VALUES 
(5,"2023-02-01","compra",1,1),
(1,"2023-02-02","utiliza",1,3),
(10,"2023-02-01","compra",2,2),
(2,"2023-02-02","utiliza",2,3);


SELECT * FROM produtos;
SELECT * FROM funcionarios;
SELECT * FROM acoes;

-- ALTERAÇÕES
UPDATE funcionarios SET nome = "Ivanilvo" WHERE matricula = 1;

--Inserindo dados
INSERT INTO funcionarios VALUES ("","Levi"), ("","Denner"), ("","Reenye"),("","Wellington"), ("","Ivo") , ("","Paraguassu"), ("","Tati");
