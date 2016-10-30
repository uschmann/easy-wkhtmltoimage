const child_process = require('child_process');


/**
 * Simple wrapper for wkhtmltoimage.
 *
 */
class WkHtmlToImage {

    /**
     * Inititalize members in constructor.
     *
     */
    constructor() {
        this.command = 'wkhtmltoimage';
    }

    /**
     * Sets the path to the wkhtmltoimage binary.
     *
     * @param  {String} command path to the wkhtmltoimage binary.
     */
    setCommand(command) {
        this.command = command;
    }

    /**
     * Generates the image with the given options.
     *
     * @param  {Object} options  Options for wkhtmltoimage. The properties 'input' and 'output' are required.
     * @param  {Function(code, outputFile)} callback Will be called after the process has finished.
     * @return {ChildProcess} The spawned wkhtml to image childProcess.
     */
    generate(options, callback) {
        var args = [this.command, '--quiet'];
        const {input, output} = options;
        if(typeof input !== 'string') {
            throw "Please provide an input property";
        }
        if(typeof output !== 'string') {
            throw "Please provide an output property";
        }
        delete options.input;
        delete options.output;

        for (var key in options) {
          var val = options[key];
          if(key.length === 1) {
            key = '-' + key;
          }
          else {
            key = '--' + key.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
          }

          if (val !== false) {
            args.push(key);
          }

			    if (typeof val !== 'boolean') {
            if (typeof val === 'string') {
              val = '"' + val.replace(/(["\\$`])/g, '\\$1') + '"';
            }
            args.push(val);
			    }
		    }

        args.push(input);
        args.push(output);

        var child = child_process.spawn('/bin/sh', ['-c', args.join(' ')]);

        child.on('close', (code) => {
          if(callback) {
            callback(code, output);
          }
        });
    }

}

module.exports = new WkHtmlToImage();
