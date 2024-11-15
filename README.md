# TodoApp
Este es un proyecto de una aplicación de lista de tareas (Todo App) desarrollado con Angular 12 y un backend en .NET Framework. Permite a los usuarios agregar, editar, completar y eliminar tareas, utilizando una API REST para la persistencia de datos.

## Características
Agregar nuevas tareas.
Editar tareas existentes.
Marcar tareas como completadas o pendientes.
Eliminar tareas.
Validaciones en el frontend (títulos requeridos y con un límite de 100 caracteres).
# Requisitos previos
## Frontend
### Node.js (v14 o superior).
### Angular CLI (v12 o superior).
## Backend
### .NET Framework instalado.
V### isual Studio (opcional, para desarrollo y depuración).
### Base de datos configurada (como SQL Server).
## Herramientas
Git (para control de versiones).
Navegador web (Chrome, Edge, etc.).
## Configuración
Clonar el repositorio
bash
Copy code
git clone https://github.com/luisfnan/TodoAppFront.git
cd TodoAppFront
Instalar dependencias del frontend
Ejecuta el siguiente comando en la carpeta del frontend:

bash
Copy code
npm install
Ejecutar el frontend
bash
Copy code
ng serve
Abre el navegador en http://localhost:4200.

## Configurar el backend
Configura las reglas de CORS en tu backend .NET Framework:
Modifica el archivo Web.config para incluir las configuraciones de CORS (como se explicó antes).
Asegúrate de que el backend esté ejecutándose localmente (por ejemplo, en http://localhost:5000/api/tasks).
Estructura del proyecto
csharp
Copy code


##Endpoints
GET /api/tasks: Devuelve todas las tareas.
POST /api/tasks: Crea una nueva tarea.
PUT /api/tasks/{id}: Actualiza una tarea existente.
DELETE /api/tasks/{id}: Elimina una tarea.
