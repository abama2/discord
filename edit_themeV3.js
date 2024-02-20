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
  // Обновляем цвет фона для элемента .gridContainer_de8cdc
  const gridContainerElement = document.querySelector('.gridContainer_de8cdc');
  if (gridContainerElement) {
    gridContainerElement.style.background = 'linear-gradient(64.92deg, var(--bg-gradient-crimson-moon-1) 16.17%, var(--bg-gradient-crimson-moon-2) 72%)';
  }

  // Обновляем цвет фона для элемента .chatHeaderBar__28ee6
  const chatHeaderBarElement = document.querySelector('.chatHeaderBar__28ee6');
  if (chatHeaderBarElement) {
    chatHeaderBarElement.style.background = 'linear-gradient(64.92deg, var(--bg-gradient-crimson-moon-1) 16.17%, var(--bg-gradient-crimson-moon-2) 72%)';
  }

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
  observer.disconnect();
};

const observerCallback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      updateUI();

      // После обновления интерфейса пользователя можно снова включить наблюдатель изменений
      observer.observe(targetNode, observerOptions);
      break;
    }
  }
};

// JavaScript техники для ускорения загрузки и работы Discord в браузере
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = document.querySelectorAll("img.lazy");
  let lazyVideos = document.querySelectorAll("video.lazy");

  lazyImages.forEach(image => {
    image.src = image.dataset.src;
  });

  lazyVideos.forEach(video => {
    video.src = video.dataset.src;
  });

  if (localStorage.getItem('cachedData')) {
    // Используйте закэшированные данные
  } else {
    // Получите данные с сервера
    // Сохраните их в localStorage
    localStorage.setItem('cachedData', data);
  }

  const worker = new Worker('worker.js');
  worker.postMessage('Сообщение для Web Worker');
  worker.onmessage = function(event) {
      console.log('Получено сообщение от Web Worker:', event.data);
  };

  window.addEventListener("load", function() {
    let script = document.createElement('script');
    script.src = 'additional_script.js';
    document.body.appendChild(script);
  });
});

// Создаем наблюдатель за изменениями в HTML
const observer = new MutationObserver(observerCallback);
const targetNode = document.querySelector('head');
const observerOptions = {
  childList: true,
  subtree: true
};

// Запускаем наблюдение за изменениями
observer.observe(targetNode, observerOptions);
