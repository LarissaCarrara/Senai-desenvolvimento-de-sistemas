DROP DATABASE IF EXISTS pedido;
CREATE DATABASE pedido;
USE pedido;

CREATE TABLE cliente (
    id_cliente INT NOT NULL,
    cpf INT NOT NULL,
    nome_cliente VARCHAR(30) NOT NULL,
    cep INT NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_cliente)
);

CREATE TABLE telefone(
    id_cliente INT NOT NULL,
    telefone INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES cliente(id_cliente)
);

   CREATE TABLE entregador(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    veiculo VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
   );
CREATE TABLE pedido(
   id INT NOT NULL AUTO_INCREMENT,
   id_cliente INT NOT NULL,
   id_entregador INT NOT NULL,
   data DATE NOT NULL,
   hora_pedido TIME NOT NULL,
   hora_entrega TIME NOT NULL,
   hora_fim TIME NOT NULL,
   quantidade INT NOT NULL,
   id_produto INT NOT NULL,
   preco_unitario FLOAT(6,2) NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_cliente) REFERENCES cliente(id_cliente),
   FOREIGN KEY(id_entregador) REFERENCES entregador(id)
   );

CREATE TABLE produto(
    id INT NOT NULL,
    nome VARCHAR(20),
    preco FLOAT NOT NULL,
    PRIMARY KEY(id)
);


-- importando cliente
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/pedidos/cliente_pedido.CSV'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- importando telefone
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/pedidos/telefone_pedido.CSV'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- importando entregador
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/pedidos/entregador_pedido.CSV'
INTO TABLE entregador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- importando pedido
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/pedidos/pedido_pedido.CSV'
INTO TABLE pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- importando produto
LOAD DATA INFILE 'D:/SENAI/ds/2des/bd/normalizacao_Excel/dados csv/pedidos/produto_pedido.CSV'
INTO TABLE produto
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;