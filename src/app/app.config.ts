import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from "@angular/core";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {HttpClient} from '@angular/common/http';
import { HttpLoaderFactory } from "./translate-loader.factory";


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withFetch()
    ),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })])
  ],
};
