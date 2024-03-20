# Используйте официальный образ Nginx
FROM nginx:alpine

# Удалите стандартный конфигурационный файл Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Скопируйте ваш файл конфигурации Nginx в контейнер
COPY ./nginx.conf /etc/nginx/conf.d

# Скопируйте сертификаты SSL в контейнер
COPY ./certs/fullchain.pem /etc/ssl/
COPY ./certs/privkey.pem /etc/ssl/

# Указать рабочую директорию
WORKDIR /usr/share/nginx/html


EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]