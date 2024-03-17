# Используйте официальный образ Nginx
FROM nginx:alpine

# Удалите стандартный конфигурационный файл Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Скопируйте ваш файл конфигурации Nginx в контейнер
COPY nginx-http.conf /etc/nginx/conf.d
