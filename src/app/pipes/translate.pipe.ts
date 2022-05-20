import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from '../services/translate.service';
import {SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {
  }

  transform(key: string): string | SafeHtml {
    return this.translateService.getTranslation(key);
  }

}
