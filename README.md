
# API de Generación de Usuarios Aleatorios

Este proyecto es una API sencilla creada con Node.js, Express y MongoDB para generar datos aleatorios, diseñada específicamente para pruebas de rendimiento con K6. El entorno de ejecución se ha configurado con Docker y Docker Compose, asegurando una implementación fácil y reproducible.

## Características
- Generación de datos aleatorios para usuarios (nombre, correo electrónico y edad).
- Pruebas de rendimiento como carga, estrés, picos y más, utilizando K6.
- Integración sencilla y despliegue a través de Docker.
- Compatibilidad con [QAPacker](https://qapacker.com/), una plataforma interactiva para aprender y practicar pruebas con K6.

---

## Proyecto Interactivo: QAPacker
Este proyecto forma parte de la iniciativa [QAPacker](https://qapacker.com/), una plataforma educativa diseñada para enseñar herramientas de pruebas modernas como K6. Con QAPacker, puedes:

- Aprender los conceptos básicos y avanzados de K6 mediante ejercicios interactivos.
- Ejecutar pruebas de rendimiento en entornos controlados y reales.
- Analizar resultados de pruebas con retroalimentación inmediata.
- Explorar estrategias avanzadas como pruebas de estrés, carga y estabilidad prolongada.

Aprovecha esta plataforma como un recurso integral para mejorar tus habilidades en pruebas de rendimiento.

---

## Requisitos Previos
1. Tener instalado [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/).
2. Tener instalado [K6](https://k6.io/) para ejecutar las pruebas de rendimiento.
3. tener instalado node verifica los node_modules 
4. tener instalado dotenv para reconocer variables de entorno 

---

## Configuración del Proyecto
### Archivos principales
- **`Dockerfile`**: Configuración del contenedor de la aplicación.
- **`docker-compose.yml`**: Orquestación para la aplicación y base de datos.
- **`index.js`**: Archivo principal de la API.
- **`tests/`**: Carpeta con los scripts de prueba de rendimiento para K6.

---

## Uso
### Construcción y Ejecución con Docker
Para iniciar la API con Docker, utiliza el siguiente comando:

```sh
docker-compose up
```

Esto levantará la aplicación en un contenedor, lista para recibir solicitudes.

---

## Pruebas de Rendimiento con K6
A continuación, se describen los diferentes tipos de pruebas que puedes realizar con K6.

### Prueba Simple
Ejecuta una prueba básica para comprobar la funcionalidad de la API:

```sh
k6 run tests/simple-test.js
```

### Prueba de Estrés
Simula una carga de trabajo creciente para probar los límites de la API:

```sh
k6 run tests/stress-test.js
```

### Prueba de Carga
Simula una cantidad fija de usuarios concurrentes para verificar la estabilidad bajo carga sostenida:

```sh
k6 run tests/load-test.js
```

### Prueba de Pico
Simula un aumento repentino de la carga para medir la reacción de la API:

```sh
k6 run tests/spike-test.js
```

### Prueba de Soak
Ejecuta una prueba prolongada para detectar problemas relacionados con la estabilidad o fugas de memoria:

```sh
k6 run tests/soak-test.js
```

---

## Estructura de la Respuesta de la API
La API genera datos de usuarios en el siguiente formato:

```json
[
  {
    "name": "User0",
    "email": "user0@example.com",
    "age": 25
  },
  {
    "name": "User1",
    "email": "user1@example.com",
    "age": 34
  }
]
```

Cada solicitud puede generar una cantidad configurable de usuarios.

---

## Extensiones y Personalización
1. Modifica el archivo `index.js` para ajustar la lógica de generación de datos.
2. Crea nuevos scripts de prueba en la carpeta `tests/` para necesidades específicas.
3. Configura parámetros adicionales en `docker-compose.yml` para personalizar el entorno según tus requisitos.

---

## Recursos Adicionales
- [Documentación de Docker Compose](https://docs.docker.com/compose/)
- [Documentación de K6](https://k6.io/docs/)

---

## Autor
Este proyecto fue desarrollado como un recurso educativo para pruebas de rendimiento, en colaboración con la plataforma interactiva [QAPacker](https://qapacker.com/). Explora QAPacker para profundizar tus conocimientos y dominar el uso de K6 en entornos modernos.
