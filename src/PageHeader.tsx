import * as React from 'react';
import { currentlyRunning } from './langservice';

interface PageHeaderProps {
  file: string;
}
interface PageHeaderState {
  currentlyRunning: boolean;
}
export class PageHeader extends React.Component<PageHeaderProps, PageHeaderState> {
  private subscriptions: monaco.IDisposable[] = [];

  constructor(props: PageHeaderProps) {
    super(props);
    this.state = { currentlyRunning: true };
  }

  componentWillMount() {
    this.updateRunning(this.props);
    this.subscriptions.push(
      currentlyRunning.updated.on((fns) => this.updateRunning(this.props)),
    );
  }

  updateRunning(nextProps) {
    this.setState({
      currentlyRunning: currentlyRunning.value.indexOf(nextProps.file) !== -1,
    });
  }

  componentWillUnmount() {
    for (const s of this.subscriptions) {
      s.dispose();
    }
    this.subscriptions = [];
  }

  render() {
    const isRunning = this.state.currentlyRunning &&
      <div style={{fontStyle: 'italic'}}>(running...)</div>;
    return (
      <div style={{height: '100%'}}>
        <img src='./lean_logo.svg' style={{height: '100%', float: 'left', paddingLeft: '1em', paddingRight: '3em'}}/>
        <div style={{padding: '1em'}}>
          <div style={{fontSize: '80%'}}>
            Live in-browser version of the <a href='https://leanprover.github.io/'>Lean theorem prover</a>.
          </div>
          {isRunning}
        </div>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.updateRunning(nextProps);
  }
}
