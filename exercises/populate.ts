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

tsxLines.push("import * as React from 'react';");
tsxLines.push('');
tsxLines.push('export class Exercise {');
tsxLines.push('  html: JSX.Element;');
tsxLines.push('  code: string[];');
tsxLines.push('}');
tsxLines.push('');
tsxLines.push('export class Session {');
tsxLines.push('  title: JSX.Element;');
tsxLines.push('  exercises: Exercise[];');
tsxLines.push('}');
tsxLines.push('');
tsxLines.push('export class Sessions {');
tsxLines.push('  title: JSX.Element;');
tsxLines.push('  sessions: Session[];');
tsxLines.push('}');
tsxLines.push('');

tsxLines.push('export const sessions: Sessions = {');
tsxLines.push("  title: <h1 style={{textAlign: 'center'}}>Propositional Logic in Lean</h1>,");
tsxLines.push('  sessions: [');

sessions.forEach((session: Session, sessionIndex: number) => {

    tsxLines.push('    {');
    tsxLines.push('      title: <h2>Session ' + (sessionIndex + 1) + '</h2>,');
    tsxLines.push('      exercises: [');

    session.tasks.forEach((task: Task, taskIndex: number) => {
        tsxLines.push('        {');
        tsxLines.push('          html:');
        tsxLines.push(getHtml(task, sessionIndex, taskIndex) + ',');
        tsxLines.push('          code: [');
        tsxLines.push(getCode(task));
        tsxLines.push('          ],');
        tsxLines.push('        },');
    });

    tsxLines.push('      ],');
    tsxLines.push('    },');
});

tsxLines.push('  ],');
tsxLines.push('};');
tsxLines.push('');

fs.writeFileSync(__dirname + '/../src/exercises.tsx', tsxLines.join('\n'), 'utf8');

//
// getHtml
//
function getHtml(task: Task, sessionIndex: number, taskIndex: number) {
    const htmlLines: string[] = [];

    htmlLines.push('<div>');
    const exerciseNumber = [sessionIndex + 1, taskIndex + 1].join('.');
    htmlLines.push('  <h3>Excercise ' + exerciseNumber + '</h3>');
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
        return '            ' + s;
    }).join('\n');
}

//
// getCaptialLetters
//
function getCapitalLetters(accumulator1: any, s: string): any {
    return s.split('').reduce((accumulator2: any, char: string): any => {
        if (char >= 'A' && char <= 'Z') {
            accumulator2[char] = char;
        }
        return accumulator2;
    }, accumulator1);
}

//
// getCode
//
function getCode(task: Task) {
    const codeLines: string[] = [];

    task.conclusions.forEach((conclusion: string) => {

        conclusion = conclusion.replace(/⊥/g, 'false');

        let propositions: any = getCapitalLetters({}, conclusion);

        if (task.assumptions) {
            propositions = task.assumptions.reduce(getCapitalLetters, propositions);
        }

        codeLines.push('example {' + Object.keys(propositions).sort().join(' ') + ' : Prop}');

        if (task.assumptions) {

            let index: number = 0;

            task.assumptions.forEach((assumption: string) => {
                let varName: string = '';
                if (assumption.length === 1) {
                    varName = 'h' + assumption.toLowerCase();
                } else {
                    ++index;
                    varName = 'h' + index;
                }

                assumption = assumption.replace(/⊥/g, 'false');
                codeLines.push('    (' + varName + ' : ' + assumption + ')');
            });
        }

        codeLines.push('  : ' + conclusion + ' := show ' + conclusion + ', from');
        codeLines.push('    sorry');
        codeLines.push('');
    });

    return codeLines.map((s: string): string => {
        return "            '" + s + "',";
    }).join('\n');
}
