let s = setInterval(function() {
  const htmlElement = document.querySelector('html');
  htmlElement.setAttribute('class', 'custom-theme-background reduce-motion theme-dark platform-web font-size-16');

  const titleElement = document.querySelector('title');
  titleElement.textContent = `abama discord`

  // Создаем новый стиль
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-client-themes', 'true');
  styleElement.setAttribute('data-rh', 'true');
  styleElement.textContent = '.custom-theme-background { --custom-theme-background: linear-gradient(64.92deg, var(--bg-gradient-crimson-moon-1) 16.17%, var(--bg-gradient-crimson-moon-2) 72%); }';

  // Добавляем новый стиль в раздел head
  const headElement = document.querySelector('head');
  headElement.appendChild(styleElement);

  // фото баннера
  var divElement = document.querySelector('.banner__6d414.popoutBanner__9f5b9');
  if (divElement) {
    if (!divElement.style.backgroundImage) {
      divElement.style.backgroundColor = 'rgb(210, 179, 25)';
      divElement.style.backgroundImage = 'url("/assets/56d360a7672d87843eaa.png")';
    }
  }
}, 200);
