import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TwoThousandAndSevenCasePipe} from './pipes/two-thousand-and-seven-case.pipe';
import { SaveTranslationPipe } from './pipes/save-translation.pipe';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TwoThousandAndSevenCasePipe,
    SaveTranslationPipe,
    TranslatePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
