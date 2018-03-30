/// <reference types="monaco-editor" />
import { LeanJsOpts } from 'lean-client-js-browser';
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, RouteComponentProps } from 'react-router-dom';
import { registerLeanLanguage } from './langservice';
import { SessionComponent } from './SessionComponent';

function App() {

  return (
    <div>
      <Route path='/:fullExerciseNumber' component={SessionComponent} />
      <Route exact path='/' component={SessionComponent} />
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
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('root'),
  );
});
