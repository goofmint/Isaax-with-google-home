const googlehome = require('google-home-notifier');
const language = 'ja'; // if not set 'us' language will be used
const fs = require('fs');

// IPアドレスは各自変更
googlehome.ip('192.168.0.21', language);

let old_message = '';

setInterval(() => {
  const message = process.env.MESSAGE || 'こんにちは';
  fs.readFile('./isaax-project.env', 'utf-8', (err, data) => {
    const match = data.match(/^MESSAGE="(.*)"/);
    const message = match[1];
    if (message !== old_message) {
      googlehome.notify(message, function(res) {
        console.log(res);
      });
      old_message = message;
    }
  });
}, 5000)
