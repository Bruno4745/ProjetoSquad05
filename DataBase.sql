CREATE DATABASE  IF NOT EXISTS `entregalegal` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `entregalegal`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: entregalegal
-- ------------------------------------------------------
-- Server version	5.7.31

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
-- Table structure for table `depoimentos`
--

DROP TABLE IF EXISTS `depoimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `depoimentos` (
  `id_depoimentos` int(11) NOT NULL AUTO_INCREMENT,
  `depoimento` varchar(1000) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_depoimentos`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depoimentos`
--

LOCK TABLES `depoimentos` WRITE;
/*!40000 ALTER TABLE `depoimentos` DISABLE KEYS */;
INSERT INTO `depoimentos` VALUES (1,'Depoimento teste 1.'),(2,'Depoimento teste 2');
/*!40000 ALTER TABLE `depoimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parceiros`
--

DROP TABLE IF EXISTS `parceiros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parceiros` (
  `id_parceiros` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) DEFAULT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `logradouro` varchar(70) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `complemento` varchar(45) DEFAULT NULL,
  `cidade` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `cep` varchar(9) DEFAULT NULL,
  `contato` varchar(45) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `site` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_parceiros`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parceiros`
--

LOCK TABLES `parceiros` WRITE;
/*!40000 ALTER TABLE `parceiros` DISABLE KEYS */;
INSERT INTO `parceiros` VALUES (1,'Grupo de Apoio à Adoção','ABRAÇAR - COASSEJE','Rua 7 de Setembro',25,NULL,'Americana','SP','13465-320',' Roseli Matos de Queiroz Coca','(19) 3461-4050','convivencia@coasseje.com.br','www.coasseje.com.br'),(2,'Grupo de Apoio à Adoção','ABRACE',NULL,NULL,NULL,'Andradina','SP',NULL,' Luciana',' (18) 99826-0510','lu.fontes89@hotmail.com',NULL),(3,'Grupo de Apoio à Adoção','ACOLHE','Rua Arlindo Cressoni',NULL,NULL,'Araras','SP','13609-370','Frank Mellone','(19) 99729-5386','f_mellone@yahoo.com.br',NULL),(4,'Grupo de Apoio à Adoção','Consciência Solidária','Rua Vereador Luiz Alberto V. Santos',346,NULL,'Atibaia','SP','12941-030','Silvana','(11) 99999-9377','contato@ConscienciaSolidaria.org.br','www.conscienciasolidaria.org.br'),(5,'Grupo de Apoio à Adoção','Flor de Liz','Rua Paes Leme',640,NULL,'Bauru','SP','17013-680','Joaciara Araújo','(14) 99719-8810','associacaoflordeliz@hotmail.com',NULL),(6,'Grupo de Apoio à Adoção','Conectando Vidas','Rua Ivo Henrique',50,NULL,'Bertioga','SP','11250-234','Marcele Gulão','(13) 99788-4502','conectandovidasbertioga@gmail.com',NULL),(7,'Grupo de Apoio à Adoção','Birigui','Av. Nove de Julho',2505,NULL,'Birigui','SP','16204-040','Rosângela Bezerra','(18) 99788-0799','grupodeapoioadocaobirigui@outlook.com',NULL),(8,'Grupo de Apoio à Adoção','Laços do Coração',NULL,NULL,NULL,'Cachoeira Paulista','SP',NULL,'Edmar','(12) 99777-5666','liliansiqueira.adv@hotmail.com',NULL),(9,'Grupo de Apoio à Adoção','Capivari','Rua XV de Novembro',639,NULL,'Capivari','SP','13360-000','Letícia','(19) 99153-3767','capivari@adocao.org.br','http://www.adocao.org.br/capivari/'),(10,'Grupo de Apoio à Adoção','GAAC','Av. Fernanda',75,'','Carapicuíba','SP','06320-080','Fabiana','(11) 96395-6559','gaacarapicuiba@gmail.com',NULL);
/*!40000 ALTER TABLE `parceiros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'entregalegal'
--

--
-- Dumping routines for database 'entregalegal'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-22 17:21:13

CREATE TABLE `squad`(
`id_integrante` int NOT NULL AUTO_INCREMENT,
`nome` varchar(50),
`foto` varchar (200),
`linkedin` varchar(200),
`github` varchar(200),
`funcao` varchar(100),
PRIMARY KEY (`id_integrante`))
ENGINE=InnoDB CHARSET=utf8;

insert into squad values
(default, 'André Marques', './img/andremarques.png', 'https://www.linkedin.com/in/andremarques91/', 'https://github.com/andrem91', 'Programador'),
(default, 'Gilda Monteiro', './img/gildamonteiro.png', 'https://www.linkedin.com/in/giih97/', 'https://github.com/Giih97', 'Programadora'),
(default, 'Nathany Mendonça', './img/nathanymendonca.png', 'https://www.linkedin.com/in/nathanymendonca/', 'https://github.com/nathanymendonca', 'Programadora'),
(default, 'Diego Ribeiro', './img/diegoribeiro.png', 'https://www.linkedin.com/in/dr-diego-ribeiro/', 'https://github.com/dr-diegoribeiro', 'Programador'),
(default, 'Edmar Miller', './img/edmarmiller.png', 'https://www.linkedin.com/in/edmar-miller/', 'https://github.com/EdmarMiller', 'Programador'),
(default, 'Bruno Gouveia', './img/brunogouveia.png', 'https://www.linkedin.com/in/bruno-gouveia-4b21471b7/', 'https://github.com/Bruno4745', 'Programador');

CREATE TABLE IF NOT EXISTS `usuarios` (
      `id_adm` INT NOT NULL AUTO_INCREMENT,
      `nome` VARCHAR( 50 ) NOT NULL ,
      `usuario_adm` VARCHAR( 25 ) NOT NULL ,
      `senha` VARCHAR( 40 ) NOT NULL ,
      `email` VARCHAR( 100 ) NOT NULL ,
      `cadastro` DATETIME NOT NULL ,
      PRIMARY KEY (`id_adm`)) ENGINE=InnoDB CHARSET=utf8;
      