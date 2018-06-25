var googlehome = require('google-home-notifier');
var language = 'ja'; // if not set 'us' language will be used

googlehome.ip('192.168.0.21', language);

let old_message = '';

setInterval(() => {
  const message = process.env.MESSAGE || 'こんにちは';
  if (message !== old_message) {
    googlehome.notify(message, function(res) {
      console.log(res);
    });
    old_message = message;
  }
}, 5000)
