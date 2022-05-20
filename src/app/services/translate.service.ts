import { Injectable } from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private storage: Record<string, string | SafeHtml> = {};

  saveTranslation(key: string, translation: string | SafeHtml): void {
    if (this.storage[key]) {
      throw new Error(`Перевод для ключа "${key}" уже задан`);
    }

    this.storage[key] = translation;
  }

  getTranslation(key: string): string | SafeHtml {
    return this.storage[key] ?? '—';
  }
}
