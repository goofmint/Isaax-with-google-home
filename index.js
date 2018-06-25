var googlehome = require('google-home-notifier');
var language = 'ja'; // if not set 'us' language will be used

googlehome.ip('192.168.0.21', language);

const message = process.env.MESSAGE || 'こんにちは';

googlehome.notify(message, function(res) {
  console.log(res);
});
