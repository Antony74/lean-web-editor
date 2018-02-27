import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as sp from 'react-split-pane';
import { Position } from './GoalWidget';
import { InfoView } from './InfoView';
import { PageHeader } from './PageHeader';
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

  constructor(props) {
    super(props);
    this.state = {split: 'vertical'};
    this.model = monaco.editor.createModel(this.props.initialValue, 'lean', monaco.Uri.file(this.props.file));
    this.model.onDidChangeContent((e) =>
      this.props.onValueChange &&
      this.props.onValueChange(this.model.getValue()));
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
    return (<div>
      <div style={{height: '5em', overflow: 'hidden'}}>
        <PageHeader file={this.props.file}/>
      </div>
      <div style={{height: 'calc(99vh - 5em)', width: '100%', position: 'relative'}} ref='root'>
        <SplitPane split={this.state.split} defaultSize='50%' allowResize={true}>
          <div ref='monaco' style={{
            height: '100%', width: '100%',
            margin: '1ex', marginRight: '2em',
            overflow: 'hidden'}}/>
          <div style={{overflowY: 'scroll', height: 'calc(100% - 10px)', margin: '1ex' }}>
            <InfoView file={this.props.file} cursor={this.state.cursor}/>
          </div>
        </SplitPane>
      </div>
    </div>);
  }
}
