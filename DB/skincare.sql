-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema skincaredb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `skincaredb` ;

-- -----------------------------------------------------
-- Schema skincaredb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `skincaredb` DEFAULT CHARACTER SET utf8 ;
USE `skincaredb` ;

-- -----------------------------------------------------
-- Table `product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `product` ;

CREATE TABLE IF NOT EXISTS `product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `size` INT NULL,
  `expiration_date` DATETIME NULL,
  `timeuse` VARCHAR(45) NULL,
  `quantity` INT NOT NULL,
  `texture` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS skincare@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'skincare'@'localhost' IDENTIFIED BY 'skincare';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'skincare'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `product`
-- -----------------------------------------------------
START TRANSACTION;
USE `skincaredb`;
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (1, 'Naturium', 'Retinol Complex Serum', 30, '2021-04-03', 'PM', 1, 'Serum');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (2, 'Naturium', 'Niacinamide Serum 12%', 30, '2021-04-03', 'AM/PM', 1, 'Serum');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (3, 'Naturium', 'Vitamin C Complex Serum', 30, '2021-04-03', 'AM', 1, 'Serum');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (4, 'Naturium', 'BHA Liquid Exfoliant 2%', 120, '2021-04-03', 'AM/PM', 1, 'Liquid');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (5, 'Naturium', 'Quadruple Hyaluronic Acid 5%', 30, '2021-04-03', 'AM/PM', 1, 'Serum');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (6, 'Naturium', 'Plant Ceramide Rich Moisture Cream', 50, '2021-04-03', 'AM/PM', 1, 'Cream');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (7, 'Kiehls', 'Ultra Facial Moisturizer', 125, '2021-04-03', 'AM/PM', 1, 'Cream');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (8, 'Kiehls', 'Calendula & Aloe Soothing Hydration Masque', 100, '2021-04-03', 'AM/PM', 1, 'Gel');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (9, 'Trader Joes', 'Watermelon Overnight Face Mask', 57, '2021-04-03', 'PM', 1, 'Gel');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (10, 'Trader Joes', 'Ultra Hydrating Gel Moisturizer', 75, '2021-04-03', 'PM', 1, 'Gel');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (11, 'Trader Joes', 'Lemongrass Coconut Body Oil', 143, '2021-04-03', 'AM/PM', 1, 'Oil');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (12, 'Proactiv', 'Clarifying Night Cream', 75, '2021-04-03', 'PM', 1, 'Cream');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (13, 'Monat', 'Rejuvenique', 30, '2021-04-03', 'AM/PM', 1, 'Oil');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (14, 'CeraVe', 'Facial Moisturizing Lotion', 89, '2021-04-03', 'PM', 1, 'Lotion');
INSERT INTO `product` (`id`, `brand`, `name`, `size`, `expiration_date`, `timeuse`, `quantity`, `texture`) VALUES (15, 'Mario Badesscu', 'Facial Spray with Aloe, Herbs and Rosewater', 59, '2021-04-03', 'AM/PM', 1, 'Spray');

COMMIT;

