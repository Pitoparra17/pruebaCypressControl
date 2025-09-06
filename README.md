# prueba cypress control
# Objetivo
Levantar en local el **backend** y el **frontend**, con base de datos en **PostgreSQL**, y ejecutar las pruebas **E2E con Cypress** ya configuradas con **Allure Report**.

---

##  Requisitos previos
- **Node.js**
- **Git**
- **PostgreSQL** configurado (siguiendo las instrucciones de los README originales de backend y frontend)
- Puertos libres:  
  - Backend: 3000  
  - Frontend: 4100

---

## 1) Clonar los repositorios

### Backend
```bash
git clone https://github.com/gothinkster/node-express-realworld-example-app backend-realworld
cd backend-realworld
npm install
Configura las variables de entorno y la base de datos en PostgreSQL siguiendo el paso a paso del README del backend original.

# .env

DATABASE_URL=postgresql://DB_USER:DB_PASSWORD@localhost:5432/realworld"

Inicia el backend en el puerto 3000:
npm start

---
### Frontend
```bash
cd ..
git clone https://github.com/gothinkster/react-redux-realworld-example-app frontend-realworld
cd frontend-realworld
npm install

Configura las variables de entorno siguiendo el README del frontend original.

Inicia el frontend en el puerto 4100:

npm start

2)  Clonar el repositorio con Cypress
```bash
cd ..
git clone https://github.com/Pitoparra17/pruebaCypressControl.git pruebas-cypress

3) Instalar Cypress

cd pruebaCypressControl
npm install --save-dev cypress

El reporter Allure y la configuración de Cypress ya están integrados en el repositorio.

4)  Ejecutar pruebas

Con backend (3000) y frontend (4100) arriba, corre Cypress:

Modo interactivo

npm run test
