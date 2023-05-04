/*COMANDOS*/
USE soulpet_db;

/*Criar tabelas*/
CREATE DATABASE soulpet_db;
CREATE TABLE clientes;
CREATE TABLE pets;
CREATE TABLE agendamentos;

/*Chamar as tabelas*/

SELECT * FROM clientes;
SELECT * FROM pets;
SELECT * FROM produtos;
SELECT * FROM ser3vicos;
SELECT * FROM agendamentos;
SELECT * FROM backup_clientes;
SELECT * FROM backup_pets;
SELECT * FROM backup_agendamentos;


/*Mostrar detalhes da tabelas*/

DESCRIBE clientes;
DESCRIBE pets;
DESCRIBE produtos;
DESCRIBE servicos;
DESCRIBE agendamentos;
DESCRIBE backups;


/*Mostrar tabelas*/

SHOW DATABASES;
SHOW TABLES;
SHOW TABLES LIKE 'backups';