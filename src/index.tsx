/// <reference types="monaco-editor" />
import { LeanJsOpts } from 'lean-client-js-browser';
import * as React from 'react';
import { render } from 'react-dom';
import { Exercise, exercises } from './exercises';
import { registerLeanLanguage } from './langservice';
import { LeanEditor } from './LeanEditor';

const session: Exercise[] = exercises[0];

function App() {

  return (
    <div>
      {
        session.map((exercise: Exercise, index: number): JSX.Element => {
          const exFile = monaco.Uri.file('exercise' + index + '.lean').fsPath;
          const code = exercise.code.join('\n');

          return (
            <div key={index}>
              <br/>
              {exercise.html}
              <LeanEditor file={exFile} initialValue={code} />
              <br/>
            </div>
          );
        })
      }
    </div>
  );
}

const leanJsOpts: LeanJsOpts = {
  javascript: './lean_js_js.js',
  libraryZip: './library.zip',
  webassemblyJs: './lean_js_wasm.js',
  webassemblyWasm: './lean_js_wasm.wasm',
};

// tslint:disable-next-line:no-var-requires
(window as any).require(['vs/editor/editor.main'], () => {
  registerLeanLanguage(leanJsOpts);
  render(
      <App />,
      document.getElementById('root'),
  );
});
