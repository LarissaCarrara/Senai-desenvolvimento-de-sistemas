DROP DATABASE IF EXISTS bonificacao;
CREATE DATABASE bonificacao;
USE bonificacao;

CREATE TABLE funcionario(
    matricula INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(50) NOT NULL,
    admissao DATE NOT NULL,
    salario FLOAT NOT NULL,
    dataPagto DATE,
    desempenho FLOAT NOT NULL,
    bonificacao float
);