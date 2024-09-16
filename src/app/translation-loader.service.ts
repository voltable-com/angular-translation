import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationLoaderService {
  constructor(private translate: TranslateService, private http: HttpClient) {}

  loadComponentTranslations(componentName: string, lang: string) {
    const path = `i18n/${componentName}/${lang}.json`;
    return this.http.get(path).pipe(
      map((translations) => {
        this.translate.setTranslation(lang, translations, true);
      })
    );
  }

  // Utility function to load and merge translations
  initComponentTranslations(componentName: string) {
    const currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.loadComponentTranslations(componentName, currentLang).subscribe();

    // Listen for language changes
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadComponentTranslations(componentName, event.lang).subscribe();
    });
  }
}
