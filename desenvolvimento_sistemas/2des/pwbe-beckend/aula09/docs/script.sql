DROP DATABASE IF EXISTS imobiliaria;
CREATE DATABASE imobiliaria;
USE imobiliaria;

CREATE TABLE corretores(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(153) NOT NULL,
    matricula VARCHAR(10) NOT NULL UNIQUE,
    senha VARCHAR(10) NOT NULL,
    salario FLOAT(6,2) NOT NULL
);

CREATE TABLE status (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(20)
);

CREATE TABLE imoveis(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    corretor_id INT NOT NULL,
    codigo VARCHAR(10) NOT NULL UNIQUE,
    endereco VARCHAR(153) NOT NULL,
    valor_venda FLOAT(10,2),
    valor_aluga FLOAT(10,2),
    status_id INT NOT NULL,
    FOREIGN KEY(corretor_id) REFERENCES corretores(id),
    FOREIGN KEY(status_id) REFERENCES status(id)
);



INSERT INTO corretores VALUES 
("", "Zeh das vendas", "15948", "abc@123", 2500),
("", "Jaum dos alugueis", "1323", "cba@123", 2500);

INSERT INTO status VALUES 
("", "Disponivel"),
("", "Alugado"),
("", "Vendido");

INSERT INTO imoveis VALUES 
("", 1, "KSA7894", "Ruas das ruas, 8", 400000, 850, 1),
("", 1, "APT4613", "Ruas dos buero, 8", 400000, 850, 2),
("", 1, "KSA418", "Ruas das pipas, 8", 400000, 850, 3);