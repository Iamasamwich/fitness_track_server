-- MySQL dump 10.13  Distrib 5.7.35, for Linux (x86_64)
--
-- Host: us-cdbr-east-04.cleardb.com    Database: heroku_d8e61673ad0234a
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `distance` float unsigned NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `weight` int(10) unsigned NOT NULL,
  `route` tinyblob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `session_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES (34,'eed725e178083546c2530ae194c8f5f7','2020-07-05',21.73,3674,72,_binary 'Mitchy Kedron'),(35,'eed725e178083546c2530ae194c8f5f7','2020-07-05',13.59,3027,72,_binary 'Hospital and back'),(36,'eed725e178083546c2530ae194c8f5f7','2020-07-15',15.22,2667,72,_binary 'Arana Hills RLC'),(37,'eed725e178083546c2530ae194c8f5f7','2020-08-13',19.08,3376,72,_binary 'Breaky Creek Shaw St KBBW'),(38,'eed725e178083546c2530ae194c8f5f7','2020-09-01',16.62,2488,72,_binary 'KBBW to Shaw Rd'),(39,'eed725e178083546c2530ae194c8f5f7','2020-09-02',17.31,3093,72,_binary 'KBBW western end'),(40,'eed725e178083546c2530ae194c8f5f7','2020-09-03',22.06,3357,72,_binary 'JSBL'),(41,'eed725e178083546c2530ae194c8f5f7','2020-09-06',35.82,4914,72,_binary 'Nudgee Rd'),(42,'eed725e178083546c2530ae194c8f5f7','2020-09-09',22.15,3147,72,_binary 'JSBL'),(43,'eed725e178083546c2530ae194c8f5f7','2020-09-16',30.58,4448,72,_binary 'Nudgee Rd Turnoff'),(44,'eed725e178083546c2530ae194c8f5f7','2020-09-19',22.87,3259,72,_binary 'JSBL'),(45,'eed725e178083546c2530ae194c8f5f7','2020-09-20',36.88,6966,72,_binary 'Sth Bnk, Hamilton, Albion, Hospital'),(46,'eed725e178083546c2530ae194c8f5f7','2020-09-21',30.25,4472,72,_binary 'Nudgee turnoff'),(47,'eed725e178083546c2530ae194c8f5f7','2020-09-26',17.21,2641,72,_binary 'KBBW western end'),(48,'eed725e178083546c2530ae194c8f5f7','2020-09-27',41.28,5700,72,_binary 'Nudgee beach'),(49,'eed725e178083546c2530ae194c8f5f7','2020-10-01',35.55,4600,72,_binary 'Nudgee Rd'),(50,'eed725e178083546c2530ae194c8f5f7','2020-10-03',31.68,4659,72,_binary 'Pedal Heads'),(51,'eed725e178083546c2530ae194c8f5f7','2020-10-05',67.52,10305,72,_binary 'Nudgee beach, Rach & Pete\'s'),(52,'eed725e178083546c2530ae194c8f5f7','2020-10-08',42.13,5583,72,_binary 'Nudgee Beach'),(53,'eed725e178083546c2530ae194c8f5f7','2020-10-23',35.57,4816,72,_binary 'Nudgee Rd'),(54,'eed725e178083546c2530ae194c8f5f7','2020-10-30',35.58,4734,72,_binary 'Nudgee Beach Rd'),(55,'eed725e178083546c2530ae194c8f5f7','2020-11-04',42.35,5444,72,_binary 'Nudgee Beach'),(56,'eed725e178083546c2530ae194c8f5f7','2020-11-07',10.12,1576,72,_binary 'Wheel of Brisbane'),(57,'eed725e178083546c2530ae194c8f5f7','2020-11-12',42.64,5675,72,_binary 'Nudgee Beach'),(58,'eed725e178083546c2530ae194c8f5f7','2020-11-26',42.67,5708,72,_binary 'Nudgee Beach'),(59,'eed725e178083546c2530ae194c8f5f7','2021-01-23',22.14,3185,72,_binary 'JSBL'),(60,'eed725e178083546c2530ae194c8f5f7','2021-05-16',16.9,2664,72,_binary 'Norths RFC'),(61,'eed725e178083546c2530ae194c8f5f7','2021-05-18',22.14,3441,72,_binary 'JSBL'),(62,'eed725e178083546c2530ae194c8f5f7','2021-05-25',24.07,3728,72,_binary 'JSBL with blackout detour'),(63,'eed725e178083546c2530ae194c8f5f7','2021-05-28',19.87,3185,72,_binary 'Keperra GC'),(64,'eed725e178083546c2530ae194c8f5f7','2021-06-06',29.9,4304,72,_binary 'Nudgee Rd Turnoff'),(72,'eed725e178083546c2530ae194c8f5f7','2021-07-13',35.72,4951,74,_binary 'Nudgee Rd'),(73,'eed725e178083546c2530ae194c8f5f7','2021-07-05',23.53,3994,74,_binary 'Coolah St'),(74,'eed725e178083546c2530ae194c8f5f7','2021-06-28',22.26,3240,74,_binary 'JSBL'),(75,'eed725e178083546c2530ae194c8f5f7','2021-07-27',22.14,3255,75,_binary 'JSBL'),(80,'eed725e178083546c2530ae194c8f5f7','2021-08-24',13.33,3973,74,_binary 'fake'),(81,'eed725e178083546c2530ae194c8f5f7','2021-08-26',23.8,3196,74,_binary 'Round the block'),(82,'eed725e178083546c2530ae194c8f5f7','2021-08-27',45,8527,73,_binary 'Fake'),(83,'eed725e178083546c2530ae194c8f5f7','2021-08-28',12,2700,72,_binary 'fake'),(84,'eed725e178083546c2530ae194c8f5f7','2021-08-29',20,3780,75,_binary 'fake'),(85,'eed725e178083546c2530ae194c8f5f7','2021-08-30',21,3600,73,_binary 'fake'),(86,'eed725e178083546c2530ae194c8f5f7','2021-08-30',22,4500,72,_binary 'fake'),(87,'eed725e178083546c2530ae194c8f5f7','2021-08-31',12,1920,75,_binary 'fake'),(88,'eed725e178083546c2530ae194c8f5f7','2021-08-26',1,3600,1,_binary 'a'),(89,'eed725e178083546c2530ae194c8f5f7','2021-08-26',1,3600,1,_binary 'a'),(90,'eed725e178083546c2530ae194c8f5f7','2021-08-26',1,3661,1,_binary 'a'),(91,'eed725e178083546c2530ae194c8f5f7','2021-08-26',1,3600,1,_binary 'A'),(95,'eed725e178083546c2530ae194c8f5f7','2021-09-01',200.01,26473,90,_binary 'Yay it\'s working');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pword` varchar(255) NOT NULL,
  `tandc` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('080516766f30a50d50f45f2a6d687396','bill@hotmail.com','Bill','$2b$10$r/OcRzErUa92rgasihV5LeivlE3xj3ro1IGbVle01IHZd3Veuaieu','1.0'),('eed725e178083546c2530ae194c8f5f7','sam@sam.com','Sam','$2b$10$QzmteGwCLrg/mMk6wI2/Fe8KzphRj5MigDR63WKl4tQgv0HIYv3p2',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-26 20:40:21
