---
sidebar_position: 5
title: Настройка комментариев Gitalk
---

# Настройка системы комментариев

В нашем проекте используется Gitalk - система комментариев на основе GitHub Issues. Это позволяет посетителям оставлять комментарии, используя свои GitHub аккаунты, а все комментарии хранятся в виде GitHub Issues в репозитории проекта.

## Настройка OAuth приложения GitHub

Для работы Gitalk необходимо создать OAuth приложение GitHub:

1. Перейдите в [GitHub Developer Settings](https://github.com/settings/developers)
2. Нажмите на "New OAuth App" (или "Register a new application")
3. Заполните следующие поля:
   - **Application name**: Learn Agents Comments
   - **Homepage URL**: https://learn-agents.diy
   - **Application description**: Comments system for Learn Agents Book
   - **Authorization callback URL**: https://learn-agents.diy

4. После регистрации вы получите `Client ID` и `Client Secret`

## Настройка конфигурации Docusaurus

1. Обновите файл `docusaurus.config.ts`, добавив следующие параметры в раздел `customFields`:

```js
customFields: {
  gitalk: {
    clientID: 'YOUR_CLIENT_ID', // Замените на ваш Client ID
    clientSecret: 'YOUR_CLIENT_SECRET', // Замените на ваш Client Secret
    repo: 'REPO_NAME', // Репозиторий, где будут храниться комментарии
    owner: 'merkulov.courses', // Владелец репозитория
    admin: ['merkulov.courses', 'merkulov.ai'], // Администраторы, которые могут инициализировать комментарии
  },
},
```

## Как это работает

- Gitalk автоматически создает GitHub Issues для каждой страницы, на которой пользователь оставляет комментарий
- Заголовок issue соответствует заголовку страницы
- Все комментарии к странице хранятся в рамках одного issue
- Для авторизации используется OAuth GitHub

## Рекомендации по модерации

- Регулярно проверяйте новые issues в репозитории
- Используйте функцию labels в GitHub для категоризации обсуждений
- Закрывайте issues, которые содержат спам или неприемлемый контент 