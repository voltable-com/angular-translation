import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import { CardComponent } from "./card/card.component";
import { TranslationLoaderService } from './translation-loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(
    private translate: TranslateService,
    private translationLoader: TranslationLoaderService
  ) {
    this.translate.addLangs(['ro', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    // Initialize translations for this component
    this.translationLoader.initComponentTranslations('app');
  }  


  loadTranslations() {
    const currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.translationLoader.loadComponentTranslations('app', currentLang).subscribe();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    // this.loadTranslations();
  }
}
