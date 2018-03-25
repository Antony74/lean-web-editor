import * as fs from 'fs';
import { safeLoad } from 'js-yaml';

class Task {
    assumptions: string[];
    conclusions: string[];
    'min-blocks': number;
}

class Session {
    name: string;
    logic: string;
    'visible-rules': string[];
    tasks: Task[];
}

const yamlString = fs.readFileSync(__dirname + '/sessions.yaml', 'utf-8');

const allSessions: Session[] = safeLoad(yamlString);
const sessions = allSessions.slice(0, 5); // Just take the sessions on proposistional logic

const tsxLines: string[] = [];

tsxLines.push('export class Exercise {');
tsxLines.push('    html: JSX.Element;');
tsxLines.push('    code: string;');
tsxLines.push('  }');
tsxLines.push('');

tsxLines.push('export const exercises: Exercise[][] = [');

sessions.forEach((session: Session, sessionIndex: number) => {

    tsxLines.push('  [');

    session.tasks.forEach((task: Task, taskIndex: number) => {
        tsxLines.push('    {');
        tsxLines.push('      html:');
        tsxLines.push(getHtml(task, sessionIndex, taskIndex) + ',');
        tsxLines.push('      code: \'\',');
        tsxLines.push('    },');
    });

    tsxLines.push('  ],');
});

tsxLines.push('];');
tsxLines.push('');

fs.writeFileSync(__dirname + '/../exercises.tsx', tsxLines.join('\n'), 'utf8');

function getHtml(task: Task, sessionIndex: number, taskIndex: number) {
    const htmlLines: string[] = [];

    htmlLines.push('<div>');
    const exerciseNumber = [sessionIndex + 1, taskIndex + 1].join('.');
    htmlLines.push('  Excercise ' + exerciseNumber + '<br/>');
    console.log(exerciseNumber);

    if (task.assumptions && task.assumptions.length) {
        htmlLines.push('  Given');
        htmlLines.push('  <ul>');

        task.assumptions.forEach((item: string) => {
            htmlLines.push('    <li>' + item + '</li>');
        });

        htmlLines.push('  </ul>');
    }

    htmlLines.push('  Show');
    htmlLines.push('  <ul>');

    task.conclusions.forEach((item: string) => {
        htmlLines.push('    <li>' + item + '</li>');
    });

    htmlLines.push('  </ul>');

    htmlLines.push('</div>');

    return htmlLines.map((s: string): string => {
        return '        ' + s;
    }).join('\n');
}
