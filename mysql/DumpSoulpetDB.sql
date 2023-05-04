-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: soulpet_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendamentos`
--

DROP TABLE IF EXISTS `agendamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dataAgendada` date NOT NULL,
  `realizada` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `petId` int DEFAULT NULL,
  `servicoId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `petId` (`petId`),
  KEY `servicoId` (`servicoId`),
  CONSTRAINT `agendamentos_ibfk_1` FOREIGN KEY (`petId`) REFERENCES `pets` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `agendamentos_ibfk_2` FOREIGN KEY (`servicoId`) REFERENCES `servicos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamentos`
--

LOCK TABLES `agendamentos` WRITE;
/*!40000 ALTER TABLE `agendamentos` DISABLE KEYS */;
INSERT INTO `agendamentos` VALUES (1,'2020-10-01',0,'2023-05-03 13:53:52','2023-05-03 13:53:52',1,1),(2,'2020-10-01',0,'2023-05-03 13:53:56','2023-05-03 13:53:56',1,2);
/*!40000 ALTER TABLE `agendamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backup_clientes`
--

DROP TABLE IF EXISTS `backup_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backup_clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(130) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backup_clientes`
--

LOCK TABLES `backup_clientes` WRITE;
/*!40000 ALTER TABLE `backup_clientes` DISABLE KEYS */;
INSERT INTO `backup_clientes` VALUES (17,'Leonardo Pacheco Ferreira da Silva','le.nikiti@gmail.com','987654321','2023-04-26 19:46:24','2023-04-27 15:15:50','2023-05-02 15:59:33'),(22,'Leo Pacheco','leo@gmail.com','233433','2023-04-28 14:28:25','2023-05-02 20:34:27','2023-05-02 20:48:44'),(24,'Dani Lage','dani.email@gmail.com','233433','2023-04-29 00:58:06','2023-05-02 20:34:55','2023-05-02 20:48:46'),(27,'SuperCode1','lp@gmail.com','233433','2023-04-29 05:12:22','2023-04-29 05:17:02','2023-05-02 16:30:30'),(28,'silvana','sil@gmail.com','987654321','2023-04-29 14:17:05','2023-05-02 20:35:33','2023-05-02 20:48:48'),(32,'Ana Silvia','ana@gmail.com','5555','2023-04-29 16:20:59','2023-05-02 20:13:14','2023-05-02 20:48:49'),(33,'Guilherme','gabrielbraga0712@gmail.com','534345','2023-04-29 16:27:03','2023-05-02 20:36:27','2023-05-02 20:48:52'),(34,'Gustavo','guga@email.com','1111111111111','2023-05-02 18:21:54','2023-05-02 18:21:54','2023-05-02 19:00:26');
/*!40000 ALTER TABLE `backup_clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backup_enderecos`
--

DROP TABLE IF EXISTS `backup_enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backup_enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uf` varchar(130) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `rua` varchar(130) NOT NULL,
  `numero` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `clienteId` int NOT NULL,
  `deletedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backup_enderecos`
--

LOCK TABLES `backup_enderecos` WRITE;
/*!40000 ALTER TABLE `backup_enderecos` DISABLE KEYS */;
INSERT INTO `backup_enderecos` VALUES (22,'GO','Caldas Novas','75609034','Rua 23',12,'2023-04-29 16:27:04','2023-05-02 20:13:19',33,'2023-05-02 17:28:41');
/*!40000 ALTER TABLE `backup_enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backup_pets`
--

DROP TABLE IF EXISTS `backup_pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backup_pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(130) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `porte` varchar(255) NOT NULL,
  `dataNasc` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `clienteId` varchar(130) NOT NULL,
  `deletedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backup_pets`
--

LOCK TABLES `backup_pets` WRITE;
/*!40000 ALTER TABLE `backup_pets` DISABLE KEYS */;
INSERT INTO `backup_pets` VALUES (11,'Snoopy','Cachorro','Médio','2021-01-29 00:00:00','2023-04-29 17:05:56','2023-04-29 17:05:56','33','2023-05-02 19:45:01');
/*!40000 ALTER TABLE `backup_pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(130) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Diego','d.pacheco@gmail.com','(99) 9 9999-9999','2023-05-03 13:45:35','2023-05-03 13:45:35');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uf` varchar(2) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `numero` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `clienteId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clienteId` (`clienteId`),
  CONSTRAINT `enderecos_ibfk_1` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (1,'RJ','Maricá','24241-000','Rua 19','123','2023-05-03 13:45:35','2023-05-03 13:45:35',1);
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pets`
--

DROP TABLE IF EXISTS `pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(130) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `porte` varchar(100) NOT NULL,
  `dataNasc` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `clienteId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clienteId` (`clienteId`),
  CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES (1,'Barriga','Cachorro','Médio','2020-06-01','2023-05-03 13:46:42','2023-05-03 13:46:42',1);
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `preco` float NOT NULL,
  `descricao` text NOT NULL,
  `desconto` float NOT NULL,
  `dataDesconto` date NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(130) NOT NULL,
  `preco` decimal(10,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
INSERT INTO `servicos` VALUES (1,'Consulta',100,'2023-05-03 13:45:55','2023-05-03 13:45:55'),(2,'Banho e Tosa',80,'2023-05-03 13:46:12','2023-05-03 13:46:12');
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'soulpet_db'
--

--
-- Dumping routines for database 'soulpet_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-03 14:23:33
