import * as React from 'react';

export class Exercise {
  html: JSX.Element;
  code: string[];
}

export class Session {
  title: JSX.Element;
  buttons: string[];
  exercises: Exercise[];
}

export class Sessions {
  title: JSX.Element;
  sessions: Session[];
}

export const sessions: Sessions = {
  title: <h1 style={{textAlign: 'center'}}>Propositional Logic in Lean</h1>,
  sessions: [
    {
      title: <h2>Session 1</h2>,
      buttons: ['and.intro', 'and.left', 'and.right'],
      exercises: [
        {
          html:
            <div>
              <h3>Excercise 1.1</h3>
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
              <h3>Excercise 1.2</h3>
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
              <h3>Excercise 1.3</h3>
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
              <h3>Excercise 1.4</h3>
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
              <h3>Excercise 1.5</h3>
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
              <h3>Excercise 1.6</h3>
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
              <h3>Excercise 1.7</h3>
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
              <h3>Excercise 1.8</h3>
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
              <h3>Excercise 1.9</h3>
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
              <h3>Excercise 1.10</h3>
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
              <h3>Excercise 1.11</h3>
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
              <h3>Excercise 1.12</h3>
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
      buttons: ['and.intro', 'and.left', 'and.right', 'assume', 'show'],
      exercises: [
        {
          html:
            <div>
              <h3>Excercise 2.1</h3>
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
              <h3>Excercise 2.2</h3>
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
              <h3>Excercise 2.3</h3>
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
              <h3>Excercise 2.4</h3>
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
              <h3>Excercise 2.5</h3>
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
              <h3>Excercise 2.6</h3>
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
              <h3>Excercise 2.7</h3>
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
              <h3>Excercise 2.8</h3>
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
              <h3>Excercise 2.9</h3>
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
              <h3>Excercise 2.10</h3>
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
              <h3>Excercise 2.11</h3>
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
              <h3>Excercise 2.12</h3>
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
              <h3>Excercise 2.13</h3>
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
      buttons: ['and.intro', 'and.left', 'and.right', 'assume', 'show'],
      exercises: [
        {
          html:
            <div>
              <h3>Excercise 3.1</h3>
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
              <h3>Excercise 3.2</h3>
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
              <h3>Excercise 3.3</h3>
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
              <h3>Excercise 3.4</h3>
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
              <h3>Excercise 3.5</h3>
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
              <h3>Excercise 3.6</h3>
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
              <h3>Excercise 3.7</h3>
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
              <h3>Excercise 3.8</h3>
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
              <h3>Excercise 3.9</h3>
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
              <h3>Excercise 3.10</h3>
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
              <h3>Excercise 3.11</h3>
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
              <h3>Excercise 3.12</h3>
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
      buttons: ['and.intro', 'and.left', 'and.right', 'assume', 'show'],
      exercises: [
        {
          html:
            <div>
              <h3>Excercise 4.1</h3>
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
            '    (h⊥ : false)',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 4.2</h3>
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
            '    (h⊥ : false)',
            '  : A := show A, from',
            '    sorry',
            '',
            'example {B : Prop}',
            '    (h⊥ : false)',
            '  : B := show B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 4.3</h3>
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
              <h3>Excercise 4.4</h3>
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
              <h3>Excercise 4.5</h3>
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
              <h3>Excercise 4.6</h3>
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
              <h3>Excercise 4.7</h3>
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
              <h3>Excercise 4.8</h3>
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
              <h3>Excercise 4.9</h3>
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
              <h3>Excercise 4.10</h3>
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
              <h3>Excercise 4.11</h3>
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
              <h3>Excercise 4.12</h3>
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
              <h3>Excercise 4.13</h3>
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
              <h3>Excercise 4.14</h3>
              Given
              <ul>
                <li>(A→⊥)∨(B→⊥)∨(C→⊥)</li>
              </ul>
              Show
              <ul>
                <li>(A∧B∧C)→⊥</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A→false)∨(B→false)∨(C→false))',
            '  : (A∧B∧C)→false := show (A∧B∧C)→false, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 4.15</h3>
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
    {
      title: <h2>Session 5</h2>,
      buttons: ['and.intro', 'and.left', 'and.right', 'assume', 'show'],
      exercises: [
        {
          html:
            <div>
              <h3>Excercise 5.1</h3>
              Show
              <ul>
                <li>A∨(A→⊥)</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '  : A∨(A→false) := show A∨(A→false), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 5.2</h3>
              Given
              <ul>
                <li>(B→⊥)→(A→⊥)</li>
              </ul>
              Show
              <ul>
                <li>A→B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : (B→false)→(A→false))',
            '  : A→B := show A→B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 5.3</h3>
              Given
              <ul>
                <li>(A∧B)→⊥</li>
              </ul>
              Show
              <ul>
                <li>(A→⊥)∨(B→⊥)</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : (A∧B)→false)',
            '  : (A→false)∨(B→false) := show (A→false)∨(B→false), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 5.4</h3>
              Given
              <ul>
                <li>((A→⊥)→⊥)</li>
              </ul>
              Show
              <ul>
                <li>A</li>
              </ul>
            </div>,
          code: [
            'example {A : Prop}',
            '    (h1 : ((A→false)→false))',
            '  : A := show A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 5.5</h3>
              Given
              <ul>
                <li>A→B</li>
              </ul>
              Show
              <ul>
                <li>(A→⊥)∨B</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : A→B)',
            '  : (A→false)∨B := show (A→false)∨B, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 5.6</h3>
              Given
              <ul>
                <li>A→B</li>
                <li>B→C</li>
              </ul>
              Show
              <ul>
                <li>(A→⊥)∨C</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : A→B)',
            '    (h2 : B→C)',
            '  : (A→false)∨C := show (A→false)∨C, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 5.7</h3>
              Show
              <ul>
                <li>((A→B)→A)→A</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '  : ((A→B)→A)→A := show ((A→B)→A)→A, from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 5.8</h3>
              Given
              <ul>
                <li>(A∧B∧C)→⊥</li>
              </ul>
              Show
              <ul>
                <li>(A→⊥)∨(B→⊥)∨(C→⊥)</li>
              </ul>
            </div>,
          code: [
            'example {A B C : Prop}',
            '    (h1 : (A∧B∧C)→false)',
            '  : (A→false)∨(B→false)∨(C→false) := show (A→false)∨(B→false)∨(C→false), from',
            '    sorry',
            '',
          ],
        },
        {
          html:
            <div>
              <h3>Excercise 5.9</h3>
              Given
              <ul>
                <li>(A→B)→⊥</li>
              </ul>
              Show
              <ul>
                <li>A∧(B→⊥)</li>
              </ul>
            </div>,
          code: [
            'example {A B : Prop}',
            '    (h1 : (A→B)→false)',
            '  : A∧(B→false) := show A∧(B→false), from',
            '    sorry',
            '',
          ],
        },
      ],
    },
  ],
};
