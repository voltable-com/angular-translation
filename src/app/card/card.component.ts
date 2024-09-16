import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from '../translation-loader.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(
    private translate: TranslateService,
    private translationLoader: TranslationLoaderService
  ) {
    this.translationLoader.initComponentTranslations('card');
    // this.loadTranslations();
  }

  loadTranslations() {
    const currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.translationLoader.loadComponentTranslations('card', currentLang).subscribe();
  }

  switchLanguage(language: string) {    
    this.translate.use(language);
    // this.loadTranslations();
  }
}
