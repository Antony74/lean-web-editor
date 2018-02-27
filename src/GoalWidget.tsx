import { InfoRecord } from 'lean-client-js-browser';
import * as React from 'react';
import { leanColorize, Position } from './widgetUtils';

export interface GoalWidgetProps {
  goal: InfoRecord;
  position: Position;
}

export function GoalWidget({goal, position}: GoalWidgetProps) {
  return (
    <div style={{paddingBottom: '1em'}}>
      <div style={{borderBottom: '1px solid', fontWeight: 'bold', fontFamily: 'sans-serif'}}>
        goal at {position.line}:{position.column}</div>
      <div className='codeblock' dangerouslySetInnerHTML={{__html: leanColorize(goal.state)}}/>
    </div>
  );
}
