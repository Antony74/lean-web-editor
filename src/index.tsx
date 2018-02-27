/// <reference types="monaco-editor" />
import { LeanJsOpts } from 'lean-client-js-browser';
import * as React from 'react';
import { render } from 'react-dom';
import { registerLeanLanguage } from './langservice';
import { LeanEditor } from './LeanEditor';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
    return '%' + c.charCodeAt(0).toString(16);
  });
}

const defaultValue =
  '-- Live javascript version of Lean\n\nexample (m n : ℕ) : m + n = n + m :=\nby simp';

function App() {
  let value = defaultValue;
  if (window.location.hash.startsWith('#code=')) {
    value = decodeURIComponent(window.location.hash.substring(6));
  }

  const fn = monaco.Uri.file('test.lean').fsPath;
  return (
    <LeanEditor file={fn} initialValue={value} onValueChange={(newValue) => {
      history.replaceState(undefined, undefined, '#code=' + fixedEncodeURIComponent(newValue));
    }} />
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
