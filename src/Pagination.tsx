import * as React from 'react';
import { Session, sessions } from './exercises';

interface PaginationProps {
  nSession: number;
}

export class Pagination extends React.Component<PaginationProps> {

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
