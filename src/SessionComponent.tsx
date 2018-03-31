import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Exercise, Session, sessions } from './exercises';
import { LeanEditor } from './LeanEditor';
import { Pagination } from './Pagination';

let bFirstTime: boolean = true;

interface SessionComponentProps {
  fullExerciseNumber: string;
}

export class SessionComponent extends React.Component<RouteComponentProps<SessionComponentProps> > {

  sExerciseNumber = '0';

  constructor(props) {
    super(props);
    this.state = { messages: [] };

    this.props.history.listen(this.onRouted.bind(this));
  }

  onRouted() {
    if (this.sExerciseNumber === '0') {
      document.body.scrollIntoView();
    } else {
      const elm: HTMLElement = document.getElementById('current');
      if (elm) {
        elm.scrollIntoView();
      }
    }
}

  render() {

    if (bFirstTime) {
      setImmediate(this.onRouted.bind(this));
      bFirstTime = false;
    }

    let sSessionNumber: string = '1';
    this.sExerciseNumber = '0';

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
