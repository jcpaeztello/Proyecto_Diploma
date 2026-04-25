# Backend IoT - API REST

API REST para la gestión de dispositivos IoT, lecturas de sensores y envío de comandos, desarrollada con **Node.js, Express y Sequelize**.

----------

## Descripción

Este proyecto implementa un backend básico para un sistema IoT que permite:

-   Registrar dispositivos
    
-   Recibir lecturas de sensores
    
-   Enviar comandos a dispositivos
    
-   Autenticación mediante **Bearer Token (JWT)**
    

----------

## Tecnologías utilizadas

-   Node.js
    
-   Express
    
-   Sequelize
    
-   MySQL
    
-   JWT (jsonwebtoken)
    
-   bcryptjs
    
-   Morgan
    
-   Cors
    

----------

## 📁 Estructura del proyecto

```
src/
│
├── config/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── database/
└── server.ts

```

----------

## Instalación

1.  Clonar el repositorio:
    

```bash
git clone <URL_DEL_REPO>
cd Proyecto_Diploma

```

2.  Instalar dependencias:
    

```bash
npm install

```

3.  Configurar variables de entorno:
    

Crear archivo `.env`:

```env
MYSQL_PORT=3000
MYSQL_NAME=iot_db
MYSQL_USER=root
MYSQL_PASSWORD=1234
MYSQL_HOST=localhost
JWT_SECRET=mi_clave_super_segura
```

4.  Ejecutar el proyecto:
    

```bash
npm run dev

```

----------

## Autenticación

El sistema usa **JWT (Bearer Token)**.

### Login

```http
POST /auth/login

```

Respuesta:

```json
{
  "token": "JWT_TOKEN"
}

```

----------

## Uso del token

Todas las rutas protegidas requieren el header:

```http
Authorization: Bearer TU_TOKEN

```

----------
