/// <reference types="monaco-editor" />
import { LeanJsOpts } from 'lean-client-js-browser';
import * as React from 'react';
import { render } from 'react-dom';
import { registerLeanLanguage } from './langservice';
import { LeanEditor } from './LeanEditor';

class Exercise {
  html: JSX.Element;
  code: string;
}

const defaultValue =
  '-- Live javascript version of Lean\n\nexample (m n : ℕ) : m + n = n + m :=\nby simp';

const exercises: Exercise[] = [
  {
    html: <div>Exercise 1</div>,
    code: defaultValue,
  },
  {
    html: <div>Exercise 2</div>,
    code: defaultValue,
  },
];

function App() {

  return (
    <div>
      {
        exercises.map((exercise: Exercise, index: number): JSX.Element => {
          const exFile = monaco.Uri.file('exercise' + index + '.lean').fsPath;

          return (
            <div key={index}>
              <br/>
              {exercise.html}
              <LeanEditor file={exFile} initialValue={exercise.code} />
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
