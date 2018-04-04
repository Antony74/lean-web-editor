import { Message } from 'lean-client-js-browser';
import * as React from 'react';
import { Observable } from 'rxjs';
import { GoalWidget, GoalWidgetProps } from './GoalWidget';
import { allMessages, server } from './langservice';
import { MessageWidget } from './MessageWidget';
import { Position } from './widgetUtils';

interface InfoViewProps {
  file: string;
  cursor?: Position;
  extraMessagesStream: Observable<Message[]>;
}
interface InfoViewState {
  goal?: GoalWidgetProps;
  messages: Message[];
}
export class InfoView extends React.Component<InfoViewProps, InfoViewState> {
  private subscriptions: monaco.IDisposable[] = [];
  private extraMessages: Message[] = [];

  constructor(props: InfoViewProps) {
    super(props);
    this.state = { messages: [] };

    this.props.extraMessagesStream.subscribe((messages: Message[]) => {
      this.extraMessages = messages;
      this.updateMessages(this.props);
    });
  }

  componentWillMount() {
    this.updateMessages(this.props);
    this.subscriptions.push(
      server.allMessages.on((allMsgs) => this.updateMessages(this.props)),
    );
  }

  updateMessages(nextProps) {
    this.setState({
      messages: allMessages.filter((v) => v.file_name === this.props.file),
    });
  }

  componentWillUnmount() {
    for (const s of this.subscriptions) {
      s.dispose();
    }
    this.subscriptions = [];
  }

  render() {
    const goal = this.state.goal && (<div key={'goal'}>{GoalWidget(this.state.goal)}</div>);
    const msgs = this.state.messages.concat(this.extraMessages).map((msg, i) =>
      (<div key={i}>{MessageWidget({msg})}</div>));
    return (
      <div>
        {goal}
        {msgs}
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.updateMessages(nextProps);
    this.refreshGoal(nextProps);
  }

  refreshGoal(nextProps?: InfoViewProps) {
    if (!nextProps) {
      nextProps = this.props;
    }
    if (!nextProps.cursor) {
      return;
    }

    const position = nextProps.cursor;
    server.info(nextProps.file, position.line, position.column).then((res) => {
      this.setState({goal: res.record && res.record.state && { goal: res.record, position }});
    });
  }
}
