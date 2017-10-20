DROP DATABASE IF EXISTS teste-app;
CREATE DATABASE IF NOT EXITS teste-app /*!40100 DEFAULT CHARACTER SET utf8 */;

USE teste-app;

CREATE TABLE `usuarios` (
  `idusuarios` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(180) NOT NULL,
  `Ativo` int(11) NOT NULL DEFAULT '1',
  `datacriacao` datetime NOT NULL,
  PRIMARY KEY (`idusuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `telas` (
  `nome` varchar(11) NOT NULL,
  `idusuarios` int(11) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`nome`,`idusuarios`),
  KEY `fktelas_usuarios_idx` (`idusuarios`),
  CONSTRAINT `fktelas_usuarios` FOREIGN KEY (`idusuarios`) REFERENCES `usuarios` (id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;