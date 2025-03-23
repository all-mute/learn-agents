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
    clientID: process.env.GITALK_CLIENT_ID, // Используем переменные окружения для секретов
    clientSecret: process.env.GITALK_CLIENT_SECRET,
    repo: 'learn-agents-comments', // Репозиторий, где будут храниться комментарии
    owner: 'all-mute', // Владелец репозитория
    admin: ['all-mute'], // Администраторы, которые могут инициализировать комментарии
  },
},
```

2. Добавьте секреты в настройки CI/CD вашей платформы развертывания (Vercel, Netlify и т.д.):
   - `GITALK_CLIENT_ID`: ID вашего OAuth приложения
   - `GITALK_CLIENT_SECRET`: Секрет вашего OAuth приложения

## Особенности реализации

### Поддержка темной темы

Мы реализовали поддержку темной темы для Gitalk с помощью CSS переменных Docusaurus. Стили находятся в файле `src/css/gitalk-custom.css` и автоматически применяются при переключении темы сайта.

### Уникальные идентификаторы для страниц

Каждая страница документации получает уникальный идентификатор на основе её URL-пути:

```typescript
const issueId = location.pathname.replace(/[^\w\-]/g, '-').slice(0, 50);
```

Это обеспечивает:
- Уникальность ID для каждой страницы
- Соответствие ID ограничениям GitHub (не больше 50 символов)
- Корректное форматирование спецсимволов в URL

## Как это работает

- Gitalk автоматически создает GitHub Issues для каждой страницы, на которой пользователь оставляет комментарий
- Заголовок issue соответствует заголовку страницы
- Все комментарии к странице хранятся в рамках одного issue
- Для авторизации используется OAuth GitHub
- Каждый issue получает метку (label) "comment" для удобства фильтрации

## Рекомендации по модерации

- Регулярно проверяйте новые issues в репозитории
- Используйте функцию labels в GitHub для категоризации обсуждений
- Закрывайте issues, которые содержат спам или неприемлемый контент
- При необходимости, можно включить опцию `createIssueManually: true` для контроля создания новых тем 