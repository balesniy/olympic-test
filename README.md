- установите зависимости командой `npm install`
- командой `npm run convert-rastr` создайте `webp` версии растровых изображений в папке `source/img/`
- команда `npm run dev` запускает сервер для разработки
- команда `npm run build` собирает оптимизированную версию проекта в папке `dist`
- команда `npm run preview` запускает сервер с оптимизированной версией
- спрайт с иконками собран из файлов в папке `source/img/sprite/`
- для доступа к спрайту из html используйте путь `href="/__spritemap#sprite-{название файла иконки}"`

```html
<svg>
  <use xlink:href="/__spritemap#sprite-user"></use>
</svg>
```

- для доступа к фрагменту изображения

```html
<img src="/__spritemap#sprite-logo-view" />
```
- команда `npm run test` запускает тесты. тестовый фреймворк обращается к адресу `localhost:3000` поэтому сначала сервер должен быть запущен с `npm run dev` или `npm run preview`
- команда `npm run w3c` проверяет валидность HTML
- команда `npm run linthtml` проверяет стиль HTML
- команда `npm run html-validate` проверяет ошибки HTML
- команда `npm run stylelint` проверяет валидность стилей
- команда `npm run lint-js` проверяет валидность JavaScript
- команда `npm run ls-lint` проверяет названия файлов
- команда `npm run editorconfig` проверяет формат файлов
