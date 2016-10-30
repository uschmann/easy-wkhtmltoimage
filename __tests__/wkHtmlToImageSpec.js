jest.mock('child_process');
var wkHtmlToImage = require('../WkHtmlToImage');

describe('WkhtmlToImage', () => {

    describe('command', () => {
      it("is set to ´wkhtmltoimage´ by default", () => {
          expect(wkHtmlToImage.command).toBe('wkhtmltoimage');
      });

      it('can be set by calling setCommand', () => {
          wkHtmlToImage.setCommand('/path/to/wkhtmltoimage');
          expect(wkHtmlToImage.command).toBe('/path/to/wkhtmltoimage');
      });
    });

    describe('generate', () => {
      wkHtmlToImage.generate({
        input: 'http://google.com',
        output: 'out.png',
        width: 1920,
        height: 1080,
        disableSmartWidth: true
      });
      it('calls spawn to run wkhtmltoimage with the appropiate parameters', () => {
          const calls = require('child_process').spawn.mock.calls;
          expect(calls.length).toBe(1);
          expect(calls[0][1][1]).toBe('wkhtmltoimage --quiet --width 1920 --height 1080 --disable-smart-width http://google.com out.png');
      });
    });

});
