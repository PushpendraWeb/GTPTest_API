CREATE DATABASE  IF NOT EXISTS `GTP_TEST` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `GTP_TEST`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: kartitechdb.ccjfdjycfuj2.ap-south-1.rds.amazonaws.com    Database: GTP_TEST
-- ------------------------------------------------------
-- Server version	8.0.35

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_no` varchar(45) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `product_details` longtext NOT NULL,
  `quantity` int DEFAULT NULL,
  `MRP` decimal(11,2) NOT NULL DEFAULT '0.00',
  `sale_price` decimal(11,2) NOT NULL DEFAULT '0.00',
  `discount` decimal(11,2) NOT NULL DEFAULT '0.00',
  `main_image` varchar(450) DEFAULT NULL,
  `status` int DEFAULT '1',
  `created_by` int NOT NULL,
  `created_on` datetime NOT NULL,
  `updated_by` int DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'4IK4I7JZ','Iphone11','best product','only for testing',15,200.00,100.00,100.00,'121.png',1,1,'2024-12-10 08:21:25',1,NULL),(2,'5BZ1OQ9C','samsung','best product','only for testing',10,1000.00,700.00,300.00,'121.png',1,1,'2024-12-10 09:38:34',1,NULL),(3,'UPK6T4O3','Boat Headphone','best product','only for testing',5,1500.00,1200.00,300.00,'121.png',1,1,'2024-12-10 09:40:41',1,NULL),(4,'VR60UV08','Boat Headddphone','best product','only for testing',5,1500.00,1200.00,300.00,'121.png',1,1,'2024-12-10 10:02:45',NULL,NULL),(5,'J4L1RBQ2','Sony Earbuds','Sony Earbuds','Best prodcut',5,1500.00,1200.00,300.00,'121.png',1,1,'2024-12-10 11:53:33',NULL,NULL),(6,'QAN7CXJ7','Western Digital HDD','Title 44: Premium Quality Product','Description 3: This is a detailed description of the product with key features and benefits.',1,8411.00,7986.00,425.00,'121.png',1,1,'2024-12-10 11:56:10',NULL,NULL),(7,'IJYL8IRU','AKG K371','Title 12: Premium Quality Product','Description 40: This is a detailed description of the product with key features and benefits.',9,10465.00,10046.00,419.00,'121.png',1,1,'2024-12-10 11:56:15',NULL,NULL),(8,'GDQPMQUM','AMD RX 6800 XT','Title 56: Premium Quality Product','Description 95: This is a detailed description of the product with key features and benefits.',7,1799.00,1338.00,461.00,'121.png',1,1,'2024-12-10 11:56:17',NULL,NULL),(9,'ETEE1RZC','Acer Predator','Title 59: Premium Quality Product','Description 28: This is a detailed description of the product with key features and benefits.',7,9143.00,8897.00,246.00,'121.png',1,1,'2024-12-10 11:56:17',NULL,NULL),(10,'J0VEYT4U','ROG Strix Gaming Chair','Title 48: Premium Quality Product','Description 27: This is a detailed description of the product with key features and benefits.',8,6745.00,6538.00,207.00,'121.png',1,1,'2024-12-10 11:56:18',NULL,NULL),(11,'QQBORLA8','Lenovo Legion','Title 1: Premium Quality Product','Description 40: This is a detailed description of the product with key features and benefits.',6,1912.00,1859.00,53.00,'121.png',1,1,'2024-12-10 11:56:19',NULL,NULL),(12,'NNJZ0RTV','Microsoft Ergonomic Mouse','Title 54: Premium Quality Product','Description 2: This is a detailed description of the product with key features and benefits.',8,812.00,627.00,185.00,'121.png',1,1,'2024-12-10 11:56:20',NULL,NULL),(13,'QK7MZ8OP','TP-Link Router','Title 10: Premium Quality Product','Description 53: This is a detailed description of the product with key features and benefits.',1,4095.00,3675.00,420.00,'121.png',1,1,'2024-12-10 11:56:21',NULL,NULL),(14,'JW5DWCGS','SteelSeries Arctis 7','Title 82: Premium Quality Product','Description 87: This is a detailed description of the product with key features and benefits.',4,1999.00,1642.00,357.00,'121.png',1,1,'2024-12-10 11:56:22',NULL,NULL),(15,'DBD57QRR','DXRacer Master','Title 89: Premium Quality Product','Description 8: This is a detailed description of the product with key features and benefits.',3,4606.00,4158.00,448.00,'121.png',1,1,'2024-12-10 11:56:23',NULL,NULL),(16,'KMGQIS5X','pamlak','singh','safsdfsd',99,100.00,90.00,10.00,'121.png',1,1,'2024-12-11 08:02:10',NULL,NULL);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `polling`
--

DROP TABLE IF EXISTS `polling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `polling` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(45) NOT NULL,
  `username` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `polling`
--

