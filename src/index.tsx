/// <reference types="monaco-editor" />
import { LeanJsOpts } from 'lean-client-js-browser';
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, RouteComponentProps } from 'react-router-dom';
import { Exercise, Session, sessions } from './exercises';
import { registerLeanLanguage } from './langservice';
import { LeanEditor } from './LeanEditor';

interface PaginationProps {
  nSession: number;
}

class Pagination extends React.Component<PaginationProps> {

  constructor(props) {
    super(props);
  }

  render() {

    let prevClass = 'page-item';
    let nextClass = 'page-item';

    if (this.props.nSession < 1) {
      prevClass += ' disabled';
    }

    if (this.props.nSession + 1 >= sessions.length) {
      nextClass += ' disabled';
    }

    return (
      <nav aria-label='Session pages'>
        <ul className='pagination justify-content-center'>
          <li className={prevClass}><a className='page-link' href={'#/' + this.props.nSession}>Previous</a></li>
          {
            sessions.map((session: Session, index: number) => {
              const nSession = index + 1;

              return (
                <li className='page-item'><a className='page-link' href={'#/' + nSession}>{nSession}</a></li>
              );
            })
          }
          <li className={nextClass}><a className='page-link' href={'#/' + (this.props.nSession + 2)}>Next</a></li>
        </ul>
      </nav>
    );
  }
}

interface TheSessionRouteProps {
  pageNumber: string;
}

class TheSession extends React.Component<RouteComponentProps<TheSessionRouteProps> > {

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
        <Pagination nSession={nSession} />
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
        <Pagination nSession={nSession} />
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
