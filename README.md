# 🏨 NeoCity-Hotel

**NeoCity-Hotel** es una aplicación web desarrollada con **React** que ofrece una experiencia clara, visual e intuitiva para reservar habitaciones de hotel desde cualquier parte del país o del mundo. Cada habitación cuenta con un precio por noche, características específicas y disponibilidad actualizada.

Buscamos brindar una interfaz amigable tanto para el usuario como para el administrador del sistema.

## 🔧 Tecnologías Utilizadas

- HTML / CSS
- JavaScript
- React (librería principal)
- React-Bootstrap
- React Router DOM
- JSON Server (entorno de desarrollo)
- MongoDB Atlas (base de datos remota)
- Herramientas de despliegue (Netlify)

## 🚀 Funcionalidades

- Visualización de habitaciones disponibles.
- Reserva de habitaciones por parte del usuario.
- Panel de administración para crear, editar o eliminar habitaciones.
- Conexión a base de datos en la nube (MongoDB Atlas).
- Mock de datos local para testing con `json-server`.

## 📦 Instalación y uso

### 1. Clonar el repositorio

git clone https://github.com/JulianGr16/neoCityFront.git
cd neoCityFront

### 2. Instalar dependencias

npm install

### 3. Iniciar el servidor local y la app
Terminal 1:

json-server --watch db.json --port 3001

Terminal 2:

npm run dev

#### ⚠️ Asegurate de tener Node.js y json-server instalados globalmente (npm install -g json-server).

### 🌐 Conexión con MongoDB
Este proyecto utiliza MongoDB Atlas como base de datos principal. Se recomienda definir las variables de entorno necesarias en un archivo .env si se conecta a un backend propio.

## 📁 Estructura del proyecto

```bash
neoCityFront/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── helpers/
│   └── App.jsx
├── db.json
└── README.md
```

# ✨ Autores
+ JulianGr16

+ FrancoPereyra2