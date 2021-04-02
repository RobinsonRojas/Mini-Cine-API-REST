CREATE DATABASE IF NOT EXISTS cinema;
use cinema;
CREATE TABLE IF NOT EXISTS usuario(
    id_usuario INT(3) NOT NULL AUTO_INCREMENT,
    nombre_usuario VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id_usuario)
);


insert into usuario (nombre_usuario) values ('Aldwin');
insert into usuario (nombre_usuario) values ('Joli');
insert into usuario (nombre_usuario) values ('Faydra');
insert into usuario (nombre_usuario) values ('Franny');
insert into usuario (nombre_usuario) values ('Adore');
insert into usuario (nombre_usuario) values ('Katharina');
insert into usuario (nombre_usuario) values ('Olva');
insert into usuario (nombre_usuario) values ('Colman');
insert into usuario (nombre_usuario) values ('Tish');
insert into usuario (nombre_usuario) values ('Jeffry');
insert into usuario (nombre_usuario) values ('Codie');
insert into usuario (nombre_usuario) values ('Richmond');
insert into usuario (nombre_usuario) values ('Cornie');
insert into usuario (nombre_usuario) values ('Ramon');
insert into usuario (nombre_usuario) values ('Dewitt');
insert into usuario (nombre_usuario) values ('Noel');
insert into usuario (nombre_usuario) values ('Niko');
insert into usuario (nombre_usuario) values ('Willi');
insert into usuario (nombre_usuario) values ('Timothy');
insert into usuario (nombre_usuario) values ('Amaleta');
insert into usuario (nombre_usuario) values ('Chryste');
insert into usuario (nombre_usuario) values ('Germaine');
insert into usuario (nombre_usuario) values ('Essie');
insert into usuario (nombre_usuario) values ('Valaree');
insert into usuario (nombre_usuario) values ('Robinetta');
insert into usuario (nombre_usuario) values ('Poppy');
insert into usuario (nombre_usuario) values ('Siana');
insert into usuario (nombre_usuario) values ('Basia');
insert into usuario (nombre_usuario) values ('Hilario');
insert into usuario (nombre_usuario) values ('Eb');

-- para el Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client.
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';