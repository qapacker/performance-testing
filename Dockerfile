# Usa la imagen oficial de Node.js como base
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe) para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia todo el código fuente de tu aplicación al contenedor
COPY . .

# Expone el puerto en el que la API estará corriendo (asumiendo que usa el puerto 3000)
EXPOSE 3000

# Define el comando para iniciar la API
CMD ["npm", "start"]