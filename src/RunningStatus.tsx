import * as React from 'react';
import { currentlyRunning } from './langservice';

interface RunningStatusProps {
  file: string;
}
interface RunningStatusState {
  currentlyRunning: boolean;
}
export class RunningStatus extends React.Component<RunningStatusProps, RunningStatusState> {
  private subscriptions: monaco.IDisposable[] = [];

  constructor(props: RunningStatusProps) {
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
    const isRunning = this.state.currentlyRunning
      ? <div style={{fontStyle: 'italic'}}>(running...)</div>
      : <div>&nbsp;</div>;
    return (
        <div style={{padding: '1em'}}>
          {isRunning}
        </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.updateRunning(nextProps);
  }
}
