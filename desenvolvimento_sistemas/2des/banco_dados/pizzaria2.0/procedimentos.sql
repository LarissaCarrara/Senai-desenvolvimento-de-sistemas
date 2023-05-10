-- O cliente walter paulo costenaro quer 1 pizza de atum e 2 pizzas napolitanas
INSERT INTO Pedidos Values ("", 98, '2023-05-10', '09:50', 99.11);

SELECT * clientes where nome = "Walter Paulo Costenaro";

("Walter Paulo Costenaro","Rua Anisio Alfredo da Silva Junior",253,null,"Zambom",null);

INSERT INTO Itens_Pedido VALUES(27, 27, 1, 32.29);

SELECT * from pizzas where nome = "Napolitana";  

INSERT INTO Itens_Pedido VALUES(27, 28, 1, 33.41);

-- CLiente será luiza de Melo quer 2 pizzas Napolitanas , passando 3 dados: client_id, pizza_id, qtd

DROP PROCEDURE IF EXISTS sp_inserir_pedido;
DELIMITER $

CREATE PROCEDURE sp_inserir_pedido(
    client_id INT, pizza_id INT, quantidade INT
)
BEGIN 
    DECLARE valor_total DECIMAL(10,2);
    DECLARE pedido_id INT;
    DECLARE valor DECIMAL(10,2);