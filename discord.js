const htmlElement = document.querySelector('html');
htmlElement.setAttribute('class', 'custom-theme-background reduce-motion theme-dark platform-web font-size-16');

// Ñîçäàåì íîâûé ñòèëü
const styleElement = document.createElement('style');
styleElement.setAttribute('data-client-themes', 'true');
styleElement.setAttribute('data-rh', 'true');
styleElement.textContent = '.custom-theme-background { --custom-theme-background: linear-gradient(64.92deg, var(--bg-gradient-crimson-moon-1) 16.17%, var(--bg-gradient-crimson-moon-2) 72%); }';

// Äîáàâëÿåì íîâûé ñòèëü â ðàçäåë head
const headElement = document.querySelector('head');
headElement.appendChild(styleElement);
