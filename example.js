var wkHtmlToImage = require('easy-wkhtmltoimage');

var options = {
  input: 'https://google.com',
  output: 'google.png'
};

wkHtmlToImage.generate(options, (code, filename) => {
  if(code == 0) {
    console.log('Image is saved at: ' + filename);
  }
});
