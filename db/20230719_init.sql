-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pop_pursuit
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pop_pursuit
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pop_pursuit` DEFAULT CHARACTER SET utf8 ;
USE `pop_pursuit` ;

-- -----------------------------------------------------
-- Table `pop_pursuit`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pop_pursuit`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pop_pursuit`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pop_pursuit`.`question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(255) NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`, `category_id`),
  INDEX `fk_question_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_question_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `pop_pursuit`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pop_pursuit`.`answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pop_pursuit`.`answer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(255) NOT NULL,
  `is_good_answer` TINYINT NOT NULL,
  `question_id` INT NOT NULL,
  PRIMARY KEY (`id`, `question_id`),
  INDEX `fk_answer_question_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_answer_question`
    FOREIGN KEY (`question_id`)
    REFERENCES `pop_pursuit`.`question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
