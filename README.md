# Gender Finder

Este proyecto es una página web simple desarrollada con HTML, CSS y JavaScript. La aplicación permite ingresar un nombre y, utilizando una API externa, intenta predecir si el nombre corresponde a un género masculino o femenino.

## 📁 Estructura del proyecto

```
Gender-finder-1/
├── index.html
├── home.html
├── css/
├── js/
├── images/
├── Dockerfile
└── README.md
```

## 🚀 Cómo ejecutar el proyecto con Docker

Para correr esta aplicación dentro de un contenedor Docker usando la imagen oficial de Nginx, seguí estos pasos:

### 1. Clonar el repositorio

```bash
git clone https://github.com/nanovall/Gender-finder-1.git
cd Gender-finder-1
```

### 2. Construir la imagen de Docker

```bash
docker build -t gender-finder .
```

Esto crea una imagen Docker llamada `gender-finder` usando el archivo `Dockerfile`.

### 3. Ejecutar el contenedor

```bash
docker run -p 8080:80 gender-finder
```

Esto ejecuta la aplicación y la expone en el puerto `8080`.

### 4. Ver la app en el navegador

Abrí tu navegador en [http://localhost:8080](http://localhost:8080)

---

## 🐳 Sobre el contenedor Docker

Este proyecto usa la imagen base `nginx:alpine` para servir archivos estáticos. El contenedor copia todo el contenido del proyecto al directorio `/usr/share/nginx/html`, que es donde Nginx sirve los archivos.

---

## 🔗 Repositorio

El código fuente está disponible en:  
👉 [https://github.com/nanovall/Gender-finder-1](https://github.com/nanovall/Gender-finder-1)

---

## 👨‍💻 Autor

- Mariano Vallone
