/*TRIGGER DE CLIENTES*/

CREATE TRIGGER backup_clientes
BEFORE DELETE
ON clientes
FOR EACH ROW
	INSERT INTO backup_clientes ( 
  `id`,
  `nome`,
  `email`,
  `telefone`,
  `createdAt`,
  `updatedAt`,
  `deletedAt` 
  ) VALUES (
	OLD.id,
    OLD.nome,
    OLD.email,
    OLD.telefone,
    OLD.createdAt,
    OLD.updatedAt,
    NOW()
  );
  
  /*TRIGGER DE PETS*/
  CREATE TRIGGER backup_pets
BEFORE DELETE
ON pets
FOR EACH ROW
	INSERT INTO backup_pets ( 
  `id`,
  `nome`,
  `tipo`,
  `porte`,
  `dataNasc`,
  `createdAt`,
  `updatedAt`,
  `clienteId`,
  `deletedAt` 
  ) VALUES (
	OLD.id,
    OLD.nome,
    OLD.tipo,
    OLD.porte,
    OLD.dataNasc,
    OLD.createdAt,
    OLD.updatedAt,
    OLD.clienteId,
    NOW()
  );
  
    /*TRIGGER DE PETS*/
  CREATE TRIGGER backup_agendamentos
BEFORE DELETE
ON agendamentos
FOR EACH ROW
	INSERT INTO backup_agendamentos ( 
  `id`,
  `petId` ,
  `servicoId`,
  `descricao` ,
  `dataAgendada`,
  `createdAt`,
  `updatedAt`,
  `deletedAt`
  ) VALUES (
	OLD.id,
    OLD.petId,
    OLD.servicoId,
    OLD.descricao,
    OLD.dataAgendada,
    OLD.createdAt,
    OLD.updatedAt,
    NOW()
  );