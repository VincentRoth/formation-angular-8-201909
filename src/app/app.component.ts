import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation-angular8';

  getEnvironment(): string {
    if (environment.production) {
      return 'PRODUCTION';
    }
    return 'DEVELOPMENT';
  }
}
