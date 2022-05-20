import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoThousandAndSevenCase'
})
export class TwoThousandAndSevenCasePipe implements PipeTransform {

  counter = 0;

  transform(value: string, ...args: unknown[]): string {
    console.log('twoThousandAndSevenCase.count', this.counter++);

    return [...value].map((char, index) => index % 2 === 0
      ? char.toUpperCase()
      : char.toLowerCase()
    ).join('') + (args ? ` ${JSON.stringify(args)}` : '');
  }

}
