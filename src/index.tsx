/// <reference types="monaco-editor" />
import { LeanJsOpts } from 'lean-client-js-browser';
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Exercise, Session, sessions } from './exercises';
import { registerLeanLanguage } from './langservice';
import { LeanEditor } from './LeanEditor';

class TheSession extends React.Component<any> {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  render() {

    let nSession: number = parseInt(this.props.match.params.pageNumber, 10) - 1;

    if (nSession < 0 || nSession >= sessions.length) {
      nSession = 0;
    }

    const session: Session = sessions[nSession];

    return (
      <div>
      <h1>{session.name}</h1>
      {
        session.exercises.map((exercise: Exercise, index: number): JSX.Element => {
          const exFile = monaco.Uri.file('exercise' + index + '.lean').fsPath;
          const code = exercise.code.join('\n');

          return (
            <div key={index}>
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
}

function App() {

  return (
    <div>
      <Route path='/:pageNumber' component={TheSession} />
      <Route exact path='/' component={TheSession} />
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
