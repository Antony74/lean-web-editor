import { Message } from 'lean-client-js-browser';
import * as React from 'react';
import { leanColorize } from './widgetUtils';

interface MessageWidgetProps {
  msg: Message;
}

export function MessageWidget({msg}: MessageWidgetProps) {
  const colorOfSeverity = {
    information: 'green',
    warning: 'orange',
    error: 'red',
  };

  return (
    <div style={{paddingBottom: '1em'}}>
      <div style={{ borderBottom: '1px solid', fontFamily: 'sans-serif',
          fontWeight: 'bold', color: colorOfSeverity[msg.severity] }}>
        {msg.pos_line}:{msg.pos_col}: {msg.severity}: {msg.caption}</div>
      <div className='codeblock' dangerouslySetInnerHTML={{__html: leanColorize(msg.text)}}/>
    </div>
  );
}
