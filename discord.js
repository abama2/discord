const updateUI = () => {
  // Устанавливаем класс в элементе <html>
  const htmlElement = document.querySelector('html');
  htmlElement.classList.add('custom-theme-background', 'reduce-motion', 'theme-dark', 'platform-web', 'font-size-16');

  // Обновляем текст в элементе <title>
  const titleElement = document.querySelector('title');
  titleElement.textContent = 'abama discord';

  // Создаем стиль
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-client-themes', 'true');
  styleElement.setAttribute('data-rh', 'true');
  styleElement.textContent = '.custom-theme-background { --custom-theme-background: linear-gradient(64.92deg, var(--bg-gradient-crimson-moon-1) 16.17%, var(--bg-gradient-crimson-moon-2) 72%); }';

  // Добавляем стиль в раздел <head>
  const headElement = document.querySelector('head');
  headElement.appendChild(styleElement);

  // Обновляем фото баннера
  const divElement = document.querySelector('.banner__6d414.popoutBanner__9f5b9');
  if (divElement && !divElement.style.backgroundImage) {
    divElement.style.backgroundColor = 'rgb(210, 179, 25)';
    divElement.style.backgroundImage = 'url("/assets/56d360a7672d87843eaa.png")';
  }

  // Добавляем украшение (бетта)
  const avatarStackElement = document.querySelector('.avatarStack__6604a');
  if (avatarStackElement) {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('class', 'avatar__991e2');
    imgElement.setAttribute('src', 'https://cdn.discordapp.com/avatar-decoration-presets/a_fed43ab12698df65902ba06727e20c0e.png?size=240&passthrough=false');
    imgElement.setAttribute('alt', ' ');
    imgElement.setAttribute('aria-hidden', 'true');
    avatarStackElement.appendChild(imgElement);
  }
};

// Вызываем функцию обновления интерфейса каждые 250 миллисекунд
const sw = setInterval(updateUI, 250);
