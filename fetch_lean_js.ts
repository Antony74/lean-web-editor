import * as fs from 'fs';
import * as superagent from 'superagent';

const dir = __dirname + '/dist/';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const baseUrl = 'https://leanprover.github.io/live/latest/';

['lean_js_js.js', 'lean_js_wasm.js', 'lean_js_wasm.wasm', 'library.zip'].forEach((filename: string) => {
    superagent.get(baseUrl + filename).then((response: superagent.Response) => {
        fs.writeFile(dir + filename, response.body, (err: NodeJS.ErrnoException) => {
            if (err) {
                console.error('Error: ' + err.message);
            } else {
                console.log(filename);
            }
        });
    }).catch((error: superagent.ResponseError) => {
        console.error(['Error:', error.message, baseUrl + filename ].join(' '));
    });
});
