import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from '../services/translate.service';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'saveTranslation'
})
export class SaveTranslationPipe implements PipeTransform {

  constructor(
    private translateService: TranslateService,
    private domSanitizer: DomSanitizer
  ) {
  }

  transform(translation: string, key: string, isHtml?: boolean): null {
    this.translateService.saveTranslation(key, isHtml
      ? this.domSanitizer.bypassSecurityTrustHtml(translation)
      : translation);
    return null;
  }

}
