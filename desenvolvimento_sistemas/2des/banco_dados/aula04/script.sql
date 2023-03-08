DROP DATABASE IF EXISTS venda;
CREATE DATABASE venda;
USE venda;

CREATE TABLE clientes (
    cpf VARCHAR(50) NOT NULL,
    nome VARCHAR(100),
    cep VARCHAR(50) NOT NULL,
    numero VARCHAR(5),
    complemento VARCHAR(50),
    PRIMARY KEY(cpf)
);

CREATE TABLE telefone(
    cpf_tel VARCHAR(50) NOT NULL,
    telefone VARCHAR(20),
    FOREIGN KEY(cpf_tel) REFERENCES clientes(cpf)
);

CREATE TABLE compras(
    num_compra INT NOT NULL AUTO_INCREMENT,
    data DATE NOT NULL,
    valor FLOAT NOT NULL,
    vencimento DATE NOT NULL,
    cpf_compras VARCHAR(50) NOT NULL,
    pagamento DATE,
    PRIMARY KEY(num_compra),
    FOREIGN KEY(cpf_compras) REFERENCES clientes(cpf)
);


INSERT INTO clientes VALUES 
("03997263817", "Solange Motta", 13912110, 123, "" ),
("52730165843", "Larissa Motta", 13912112, 165, "" ),
("53322222221", "Lucas Camacho", 13905472, 255, "apartamnto n° 64" );

INSERT INTO telefone VALUES 
("03997263817", 19997332218),
("52730165843", 19998285309);

INSERT INTO compras VALUES 
("", "2022/12/20", 500, "2023/01/20", "03997263817", ""),
("", "2023/01/25", 700, "2023/02/25", "52730165843", ""),
("", "2023/01/27", 900, "2023/02/27","53322222221", "");
