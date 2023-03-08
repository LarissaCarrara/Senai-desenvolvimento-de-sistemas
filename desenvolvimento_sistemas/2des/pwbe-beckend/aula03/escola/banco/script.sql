DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola;
USE escola;

CREATE TABLE professor(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE turma(

    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    abreviacao VARCHAR(5) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE aluno(
    ra VARCHAR(20) NOT NULL,
    id_turma INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    datanasc DATE NOT NULL,
    PRIMARY KEY(ra),
    FOREIGN KEY(id_turma) REFERENCES turma(id)
);

CREATE TABLE leciona(

    id_prof INT NOT NULL,
    id_turma INT NOT NULL,
    FOREIGN KEY(id_prof) REFERENCES professor(id)
    on delete cascade on update cascade,
    FOREIGN KEY(id_turma) REFERENCES turma(id)
     on delete cascade on update cascade
);

INSERT INTO professor values
("","Reenye", "Mobile"),
("", "Wellington", "banco de dados"),
("", "Ivo", "Mecanica");

INSERT INTO turma values
("", "desenvolvimento", "2des"),
("", "desenvolvimento", "3des"),
("", "desenvolvimento", "1des");

INSERT INTO aluno values
("01",1,"camacho", 15 ,"2000-04-02"),
("02",2,"karen", 18,"2000-04-12"),
("03",3,"vinicios",20, "2000-04-22"),
("04",3,"santos", 25,"2000-04-12");