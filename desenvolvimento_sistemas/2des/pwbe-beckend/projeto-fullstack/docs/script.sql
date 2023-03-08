DROP DATABASE IF EXISTS receitas;
CREATE DATABASE receitas;
USE receitas;

CREATE TABLE receita(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    ingredientes VARCHAR(30) NOT NULL,
    modofazer VARCHAR(200) NOT NULL,
    rendimento VARCHAR(10) NOT NULL
);

