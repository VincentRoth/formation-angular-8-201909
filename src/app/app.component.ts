import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation-angular8';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  getEnvironment(): string {
    if (environment.production) {
      return 'PRODUCTION';
    }
    return 'DEVELOPMENT';
  }
}
