# easy-wkhtmltoimage

[![Build Status](https://travis-ci.org/uschmann/easy-wkhtmltoimage.svg?branch=master)](https://travis-ci.org/uschmann/easy-wkhtmltoimage)

## Installation
```bash
$ npm install easy-wkhtmltoimage
```

## Usage
```javascript
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
```
