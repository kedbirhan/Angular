import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// this line starts the angular application, and it adds with the appliation AppModule, which is our JS code we writ in thr app.module file. so 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
