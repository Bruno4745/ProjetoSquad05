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
-- Table structure for table `cidade_parceiros`
--

DROP TABLE IF EXISTS `cidade_parceiros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidade_parceiros` (
  `idcidade_parceiros` int(11) NOT NULL AUTO_INCREMENT,
  `cidade` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`idcidade_parceiros`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade_parceiros`
--

LOCK TABLES `cidade_parceiros` WRITE;
/*!40000 ALTER TABLE `cidade_parceiros` DISABLE KEYS */;
INSERT INTO `cidade_parceiros` VALUES (1,'Americana'),(2,'Andradina'),(3,'Araras'),(4,'Atibaia'),(5,'Bauru'),(6,'Bertioga'),(7,'Birigui'),(8,'Cachoeira Paulista'),(9,'Campinas'),(10,'Cavipari'),(11,'Carapicuiba'),(12,'São Paulo');
/*!40000 ALTER TABLE `cidade_parceiros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `denuncia`
--

DROP TABLE IF EXISTS `denuncia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `denuncia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome_do_estabelecimento` varchar(45) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `horario` varchar(45) DEFAULT NULL,
  `mensagem` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `denuncia`
--

LOCK TABLES `denuncia` WRITE;
/*!40000 ALTER TABLE `denuncia` DISABLE KEYS */;
INSERT INTO `denuncia` VALUES (1,'a','d','a','a'),(2,'teste','teste','teste','teste'),(3,'a','d','a',''),(4,'a','d','a',''),(5,'teste','d','teste',''),(6,'teste','d','teste',''),(7,'a','','','');
/*!40000 ALTER TABLE `denuncia` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Table structure for table `estado_parceiros`
--

DROP TABLE IF EXISTS `estado_parceiros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_parceiros` (
  `idestado_parceiros` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`idestado_parceiros`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_parceiros`
--

LOCK TABLES `estado_parceiros` WRITE;
/*!40000 ALTER TABLE `estado_parceiros` DISABLE KEYS */;
INSERT INTO `estado_parceiros` VALUES (1,'SP'),(2,'RJ');
/*!40000 ALTER TABLE `estado_parceiros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faleconosco`
--

DROP TABLE IF EXISTS `faleconosco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faleconosco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `mensagem` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faleconosco`
--

LOCK TABLES `faleconosco` WRITE;
/*!40000 ALTER TABLE `faleconosco` DISABLE KEYS */;
INSERT INTO `faleconosco` VALUES (1,'Bruno Gouveia do Nascimento','asas','bruno_4745@hotmail.com');
/*!40000 ALTER TABLE `faleconosco` ENABLE KEYS */;
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
  `id_cidade` varchar(45) DEFAULT NULL,
  `id_estado` varchar(45) DEFAULT NULL,
  `cep` varchar(45) DEFAULT NULL,
  `contato` varchar(45) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `site_parceiro` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_parceiros`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parceiros`
--

LOCK TABLES `parceiros` WRITE;
/*!40000 ALTER TABLE `parceiros` DISABLE KEYS */;
INSERT INTO `parceiros` VALUES (1,'Grupo de Apoio à Adoção','ABRAÇAR - COASSEJE','Rua 7 de Setembro',25,NULL,'1','1','13465-320',' Roseli Matos de Queiroz Coca','(19) 3461-4050','convivencia@coasseje.com.br','www.coasseje.com.br'),(2,'Grupo de Apoio à Adoção','ABRACE',NULL,NULL,NULL,'2','1',NULL,' Luciana',' (18) 99826-0510','lu.fontes89@hotmail.com',NULL),(3,'Grupo de Apoio à Adoção','ACOLHE','Rua Arlindo Cressoni',NULL,NULL,'3','1','13609-370','Frank Mellone','(19) 99729-5386','f_mellone@yahoo.com.br',NULL),(4,'Grupo de Apoio à Adoção','Consciência Solidária','Rua Vereador Luiz Alberto V. Santos',346,NULL,'4','1','12941-030','Silvana','(11) 99999-9377','contato@ConscienciaSolidaria.org.br','www.conscienciasolidaria.org.br'),(5,'Grupo de Apoio à Adoção','Flor de Liz','Rua Paes Leme',640,NULL,'5','1','17013-680','Joaciara Araújo','(14) 99719-8810','associacaoflordeliz@hotmail.com',NULL),(6,'Grupo de Apoio à Adoção','Conectando Vidas','Rua Ivo Henrique',50,NULL,'6','1','11250-234','Marcele Gulão','(13) 99788-4502','conectandovidasbertioga@gmail.com',NULL),(7,'Grupo de Apoio à Adoção','Birigui','Av. Nove de Julho',2505,NULL,'7','1','16204-040','Rosângela Bezerra','(18) 99788-0799','grupodeapoioadocaobirigui@outlook.com',NULL),(8,'Grupo de Apoio à Adoção','Laços do Coração',NULL,NULL,NULL,'8','1',NULL,'Edmar','(12) 99777-5666','liliansiqueira.adv@hotmail.com',NULL),(9,'Grupo de Apoio à Adoção','Capivari','Rua XV de Novembro',639,NULL,'10','1','13360-000','Letícia','(19) 99153-3767','capivari@adocao.org.br','http://www.adocao.org.br/capivari/'),(10,'Grupo de Apoio à Adoção','GAAC','Av. Fernanda',75,'','11','1','06320-080','Fabiana','(11) 96395-6559','gaacarapicuiba@gmail.com',NULL),(11,'Grupo de Apoio à Adoção','Acolher','Rua Jacatirão',422,NULL,'12','1','04647-010','Cecília Zelic','(11) 97682-3754','contato@acolhergaad.org.br',NULL),(12,'Grupo de Apoio à Adoção','Associação Acalanto','Rua Madre Nineta Jonata',126,NULL,'12','1','02831-020','Eunice','(11) 97397-0537','contato@associacaoacalantosp.org.br',NULL),(13,'Grupo de Apoio à Adoção','Conta de Novo','Rua Gandavo',363,NULL,'12','1','04023-001','Maria José Correa','(11) 5082-3628','contadenovo@incec.org.br',NULL),(14,'Grupo de Apoio à Adoção','Famílias Brasileiras','Rua Damiana da Cunha',474,NULL,'12','1','02450-010','Dayane','(11) 95705-2691','familiasbrasileirasadocao@gmail.com',NULL),(15,'Grupo de Apoio à Adoção','Gesto de Amor','Av Águia de Haia',2983,NULL,'12','1','03694-000','Sonia','(11)94818-6006','gaa.gestodeamor@gmail.com',NULL),(16,'Grupo de Apoio à Adoção','GAASP','Rua Marquês de Itu',408,'Conjunto 105','12','1','01223-000','Cecília Reis','(11) 99102-4218','gaasp@gaasp.org.br','https://www.gaasp.org.br');
/*!40000 ALTER TABLE `parceiros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `squad`
--

DROP TABLE IF EXISTS `squad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `squad` (
  `id_integrante` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `linkedin` varchar(200) DEFAULT NULL,
  `github` varchar(200) DEFAULT NULL,
  `funcao` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_integrante`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `squad`
--

LOCK TABLES `squad` WRITE;
/*!40000 ALTER TABLE `squad` DISABLE KEYS */;
INSERT INTO `squad` VALUES (1,'André Marques','./img/andremarques.png','https://www.linkedin.com/in/andremarques91/','https://github.com/andrem91','Dev Fullstack - Frontend'),(2,'Bruno Gouveia','./img/brunogouveia.png','https://www.linkedin.com/in/bruno-gouveia-4b21471b7/','https://github.com/Bruno4745','Dev Fullstack - Backend'),(3,'Diego Ribeiro','./img/diegoribeiro.png','https://www.linkedin.com/in/dr-diego-ribeiro/','https://github.com/dr-diegoribeiro','Dev Fullstack - Social Median'),(4,'Edmar Miller','./img/edmarmiller.png','https://www.linkedin.com/in/edmar-miller/','https://github.com/EdmarMiller','Dev Fullstack - Frontend'),(5,'Gilda Monteiro','./img/gildamonteiro.png','https://www.linkedin.com/in/giih97/','https://github.com/Giih97','Dev Fullstack - Pesquisadora'),(6,'Nathany Mendonça','./img/nathanymendonca.png','https://www.linkedin.com/in/nathanymendonca/','https://github.com/nathanymendonca','Dev Fullstack - Pesquisadora');
/*!40000 ALTER TABLE `squad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_adm` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `usuario_adm` varchar(25) NOT NULL,
  `senha` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id_adm`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','admin','admin','admin@admin');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
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

-- Dump completed on 2021-01-20 14:29:29
