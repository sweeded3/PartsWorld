# PartsWorld — Astro landing for GitHub Pages

PartsWorld теперь оформлен как демонстрационный Astro-проект для сравнения с обычным HTML-лендингом EuroSilk.

## Что изменилось

- Добавлена Astro-структура: `src/pages`, `src/components`, `src/layouts`, `src/data`, `src/styles`.
- Контент каталога, брендов, преимуществ, акций и контактов вынесен в `src/data/site.ts`.
- Лендинг разбит на компоненты: Header, Hero, Catalog, Benefits, Promos, Contacts, Footer.
- Добавлен `astro.config.mjs` с настройками GitHub Pages для репозитория `/PartsWorld`.
- Добавлен GitHub Actions workflow `.github/workflows/deploy.yml`, который собирает `dist` и публикует сайт через Pages.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## GitHub Pages

В настройках репозитория нужно выбрать:

```text
Settings -> Pages -> Source -> GitHub Actions
```

После этого каждый push в `main` будет запускать сборку и деплой Astro-сайта.

## Чем отличается от обычного HTML

В старой версии вся страница находилась в одном `index.html`: разметка, стили, данные и поведение были смешаны. В Astro-версии сайт разделен на компоненты, а повторяющийся контент генерируется из массивов данных. Это проще поддерживать, масштабировать и использовать как пример современной фронтенд-сборки.
