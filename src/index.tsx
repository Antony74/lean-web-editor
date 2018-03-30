/// <reference types="monaco-editor" />
import { LeanJsOpts } from 'lean-client-js-browser';
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Exercise, Session, sessions } from './exercises';
import { registerLeanLanguage } from './langservice';
import { LeanEditor } from './LeanEditor';

class Pagination extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav aria-label='Session pages'>
        <ul className='pagination justify-content-center'>
          <li className='page-item'><a className='page-link' href='#'>Previous</a></li>
          <li className='page-item'><a className='page-link' href='#'>1</a></li>
          <li className='page-item'><a className='page-link' href='#'>2</a></li>
          <li className='page-item'><a className='page-link' href='#'>3</a></li>
          <li className='page-item'><a className='page-link' href='#'>Next</a></li>
        </ul>
      </nav>
    );
  }
}

class TheSession extends React.Component<any> {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  render() {

    let nSession = 0;
    if (this.props.match && this.props.match.params.pageNumber) {
      nSession = parseInt(this.props.match.params.pageNumber, 10) - 1;

      if (nSession < 0 || nSession >= sessions.length) {
        nSession = 0;
      }
    }

    const session: Session = sessions[nSession];

    return (
      <div>
        <br />
        <Pagination />
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
