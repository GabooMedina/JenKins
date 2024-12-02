# Usar la imagen base oficial de Nginx
FROM nginx:alpine

# Copiar los archivos del proyecto al directorio predeterminado de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 3000
EXPOSE 80