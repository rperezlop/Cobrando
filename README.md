# Prueba tecnica
### API

Siga los siguientes pasos para ejecutar la API.
### Pre-requisitos:
Antes de seguir con los pasos debe tener instalada las siguientes herarmientas.
- [Node.js](https://nodejs.org/) v16+
- [Docker](https://www.docker.com/products/docker-desktop)

## Pasos ejecutar de forma local:

1. Estar situado en el directorio `empleado-service-stack`
2. Inicie el servidor ejecutando el comando
```bash
npm run dev
```
3. Al terminar debe crear los contenedores ejecutando el comando
```bash
docker-compose up
```
Se recomienda  ejecutarlo en otra terminal
Asegúrese que el proceso esté completo 

con lo anterior debe ubicarse en el navegador y ejecutar el siguiente comando 

```bash
http://localhost:80

```
Estando allí se desplegará una venta solicitando un email y una contraseña la cual es:

```bash
Email:   rafa@rafa.com
Contraseña: admin
```
'Tambien lo encuentra en el archivo docker-compose.yml'
""
4. Pasos para  realizar la conexión 
Server -> clic Derecho, Register -> Server -> GENERAL: Name -> conexión

CONECTION:
Host name: postgres
Port : 5432
Database: cobrando
User name: root
Pass: admin


5. Ya estando conectado Realice,  la creación de la tabla empleado

---- Tabla de empleados
```bash
create table empleados(
	codigo serial primary key,
    nif varchar (9)not null,
	nombre varchar (100)not null,
	apellido1 varchar (100)not null,
	apellido2 varchar (100)not null,
	codigo_departamento integer
);
```
```bash

---- Tabla departamento 

create table departamento(
	codigo serial primary key,
	nombre varchar (100)not null,
	presupuesto float 
);
```

6. Importe las conexiones en Postman y realice las peticiones 