LOCK TABLES `polling` WRITE;
/*!40000 ALTER TABLE `polling` DISABLE KEYS */;
INSERT INTO `polling` VALUES (1,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:19:52'),(2,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:35:51'),(3,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:36:43'),(4,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:38:44'),(5,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:48:58'),(6,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:03'),(7,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:05'),(8,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:06'),(9,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:11'),(10,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:37'),(11,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:38'),(12,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:39'),(13,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:40'),(14,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:40'),(15,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:41'),(16,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:42'),(17,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:42'),(18,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-10 11:49:43'),(19,'5BZ1OQ9C','user 1025','I would like more details about this product.','2024-12-11 10:07:26'),(20,'13','fsadfsda','sdfsd','2024-12-11 11:07:07'),(21,'13','dfgdfg','dfgdfg','2024-12-11 11:09:45'),(22,'13','sdfsd','dfsdf','2024-12-11 11:10:29'),(23,'13','werqwe','gareg','2024-12-11 11:12:48'),(24,'13','fwetg','gasdga','2024-12-11 11:14:00'),(25,'14','dfgdsfg','dfgea','2024-12-11 11:14:13'),(26,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:16'),(27,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:17'),(28,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:17'),(29,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:17'),(30,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:17'),(31,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:18'),(32,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:18'),(33,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:18'),(34,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:18'),(35,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:18'),(36,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:19'),(37,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:19'),(38,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:19'),(39,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:19'),(40,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:19'),(41,'14','dfgdsfgdfager','dfgeasadgwrq','2024-12-11 11:14:19'),(42,'1','werfwqe','werweq','2024-12-11 11:20:56'),(43,'1','werfwqe','werweq','2024-12-11 11:21:01'),(44,'1','werfwqe','werweq','2024-12-11 11:21:01'),(45,'1','werfwqe','werweq','2024-12-11 11:21:04'),(46,'1','werfwqe','werweq','2024-12-11 11:21:06'),(47,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:02'),(48,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:06'),(49,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:06'),(50,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:06'),(51,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:06'),(52,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:08'),(53,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:09'),(54,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:13'),(55,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:15'),(56,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:15'),(57,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:15'),(58,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:15'),(59,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:16'),(60,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:45'),(61,'7','nothing','huksdahfsadfsdhfhj','2024-12-11 11:59:47');
/*!40000 ALTER TABLE `polling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mobile_no` varchar(11) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `address` longtext NOT NULL,
  `zip_code` varchar(10) NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `created_by` int DEFAULT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Ravi Kumar','ravi@gmail.com','9876543210','12301230','address','208020',1,NULL,'2024-12-10 08:03:45'),(2,'fjLnR ZreCEOK','gPBCo@example.com','7183720274','sVTYTfRfJyCd','','',1,NULL,'2024-12-10 12:03:23'),(3,'xJwYE vJLZUsK','EbWqw@example.com','4084478382','SbUyTUHKAqAF','','',1,NULL,'2024-12-10 12:03:25'),(4,'PZqfn pfYVsER','ZgecG@example.com','5164748046','lpqUvuTzjWdx','','',1,NULL,'2024-12-10 12:03:26'),(5,'kEogJ ZBTohxN','fDOwG@example.com','1989764026','owPjKFfqqurm','','',1,NULL,'2024-12-10 12:03:29'),(6,'PThsw JzDUlIQ','lKdka@example.com','7656553186','mrDvikdvgpQk','','',1,NULL,'2024-12-10 12:03:29'),(7,'pPIhp OnqPeuT','wNiGd@example.com','0459278039','epFqBpNkirGS','','',1,NULL,'2024-12-10 12:03:35'),(8,'wXiIM eZnhvsJ','obykV@example.com','4822457912','832743797','','',1,NULL,'2024-12-10 12:12:25'),(9,'GlbSX qcMaFAA','uAJmo@example.com','5375158906','832755389','','',1,NULL,'2024-12-10 12:12:36'),(10,'hqHcM yvJXMnp','DfHbF@example.com','5941542095','832780260','','',1,NULL,'2024-12-10 12:13:01'),(11,'avrZp IuYcqPM','jFSiH@example.com','0296516406','832784766','','',1,NULL,'2024-12-10 12:13:06'),(12,'VsFYf TpWVFrH','amQrM@example.com','7907172836','832785810','','',1,NULL,'2024-12-10 12:13:07'),(13,'mOFLx NDtVJVu','jhtHe@example.com','1772638951','832786817','','',1,NULL,'2024-12-10 12:13:08'),(14,'iio','email@gmail.com','1020304050','121345678','','',1,NULL,'2024-12-11 05:57:19'),(15,'sdf','mail@gmail.com','2020202020','12345678','','',1,NULL,'2024-12-11 06:01:45'),(16,'jksdhfjs','hfsh@gmail.comn','1022556666','10203040','','',1,NULL,'2024-12-11 06:16:27'),(17,'sdfs','sdf@gmail.com','2020202021','sfsadfs45','','',1,NULL,'2024-12-11 06:23:50'),(18,'tshar','tshar@gmail.com','9983014750','12345678','','',1,NULL,'2024-12-11 06:52:51'),(19,'iio','iio@gmail.com','1020301040','12345678','','',1,NULL,'2024-12-11 07:05:51');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-11 17:40:03
