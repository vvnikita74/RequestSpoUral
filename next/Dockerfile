FROM node:18-alpine

# Установка необходимых системных зависимостей
RUN apk add --no-cache libc6-compat

# Настройка рабочей директории в контейнере
WORKDIR /app

# Добавление пользователя и установка правильных разрешений
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
RUN chown -R nodejs:nodejs /app && chmod -R 755 /app

# Переключение на пользователя nodejs
USER nodejs

# Копирование файлов проекта и скрипта запуска
COPY --chown=nodejs:nodejs . .

# Экспоз порта
EXPOSE 3000

# Окружающая среда
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Запуск приложения
CMD ["sh", "-c", "npm install && npm install --save-dev eslint && npm run build && node .next/standalone/server.js"]
