import {Component} from '@angular/core';
import {interval} from 'rxjs';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UpperCasePipe ]
})
export class AppComponent {

  arrayOfNumbers = [1, 2, 3, 4, 5, 6];
  complexObject = {
    foo: {
      bar: {
        baz: [
          'qqq',
          {ddd: 'eee'},
          {zzz: 999}
        ]
      }
    }
  };

  date = new Date();

  keyValueObject = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E'
  };

  observable$ = interval(1000);

  upperCasePipeReplacementFn(string: string) {
    return string.toUpperCase();
  }

  twoThousandAndSevenCasePipeReplacementFnCounter = 0;
  twoThousandAndSevenCasePipeReplacementFn(string: string) {
    console.log('twoThousandAndSevenCasePipeReplacementFn.count', this.twoThousandAndSevenCasePipeReplacementFnCounter++);

    return [...string].map((char, index) => index % 2 === 0
      ? char.toUpperCase()
      : char.toLowerCase()
    ).join('') + (string ? ` ${JSON.stringify(string)}` : '');
  }

  constructor(public upperCasePipe: UpperCasePipe) {
  }

  doSomething() {
  }

}
