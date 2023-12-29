const updateUI = () => {
// Укажите айди канала
const channel = String(id) 
const messages = "hi"
const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      'Authorization': '',// you token
      'Content-Type': 'application/json',
      'Origin': 'https://discord.com',
      'Referer': 'https://discord.com/channels/984016307072671814/' + channel,
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.199 Safari/537.36',
      'X-Debug-Options': 'bugReporterEnabled',
      'X-Discord-Locale': 'ru',
      'X-Discord-Timezone': 'Asia/Yekaterinburg',
      'X-Super-Properties': '',// найдите сами значение
    },
    body: JSON.stringify({ content: messages }),
  };
  
  fetch('https://discord.com/api/v9/channels/{айди канала}/messages', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

};

// Вызываем функцию обновления интерфейса каждые 5000 миллисекунд
// Можете выставить свою задержку
const sw = setInterval(updateUI, 5000);

//clearInterval(sw)