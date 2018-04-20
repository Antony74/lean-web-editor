import * as React from 'react';

export class Exercise {
  html: JSX.Element;
  code: string[];
}

export class Session {
  title: JSX.Element;
  buttons: Array<string | string[] >;
  exercises: Exercise[];
}

export class Sessions {
  title: JSX.Element;
  sessions: Session[];
}

export const sessions: Sessions = {
  title:
    <div style={{textAlign: 'center', paddingLeft: '25%', paddingRight: '25%'}}>
      <h1>Propositional Logic in Lean</h1>
      <p>
        The knowledge needed to complete these exercises can be found in Logic and Proof,&nbsp;
        <a href='https://leanprover.github.io/logic_and_proof/propositional_logic_in_lean.html'>
          Chapter 4 - Propositional Logic in Lean
        </a> (and it might help to read the previous chapters first).
      </p>
      <p>
        The exercises are taken from <a
        href='http://incredible.pm'>The Incredible Proof Machine</a> (under <a
        href='https://github.com/nomeata/incredible/blob/master/LICENSE'>license</a>).
        Some people will find it easier, more fun, and addictive to do each exercise on The
        Incredible Proof Machine first and then port their proof to Lean.
      </p>
      <p>
        Create you own exercises by forking the <a
        href='https://github.com/Antony74/lean-web-editor/tree/exercises'>repository</a>  on
        GitHub then editing <a
        href='https://github.com/Antony74/lean-web-editor/blob/exercises/src/exercises.tsx'>exercises.tsx</a>.
      </p>
    </div>,
  sessions: [
    {
      title: <h2>Session 1</h2>,
      buttons: [
        'and.intro',
        'and.left',
        'and.right',
      ],
      exercises: [
        {
          html:
            <div>
              <h3><a href='/#1.1'>Excercise 1.1</a></h3>
              Given
              <ul>
                <li>A</li>
              </ul>
              Show
              <ul>
                <li>A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (ha : A)',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.2'>Excercise 1.2</a></h3>
              Given
              <ul>
                <li>A</li>
                <li>B</li>
              </ul>
              Show
              <ul>
                <li>A</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (ha : A)',
            '    (hb : B)',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.3'>Excercise 1.3</a></h3>
              Given
              <ul>
                <li>A</li>
                <li>B</li>
              </ul>
              Show
              <ul>
                <li>B</li>
                <li>A</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (ha : A)',
            '    (hb : B)',
            '  : B := show B, from',
            '    sorry',
            '',
            'example {A B : Prop}',
            '    (ha : A)',
            '    (hb : B)',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.4'>Excercise 1.4</a></h3>
              Given
              <ul>
                <li>A</li>
                <li>B</li>
              </ul>
              Show
              <ul>
                <li>A∧B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (ha : A)',
            '    (hb : B)',
            '  : A∧B := show A∧B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.5'>Excercise 1.5</a></h3>
              Given
              <ul>
                <li>A</li>
              </ul>
              Show
              <ul>
                <li>A∧A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (ha : A)',
            '  : A∧A := show A∧A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.6'>Excercise 1.6</a></h3>
              Given
              <ul>
                <li>A∧B</li>
              </ul>
              Show
              <ul>
                <li>A</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A∧B)',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.7'>Excercise 1.7</a></h3>
              Given
              <ul>
                <li>A∧B</li>
              </ul>
              Show
              <ul>
                <li>A</li>
                <li>B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A∧B)',
            '  : A := show A, from',
            '    sorry',
            '',
            'example {A B : Prop}',
            '    (h1 : A∧B)',
            '  : B := show B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.8'>Excercise 1.8</a></h3>
              Given
              <ul>
                <li>A∧B</li>
              </ul>
              Show
              <ul>
                <li>A∧B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A∧B)',
            '  : A∧B := show A∧B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.9'>Excercise 1.9</a></h3>
              Given
              <ul>
                <li>A∧B</li>
              </ul>
              Show
              <ul>
                <li>B∧A</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A∧B)',
            '  : B∧A := show B∧A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.10'>Excercise 1.10</a></h3>
              Given
              <ul>
                <li>(A∧B)∧C</li>
              </ul>
              Show
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A∧B)∧C)',
            '  : A := show A, from',
            '    sorry',
            '',
            'example {A B C : Prop}',
            '    (h1 : (A∧B)∧C)',
            '  : B := show B, from',
            '    sorry',
            '',
            'example {A B C : Prop}',
            '    (h1 : (A∧B)∧C)',
            '  : C := show C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.11'>Excercise 1.11</a></h3>
              Given
              <ul>
                <li>(A∧B)∧C</li>
              </ul>
              Show
              <ul>
                <li>A∧C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A∧B)∧C)',
            '  : A∧C := show A∧C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#1.12'>Excercise 1.12</a></h3>
              Given
              <ul>
                <li>(A∧B)∧C</li>
              </ul>
              Show
              <ul>
                <li>A∧(B∧C)</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A∧B)∧C)',
            '  : A∧(B∧C) := show A∧(B∧C), from',
            '    sorry',
            '',
          ],
        },
      ],
    },
    {
      title: <h2>Session 2</h2>,
      buttons: [
        '∧',
        '→',
        'and.intro',
        'and.left',
        'and.right',
        [
          'assume',
          'show',
          'from',
        ],
      ],
      exercises: [
        {
          html:
            <div>
              <h3><a href='/#2.1'>Excercise 2.1</a></h3>
              Given
              <ul>
                <li>A</li>
                <li>A→B</li>
              </ul>
              Show
              <ul>
                <li>B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (ha : A)',
            '    (h1 : A→B)',
            '  : B := show B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.2'>Excercise 2.2</a></h3>
              Given
              <ul>
                <li>A</li>
                <li>A→B</li>
                <li>B→C</li>
              </ul>
              Show
              <ul>
                <li>C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (ha : A)',
            '    (h1 : A→B)',
            '    (h2 : B→C)',
            '  : C := show C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.3'>Excercise 2.3</a></h3>
              Given
              <ul>
                <li>A</li>
                <li>A→B</li>
                <li>A→C</li>
                <li>B→D</li>
                <li>C→D</li>
              </ul>
              Show
              <ul>
                <li>D</li>
              </ul>
            </div>,
          code: [
            'example {A B C D : Prop}',
            '    (ha : A)',
            '    (h1 : A→B)',
            '    (h2 : A→C)',
            '    (h3 : B→D)',
            '    (h4 : C→D)',
            '  : D := show D, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.4'>Excercise 2.4</a></h3>
              Given
              <ul>
                <li>A</li>
                <li>A→A</li>
              </ul>
              Show
              <ul>
                <li>A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (ha : A)',
            '    (h1 : A→A)',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.5'>Excercise 2.5</a></h3>
              Given
              <ul>
                <li>A→B</li>
                <li>B→C</li>
              </ul>
              Show
              <ul>
                <li>A→C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : A→B)',
            '    (h2 : B→C)',
            '  : A→C := show A→C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.6'>Excercise 2.6</a></h3>
              Given
              <ul>
                <li>A→B</li>
                <li>A→(B→C)</li>
              </ul>
              Show
              <ul>
                <li>A→C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : A→B)',
            '    (h2 : A→(B→C))',
            '  : A→C := show A→C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.7'>Excercise 2.7</a></h3>
              Show
              <ul>
                <li>A→A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '  : A→A := show A→A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.8'>Excercise 2.8</a></h3>
              Given
              <ul>
                <li>A→C</li>
                <li>B→C</li>
                <li>A∧B</li>
              </ul>
              Show
              <ul>
                <li>C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : A→C)',
            '    (h2 : B→C)',
            '    (h3 : A∧B)',
            '  : C := show C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.9'>Excercise 2.9</a></h3>
              Given
              <ul>
                <li>A→C</li>
                <li>B→C</li>
              </ul>
              Show
              <ul>
                <li>(A∧B)→C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : A→C)',
            '    (h2 : B→C)',
            '  : (A∧B)→C := show (A∧B)→C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.10'>Excercise 2.10</a></h3>
              Given
              <ul>
                <li>B</li>
              </ul>
              Show
              <ul>
                <li>A→B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (hb : B)',
            '  : A→B := show A→B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.11'>Excercise 2.11</a></h3>
              Given
              <ul>
                <li>(A∧B)→C</li>
              </ul>
              Show
              <ul>
                <li>A→(B→C)</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A∧B)→C)',
            '  : A→(B→C) := show A→(B→C), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.12'>Excercise 2.12</a></h3>
              Given
              <ul>
                <li>A→(B→C)</li>
              </ul>
              Show
              <ul>
                <li>(A∧B)→C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : A→(B→C))',
            '  : (A∧B)→C := show (A∧B)→C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#2.13'>Excercise 2.13</a></h3>
              Given
              <ul>
                <li>(A→B)∧(A→C)</li>
              </ul>
              Show
              <ul>
                <li>A→(B∧C)</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A→B)∧(A→C))',
            '  : A→(B∧C) := show A→(B∧C), from',
            '    sorry',
            '',
          ],
        },
      ],
    },
    {
      title: <h2>Session 3</h2>,
      buttons: [
        '∧',
        '∨',
        '→',
        'and.intro',
        'and.left',
        'and.right',
        [
          'assume',
          'show',
          'from',
        ],
        'or.inl',
        'or.inr',
        'or.elim',
      ],
      exercises: [
        {
          html:
            <div>
              <h3><a href='/#3.1'>Excercise 3.1</a></h3>
              Given
              <ul>
                <li>A</li>
                <li>B</li>
              </ul>
              Show
              <ul>
                <li>A∨B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (ha : A)',
            '    (hb : B)',
            '  : A∨B := show A∨B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.2'>Excercise 3.2</a></h3>
              Given
              <ul>
                <li>A</li>
              </ul>
              Show
              <ul>
                <li>A∨B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (ha : A)',
            '  : A∨B := show A∨B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.3'>Excercise 3.3</a></h3>
              Given
              <ul>
                <li>B</li>
              </ul>
              Show
              <ul>
                <li>A∨B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (hb : B)',
            '  : A∨B := show A∨B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.4'>Excercise 3.4</a></h3>
              Given
              <ul>
                <li>A</li>
              </ul>
              Show
              <ul>
                <li>A∨A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (ha : A)',
            '  : A∨A := show A∨A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.5'>Excercise 3.5</a></h3>
              Given
              <ul>
                <li>A∨B</li>
              </ul>
              Show
              <ul>
                <li>B∨A</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A∨B)',
            '  : B∨A := show B∨A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.6'>Excercise 3.6</a></h3>
              Given
              <ul>
                <li>A∨(B∨C)</li>
              </ul>
              Show
              <ul>
                <li>(A∨B)∨C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : A∨(B∨C))',
            '  : (A∨B)∨C := show (A∨B)∨C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.7'>Excercise 3.7</a></h3>
              Given
              <ul>
                <li>A∧B</li>
              </ul>
              Show
              <ul>
                <li>A∨B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A∧B)',
            '  : A∨B := show A∨B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.8'>Excercise 3.8</a></h3>
              Given
              <ul>
                <li>(A∧B)∨C</li>
              </ul>
              Show
              <ul>
                <li>(A∨C)∧(B∨C)</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A∧B)∨C)',
            '  : (A∨C)∧(B∨C) := show (A∨C)∧(B∨C), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.9'>Excercise 3.9</a></h3>
              Given
              <ul>
                <li>(A∨B)∧C</li>
              </ul>
              Show
              <ul>
                <li>(A∧C)∨(B∧C)</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A∨B)∧C)',
            '  : (A∧C)∨(B∧C) := show (A∧C)∨(B∧C), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.10'>Excercise 3.10</a></h3>
              Given
              <ul>
                <li>(A→C)∧(B→C)</li>
              </ul>
              Show
              <ul>
                <li>(A∨B)→C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A→C)∧(B→C))',
            '  : (A∨B)→C := show (A∨B)→C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.11'>Excercise 3.11</a></h3>
              Given
              <ul>
                <li>(A∨B)→C</li>
              </ul>
              Show
              <ul>
                <li>(A→C)∧(B→C)</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A∨B)→C)',
            '  : (A→C)∧(B→C) := show (A→C)∧(B→C), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#3.12'>Excercise 3.12</a></h3>
              Given
              <ul>
                <li>(A→B)∨(A→C)</li>
              </ul>
              Show
              <ul>
                <li>A→(B∨C)</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A→B)∨(A→C))',
            '  : A→(B∨C) := show A→(B∨C), from',
            '    sorry',
            '',
          ],
        },
      ],
    },
    {
      title: <h2>Session 4</h2>,
      buttons: [
        '∧',
        '∨',
        '→',
        'and.intro',
        'and.left',
        'and.right',
        [
          'assume',
          'show',
          'from',
        ],
        'or.inl',
        'or.inr',
        'or.elim',
        'false.elim',
      ],
      exercises: [
        {
          html:
            <div>
              <h3><a href='/#4.1'>Excercise 4.1</a></h3>
              Given
              <ul>
                <li>⊥</li>
              </ul>
              Show
              <ul>
                <li>A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (h1 : false)',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.2'>Excercise 4.2</a></h3>
              Given
              <ul>
                <li>⊥</li>
              </ul>
              Show
              <ul>
                <li>A</li>
                <li>B</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (h1 : false)',
            '  : A := show A, from',
            '    sorry',
            '',
            'example {B : Prop}',
            '    (h1 : false)',
            '  : B := show B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.3'>Excercise 4.3</a></h3>
              Given
              <ul>
                <li>A</li>
              </ul>
              Show
              <ul>
                <li>⊥∨A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (ha : A)',
            '  : false∨A := show false∨A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.4'>Excercise 4.4</a></h3>
              Given
              <ul>
                <li>⊥∨A</li>
              </ul>
              Show
              <ul>
                <li>A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (h1 : false∨A)',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.5'>Excercise 4.5</a></h3>
              Given
              <ul>
                <li>⊥∧A</li>
              </ul>
              Show
              <ul>
                <li>⊥</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (h1 : false∧A)',
            '  : false := show false, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.6'>Excercise 4.6</a></h3>
              Show
              <ul>
                <li>⊥→A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '  : false→A := show false→A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.7'>Excercise 4.7</a></h3>
              Given
              <ul>
                <li>A→B</li>
              </ul>
              Show
              <ul>
                <li>(B→⊥)→(A→⊥)</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A→B)',
            '  : (B→false)→(A→false) := show (B→false)→(A→false), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.8'>Excercise 4.8</a></h3>
              Given
              <ul>
                <li>(A∨B)→⊥</li>
              </ul>
              Show
              <ul>
                <li>(A→⊥)∧(B→⊥)</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : (A∨B)→false)',
            '  : (A→false)∧(B→false) := show (A→false)∧(B→false), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.9'>Excercise 4.9</a></h3>
              Given
              <ul>
                <li>(A→⊥)∧(B→⊥)</li>
              </ul>
              Show
              <ul>
                <li>(A∨B)→⊥</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : (A→false)∧(B→false))',
            '  : (A∨B)→false := show (A∨B)→false, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.10'>Excercise 4.10</a></h3>
              Given
              <ul>
                <li>(A→⊥)∨(B→⊥)</li>
              </ul>
              Show
              <ul>
                <li>(A∧B)→⊥</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : (A→false)∨(B→false))',
            '  : (A∧B)→false := show (A∧B)→false, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.11'>Excercise 4.11</a></h3>
              Given
              <ul>
                <li>(((A→⊥)→⊥)→⊥)</li>
              </ul>
              Show
              <ul>
                <li>A→⊥</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (h1 : (((A→false)→false)→false))',
            '  : A→false := show A→false, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.12'>Excercise 4.12</a></h3>
              Given
              <ul>
                <li>(A→⊥)∨B</li>
              </ul>
              Show
              <ul>
                <li>A→B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : (A→false)∨B)',
            '  : A→B := show A→B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.13'>Excercise 4.13</a></h3>
              Given
              <ul>
                <li>A→⊥</li>
                <li>B→A</li>
              </ul>
              Show
              <ul>
                <li>B→⊥</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A→false)',
            '    (h2 : B→A)',
            '  : B→false := show B→false, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.14'>Excercise 4.14</a></h3>
              Given
              <ul>
                <li>((A→⊥)∨(B→⊥))∨(C→⊥)</li>
              </ul>
              Show
              <ul>
                <li>((A∧B)∧C)→⊥</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : ((A→false)∨(B→false))∨(C→false))',
            '  : ((A∧B)∧C)→false := show ((A∧B)∧C)→false, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3><a href='/#4.15'>Excercise 4.15</a></h3>
              Show
              <ul>
                <li>((A∨(A→⊥))→⊥)→⊥</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '  : ((A∨(A→false))→false)→false := show ((A∨(A→false))→false)→false, from',
            '    sorry',
            '',
          ],
        },
      ],
    },
  ],
};
