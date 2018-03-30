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
                <li className='page-item' key={index}>
                  <a className='page-link' href={'#/' + nSession}>{nSession}</a>
                </li>
              );
            })
          }
          <li className={nextClass}><a className='page-link' href={'#/' + (this.props.nSession + 2)}>Next</a></li>
        </ul>
      </nav>
    );
  }
}

interface SessionComponentProps {
  fullExerciseNumber: string;
}

class SessionComponent extends React.Component<RouteComponentProps<SessionComponentProps> > {

  sExerciseNumber = '1';

  constructor(props) {
    super(props);
    this.state = { messages: [] };

    this.props.history.listen((location, action) => {
      if (this.sExerciseNumber === '1') {
        document.body.scrollIntoView();
      } else {
        const elm: HTMLElement = document.getElementById('current');
        if (elm) {
          elm.scrollIntoView();
        }
      }
    });
  }

  render() {

    let sSessionNumber: string = '1';
    this.sExerciseNumber = '1';

    if (this.props.match && this.props.match.params.fullExerciseNumber) {
      const arr: string[] = this.props.match.params.fullExerciseNumber.split('.');
      if (arr.length) {
        sSessionNumber = arr[0];
        arr.shift();
        if (arr.length) {
          this.sExerciseNumber = arr[0];
        }
      }
    }

    let nSession: number = parseInt(sSessionNumber, 10) - 1;

    if (nSession < 0 || nSession >= sessions.length) {
      nSession = 0;
    }

    const session: Session = sessions[nSession];

    let nExercise: number = parseInt(this.sExerciseNumber, 10) - 1;

    if (nExercise < 0 || nExercise >= session.exercises.length) {
      nExercise = 0;
    }

    return (
      <div>
        <br />
        <Pagination nSession={nSession} />
        <h1>{session.name}</h1>
        {
          session.exercises.map((exercise: Exercise, index: number): JSX.Element => {

            let idName: string = '';

            if (nExercise === index) {
              idName = 'current';
            }

            const exFile = monaco.Uri.file('exercise' + index + '.lean').fsPath;
            const code = exercise.code.join('\n');

            return (
              <div key={index} id={idName}>
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
