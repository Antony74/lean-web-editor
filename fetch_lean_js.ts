import * as fs from 'fs';
import * as superagent from 'superagent';

const dir = __dirname + '/dist/';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const baseUrl = 'https://leanprover.github.io/live/latest/';

['lean_js_js.js', 'lean_js_wasm.js', 'lean_js_wasm.wasm', 'library.zip'].forEach((filename: string) => {

    fs.open(dir + filename, 'w', (fsError, fileDescriptor) => {
        if (fsError) {
            console.error('Error: ' + fsError.message);
        } else {
            superagent.get(baseUrl + filename).on('error', (superagentError) => {
                console.error(['Error:', superagentError.message, baseUrl + filename ].join(' '));
            }).pipe(fs.createWriteStream(null, {fd: fileDescriptor})).on('close', (superagentError) => {
                console.log(filename);
            });

        }
    });
});
