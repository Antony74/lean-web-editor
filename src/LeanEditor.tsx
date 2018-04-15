import { Message } from 'lean-client-js-browser';
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as sp from 'react-split-pane';
import { Subject } from 'rxjs';
import { InfoView } from './InfoView';
import { RunningStatus } from './RunningStatus';
import { Position } from './widgetUtils';

const SplitPane: any = sp;

interface LeanEditorProps {
  file: string;
  initialValue: string;
  onValueChange?: (value: string) => void;
}

interface LeanEditorState {
  cursor?: Position;
  split: 'vertical' | 'horizontal';
}

export class LeanEditor extends React.Component<LeanEditorProps, LeanEditorState> {
  model: monaco.editor.IModel;
  editor: monaco.editor.IStandaloneCodeEditor;

  extraMessagesSubject: Subject<Message[]> = new Subject<Message[]>();

  reset = (() => {
    this.model.setValue(this.props.initialValue);
  }).bind(this);

  constructor(props) {
    super(props);
    this.state = {split: 'vertical'};
    const initialValue = localStorage.getItem(this.props.file) || this.props.initialValue;
    const uri: monaco.Uri = monaco.Uri.file(this.props.file);
    this.model = monaco.editor.getModel(uri);
    if (!this.model) {
      this.model = monaco.editor.createModel(initialValue, 'lean', uri);
    }

    this.model.onDidChangeContent((e) => {

      localStorage.setItem(this.props.file, this.model.getValue());

      let target: string = this.model.getValue();
      let questionsChanged: boolean = false;

      const pieces: string[] = this.props.initialValue.split('sorry');

      pieces.forEach((s: string) => {
        s = s.trim();
        const pos: number = target.indexOf(s);
        if (pos === -1) {
          target = '';
          questionsChanged = true;
        } else {
          target = target.substr(pos + s.length);
        }
      });

      if (questionsChanged) {
        this.extraMessagesSubject.next([{
          file_name: this.props.file,
          pos_line: 1,
          pos_col: 0,
          severity: 'warning',
          caption: '',
          text: 'The question has changed',
        }]);
      } else {
        this.extraMessagesSubject.next([]);
      }

      return this.props.onValueChange
      &&     this.props.onValueChange(this.model.getValue());
    });
  }

  componentDidMount() {
    const node = findDOMNode(this.refs.monaco) as HTMLElement;
    const options: monaco.editor.IEditorConstructionOptions = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      theme: 'vs',
      cursorStyle: 'line',
      automaticLayout: true,
      cursorBlinking: 'solid',
      model: this.model,
      minimap: {enabled: false},
    };
    this.editor = monaco.editor.create(node, options);
    this.editor.onDidChangeCursorPosition((e) =>
      this.setState({cursor: {line: e.position.lineNumber, column: e.position.column - 1}}));
    this.determineSplit();
    window.addEventListener('resize', this.updateDimensions.bind(this));
    monaco.editor.setTheme('vs-dark');
  }
  componentWillUnmount() {
    this.editor.dispose();
    this.editor = undefined;
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.determineSplit();
  }
  determineSplit() {
    const node = findDOMNode(this.refs.root) as HTMLElement;
    this.setState({split: node.clientHeight > node.clientWidth ? 'horizontal' : 'vertical'});
  }

  render() {
    const height = 300;
    const containerHeight = height + 'px';
    const editorHeight = (height - 10) + 'px';
    const outputHeight = (height - 20) + 'px';
    return (
      <div className='leanEditor'>
        <div style={{marginLeft: '1ex'}}>
          <button type='button' className='btn btn-danger' onClick={this.reset} >Reset</button>
        </div>
        <div style={{height: containerHeight, width: '100%', position: 'relative'}} ref='root'>
          <SplitPane split={this.state.split} defaultSize='50%' allowResize={true}>
            <div ref='monaco' style={{
              height: editorHeight, width: '100%',
              margin: '1ex', marginRight: '2em',
              overflow: 'hidden'}} />
            <div style={{overflowY: 'scroll', height: outputHeight, margin: '1ex' }}>
              <InfoView file={this.props.file}
                        cursor={this.state.cursor}
                        extraMessagesStream={this.extraMessagesSubject} />
            </div>
          </SplitPane>
        </div>
        <RunningStatus file={this.props.file} />
      </div>
    );
  }
}
