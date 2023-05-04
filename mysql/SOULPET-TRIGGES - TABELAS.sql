/*CRIAR TABELA PARA BACKUP DE CLIENTES*/

CREATE TABLE backup_clientes( 
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(130) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NOT NULL
  ) engine=innoDB;
  
  
  /*CRIAR TABELA PARA BACKUP DE PETS*/
  
  CREATE TABLE backup_pets( 
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(130) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `porte` varchar(255) NOT NULL,
  `dataNasc` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `clienteId` varchar(130) NOT NULL,
  `deletedAt` datetime NOT NULL
) engine=innoDB;

  /*CRIAR TABELA PARA BACKUP DE PETS*/
  
  CREATE TABLE backup_agendamentos( 
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `petId` varchar(130) NOT NULL,
  `servicoId` varchar(130) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `dataAgendada` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NOT NULL
) engine=innoDB;
